import _ from "underscore";
import { AVATAR_URL, DOCUMENT_PREVIEW_URL } from "utils/constant";
import { saveAs } from "file-saver";
import { Logger } from "core/Logger";

const wordFiles = [
  "msword",
  "vnd.openxmlformats-officedocument.wordprocessingml.document",
];

export const getDisplayFileExtension = (fileExtension) => {
  return "plain" === fileExtension
    ? "txt"
    : wordFiles.some((item) => item === fileExtension)
      ? "docx"
      : fileExtension;
};

export const getFileExtension = (filename) => {
  return (
    _.isString(filename) && getDisplayFileExtension(filename.split(".").pop())
  );
};

export const getFileName = (fullFileName) => {
  return _.isString(fullFileName) ? fullFileName.replace(/\.[^/.]+$/, "") : "";
};

export const toLowerCase = (text) => {
  return _.isString(text) ? text.toLowerCase() : "";
};

export const fullFileNameWithLowerCaseExtension = (fullFileName) => {
  return _.isString(fullFileName)
    ? `${getFileName(fullFileName)}.${toLowerCase(
        getFileExtension(fullFileName),
      )}`
    : "";
};

export const isValidURL = (url) => {
  const pattern =
    /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
  if (pattern.test(url)) {
    return true;
  }
  return false;
};

export const msToTime = (s) => {
  // Pad to 2 or 3 digits, default is 2
  function pad(n, z) {
    z = z || 2;
    return ("00" + n).slice(-z);
  }

  var ms = s % 1000;
  s = (s - ms) / 1000;
  var secs = s % 60;
  s = (s - secs) / 60;
  var mins = s % 60;
  var hrs = (s - mins) / 60;

  return pad(hrs) + ":" + pad(mins) + ":" + pad(secs);
};

export const isEqual = _.isEqual;

export const beatsmithApplicationURL = () => {
  let copyLinkUrl = `${window.location.origin.toString()}`;
  if (process.env.PUBLIC_URL) {
    copyLinkUrl += process.env.PUBLIC_URL;
  }
  return copyLinkUrl;
};

export const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export const downloadFileFromText = async (text) => {
  try {
    const blob = new Blob([text], {
      type: "text/plain;charset=utf-8",
    });
    const filename = `file_${Math.floor(Math.random() * 1000000)}.txt`;
    saveAs(blob, filename);
  } catch (error) {
    Logger.error("There was a problem with the fetch operation:", error);
  }
};

export const getCookie = (cookieName) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${cookieName}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
};

export const downloadDocument = (response, doc) => {
  const blobData = new Blob([response.data]);
  const url = window.URL.createObjectURL(blobData);
  const link = document.createElement("a");
  link.href = url;
  console.log("document", doc);
  const fileNameExtension = doc.name.split(".").pop();
  if (fileNameExtension === doc.name) {
    doc.name = doc.name + "." + doc.extension;
  }
  // doc.name = 'pdf' === doc.name.split('.').pop() ? doc.name : doc.name + '.' + doc.type;
  link.setAttribute("download", doc.name);
  document.body.appendChild(link);
  link.click();
};

export const getRandomAvatar = () => {
  return Math.floor(Math.random() * 66) + 1;
};

export const getAvatarFullURL = (avatarPath) => {
  if (!avatarPath || avatarPath === "") {
    return "";
  }
  if (avatarPath?.startsWith("/img")) {
    return `${beatsmithApplicationURL()}${avatarPath}`;
  } else {
    return `${AVATAR_URL}/${avatarPath}`;
  }
};

export const getDocumentPreviewFullURL = (documentId) => {
  if (!documentId || documentId === "") {
    return "";
  }
  return `${DOCUMENT_PREVIEW_URL}/${documentId}`;
};
