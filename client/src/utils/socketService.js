import { socketConf } from "./socket";
import i18n from "i18next";
import { store } from "react-notifications-component";
import { notificationOptions } from "components/shared/Config/notificationConfig";
import { Logger } from "core/Logger";

export const sendMessage = (message) => {
  const jsonMessage = JSON.stringify(message);
  if (message.actionType === "requestDocImage") {
    // display notification about scanned image requested
    store.addNotification({
      ...notificationOptions,
      title: i18n.t("actions.Success"),
      message: i18n.t(
        "actions.Scanned image requested please wait before requesting again",
      ),
      type: "success",
    });
  }
  socketConf.emit(message.id, jsonMessage, (err) => {
    if (err) {
      Logger.error("sendMessage", err, jsonMessage);
    }
  });
};

export const selfActionCheck = (message) => {
  const jsonMessage = JSON.stringify(message);
  return new Promise(async (resolve, reject) => {
    socketConf.emit(message.id, jsonMessage, (err) => {
      if (err) {
        Logger.error("sendMessage", err, jsonMessage);
        return resolve(false);
      }
      resolve(true);
    });
  });
};

export const updateScreenShareStatus = ({
  sessionCallId,
  isScreenShareStatus,
}) => {
  sessionCallId &&
    socketConf.emit("updateScreenShareStatus", {
      sessionCallId,
      isScreenShareStatus,
    });
};

export const sendMessageForResponse = (message) => {
  const jsonMessage = JSON.stringify(message);
  return new Promise((resolve, reject) => {
    socketConf.emit(message.id, jsonMessage, (response) => {
      if (response && response.error) {
        Logger.log(response.error);
        reject(response.error);
      }
      resolve(response);
    });
  });
};
