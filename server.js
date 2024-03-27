import express from "express";
import session from "express-session";
import bodyParser from "body-parser";
import compression from "compression";
import helmet from "helmet";
import cors from "cors";
import passport from "passport";
import initMongo from "./config/mongo.js";
import configurePassport from "./config/passport.js";
import mongoose from "mongoose";
import MongoStore from "connect-mongo";
import path from "path";
import i18n from "i18n";
import axios from "axios";
import apiMetrics from "prometheus-api-metrics";
import actuator from "express-actuator";
import v1Routes from "./server/routes/v1";
import v2Routes from "./server/routes/v2";
import "dotenv-safe/config";

process.on("uncaughtException", err => {
  console.error("UNCAUGHT EXCEPTION! 💥 Shutting down...", err);
  console.log("Node stopped from crashing...");
});

axios.interceptors.response.use(
  response => {
    return response;
  },
  function (error) {
    if (error.response.status === 500) {
      console.log("Unknown server error");
    }
    return Promise.reject(error.response);
  },
);

i18n.configure({
  locales: ["en", "de"],
  directory: path.join(__dirname, "locales"),
  objectNotation: true,
});

const app = express();

//Init other stuff
app.use(cors());
app.use(compression());
app.use(helmet());
app.use(cookieParser());

app.use(express.static(path.join(__dirname, "client/build")));
app.use(i18n.init);

app.use(bodyParser.json({ limit: "200mb" }));

app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: true,
    parameterLimit: 100000,
  }),
);

// Passport middleware
app.use(passport.initialize());

// Passport config
configurePassport(passport);

// Init Mongo
initMongo();

// Initialize the HTTP Session store.
// This is used to store information required for OIDC login
// and have it associated with the client making the requests.
const sessionStore = new MongoStore({
  // using the default collection `sessions` causes issues (for obvious reasons)
  collectionName: "http-sessions-store",
  client: mongoose.connection.getClient(),
});

app.use(
  session({
    secure: true,
    secret: process.env.SESSION_SECRET || "secret",
    resave: true,
    saveUninitialized: false,
    store: sessionStore,
  }),
);

app.use(apiMetrics());
app.use(actuator("/management"));

app.use(v1Routes);
app.use(v2Routes);

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const asUrl = url.parse(argv.as_uri);
const port = asUrl.port;
let server;
if (process.env.NODE_ENV === "development") {
  server = https.createServer(options, app).listen(port, function () {
    console.log("App server started", port);
    console.log("Open " + url.format(asUrl) + " with a WebRTC capable browser");
  });
} else {
  server = http.createServer(app).listen(port, function () {
    console.log("App server started");
    console.log("Open " + url.format(asUrl) + " with a WebRTC capable browser");
  });
}

export default app;
