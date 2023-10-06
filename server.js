require("dotenv").config();
const cookieParser = require("cookie-parser");
const express = require("express");
const session = require("express-session");
const bodyParser = require("body-parser");
const compression = require("compression");
const helmet = require("helmet");
const cors = require("cors");
const passport = require("passport");
const initMongo = require("./config/mongo");
const mongoose = require("mongoose");
const MongoStore = require("connect-mongo");
const path = require("path");
const i18n = require("i18n");
const socket = require("socket.io");
const https = require("https");
const http = require("http");
const url = require("url");
const fs = require("fs");
const axios = require("axios");

process.on("uncaughtException", function (err) {
  console.error("crash error", err);
  console.log("Node stopped from crashing...");
});

// const socketIo = require("./config/socketIo");

const app = express();

// serve static files from react-app
app.use(express.static(path.join(__dirname, "client/build")));

// configure i18n
i18n.configure({
  locales: ["en", "de"], // set available locales
  directory: path.join(__dirname, "/locales"),
  objectNotation: true,
});

// Bodyparser middleware
app.use(bodyParser.json({ limit: "200mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "200mb",
    extended: true,
    parameterLimit: 100000,
  })
);

// Passport middleware
app.use(passport.initialize());

// Passport config
// require("./config/passport")(passport);

// Init Mongo
initMongo();

// Initialize the HTTP Session store.
const sessionStore = new MongoStore({
  collectionName: "http-session-store",
  client: mongoose.connection.getClient(),
});

app.use(
  session({
    secure: true,
    secret: process.env.SESSION_SECRET || "secret",
    resave: true,
    saveUninitialized: false,
    store: sessionStore,
  })
);

// Routes
app.use(require("./req-res/routes/v1"));
app.use(require("./req-res/routes/v2"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

app.use(cors());
app.use(compression());
app.use(helmet());
app.use(cookieParser());

const asUrl = url.parse(argv.as_uri);
const port = asUrl.port;
let server;
if (process.env.NODE_ENV == "local_development") {
  server = https.createServer(options, app).listen(port, function () {
    console.log("App server started");
    console.log("Open " + url.format(asUrl) + " with a WebRTC capable browser");
  });
} else {
  server = http.createServer(app).listen(port, function () {
    console.log("App server started");
    console.log("Open " + url.format(asUrl) + " with a WebRTC capable browser");
  });
}

socketIo.listen(server);

// require("./cron");
