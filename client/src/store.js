import { configureStore } from "@reduxjs/toolkit";
import { thunk as thunkMiddleware } from "redux-thunk";
import rootReducer from "./reducers";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import { createLogger } from "redux-logger";

const logger = createLogger({
  duration: false,
  timestamp: false,
  level: "log",
  diff: false,
});

const middlewares = [thunkMiddleware];

if (process.env.NODE_ENV === `development`) {
  middlewares.push(logger);
}

const persistConfig = {
  key: "documents",
  storage: storage,
  whitelist: ["clientDevice"],
  stateReconciler: autoMergeLevel2,
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: pReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(middlewares),
});

const persistor = persistStore(store);

export { persistor, store };
