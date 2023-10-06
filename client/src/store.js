import process from "process";
import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { createLogger } from "redux-logger";
import rootReducer from "./reducers";

const initialState = {};

const logger = createLogger({
  duration: false,
  timestamp: false,
  level: "log",
  diff: false,
});

const middlewares = [thunk];

// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const store = configureStore({
  reducer: rootReducer,
  middleware: middlewares,
  preloadedState: initialState,
});

export default store;
