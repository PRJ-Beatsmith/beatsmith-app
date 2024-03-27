import mongoose from "mongoose";
const DB_URL = process.env.MONGO_URI;
import loadModels from "../server/models";
import { Logger } from "../utils/logger.js";

export default async () => {
  const connect = async () => {
    mongoose.Promise = global.Promise;

    mongoose
      .connect(DB_URL, {
        keepAlive: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false,
      })
      .then(async () => {
        return Logger.info(`Successfully connected to the database ${DB_URL}`);
      })
      .catch(error => {
        Logger.error("Error connecting to database: ", error);
        connect();
      });

    mongoose.set("useCreateIndex", true);
    mongoose.set("useFindAndModify", false);

    loadModels();
    await resetDatabaseWithDefaultValues();
  };
  connect();

  mongoose.connection.on("error", Logger.error);
};

removeUnusedIndexes = async () => {
  let counterIndexes = await CounterModels.collection.getIndexes();
  let deviceIndexes = await DeviceModels.collection.getIndexes();
  let guestIndexes = await GuestModel.collection.getIndexes();
  if (counterIndexes) {
    for (var key in counterIndexes) {
      if (key === "id_1_reference_value_1") {
        CounterModels.collection.dropIndex(key, function (err, result) {
          if (err) {
            console.log("Error in dropping index!", err);
          }
        });
      }
    }
  }

  if (deviceIndexes) {
    for (var deviceIndexesKey in deviceIndexes) {
      if (deviceIndexesKey === "userName_1") {
        DeviceModels.collection.dropIndex(
          deviceIndexesKey,
          function (err, result) {
            if (err) {
              console.log("Error in dropping index!", err);
            }
          },
        );
      }
      if (deviceIndexesKey === "email_1") {
        DeviceModels.collection.dropIndex(
          deviceIndexesKey,
          function (err, result) {
            if (err) {
              console.log("Error in dropping index!", err);
            }
          },
        );
      }
    }
  }

  if (guestIndexes) {
    for (var guestIndexesKey in guestIndexes) {
      if (guestIndexesKey === "email_1") {
        GuestModel.collection.dropIndex(
          guestIndexesKey,
          function (err, result) {
            if (err) {
              console.log("Error in dropping index!", err);
            }
          },
        );
      }
    }
  }

  await DeviceModels.syncIndexes();
  await CounterModels.syncIndexes();
  await GuestModel.syncIndexes();
};

resetDatabaseWithDefaultValues = async () => {};
