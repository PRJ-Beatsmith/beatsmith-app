import { PASSWORD_STRENGTH } from "utils/constants";
import { uuid_v4 } from "utils/uuid_v4";

export const toInitUpperCase = (s) => {
  if (typeof s !== "string") return "";

  return s.charAt(0).toUpperCase() + s.slice(1);
};

export const getFullName = (firstName, lastName) => {
  if (firstName && lastName) {
    return `${firstName} ${lastName}`;
  }

  return "";
};

export const getName = (userDetails) => {
  let name = "";
  if (userDetails && userDetails.firstName) {
    name = `${userDetails.firstName} ${
      userDetails.lastName ? userDetails.lastName : ""
    }`;
  } else if (userDetails && userDetails.userName) {
    name = userDetails.userName;
  } else if (userDetails && userDetails.email) {
    name = userDetails.email;
  } else if (userDetails && userDetails.deviceName) {
    name = userDetails.deviceName;
  } else {
    name = "";
  }

  return name;
};

export const getUserCardSubDetails = (subDetails) => {
  let cardSubDetails = "";

  if (subDetails && subDetails.designation) {
    cardSubDetails = subDetails.designation;
  }

  if (subDetails && subDetails.companyName) {
    if (cardSubDetails) cardSubDetails = cardSubDetails + " | ";
    cardSubDetails = cardSubDetails + subDetails.companyName;
  }
  return cardSubDetails;
};

export const personalDirectName = (members, currentUserId) => {
  let userName = "";
  if (Array.isArray(members)) {
    let member = members.find(
      (member) => member?.memberId?._id !== currentUserId,
    );
    userName = member
      ? member?.memberId?.userName
      : members[0]?.memberId?.userName;
  }
  return userName ? `@${userName}` : "";
};

export const isUrl = (string) =>
  /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/g.test(
    string,
  );

export const isLink = (string) =>
  string.replace(
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/,
    (match) =>
      `<a href="${match}" target="_blank" rel="noreferrer noopener">` +
      match +
      `</a>`,
  );

export const isEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
};

export function formatBytes(bytes, decimals = 2) {
  if (typeof bytes !== "number") bytes = parseInt(bytes);

  if (bytes === 0) return "0 Bytes";

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i];
}

export const formatUserInitials = (firstName, lastName) => {
  if (!firstName && lastName) return lastName;
  if (firstName && !lastName) return firstName;
  if (!firstName && !lastName) return " ";

  return `${firstName[0].toUpperCase()}. ${lastName}`;
};

export const onlyInitials = (line) => {
  let name = line;
  let rgx = new RegExp(/(\p{L}{1})\p{L}+/, "gu");

  let initials = [...name.matchAll(rgx)] || [];

  initials = (
    (initials.shift()?.[1] || "") + (initials.pop()?.[1] || "")
  ).toUpperCase();

  return initials;
};

export const userInitials = (firstName, lastName) => {
  if (!firstName && lastName) return onlyInitials(lastName);
  if (firstName && !lastName) return onlyInitials(firstName);
  if (!firstName && !lastName) return " ";

  return `${onlyInitials(firstName)}${onlyInitials(lastName)}`;
};

export const getASCIISum = (string) =>
  (string || uuid_v4())
    .split("")
    .map((x) => x.charCodeAt(0))
    .reduce((a, b) => a + b);

export const getColorKey = (numberCode, strCode) => {
  const _strCode = strCode ? strCode : uuid_v4();
  return getASCIISum(_strCode) % numberCode || numberCode;
};

export const isPasswordStrong = (password) => {
  const passwordRegex = new RegExp(
    "^(?=.{12,})(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])",
  );
  return passwordRegex.test(password);
};

export const calculatePasswordStrength = (password) => {
  let score = 0;
  let strength = PASSWORD_STRENGTH.WEAK;

  // Check for minimum length
  if (password.length >= 12) {
    score += 10;
  }

  // Check for uppercase letters
  if (password.match(/[A-Z]/)) {
    score += 10;
  }

  // Check for lowercase letters
  if (password.match(/[a-z]/)) {
    score += 10;
  }

  // Check for numbers
  if (password.match(/\d+/)) {
    score += 10;
  }

  // Check for special characters
  if (password.match(/[^A-Za-z0-9]/)) {
    score += 10;
  }

  // Check for combination of characters
  if (
    password.match(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/,
    )
  ) {
    score += 20;
  }

  strength = score < 30 ? PASSWORD_STRENGTH.WEAK : PASSWORD_STRENGTH.MEDIUM;
  if (score > 60) strength = PASSWORD_STRENGTH.STRONG;

  return strength;
};

export const stringToArray = (str) => {
  if (!str) return []; // Handle empty or undefined input
  return str.split(",").filter((s) => s && s.trim().length > 0);
};

export const arrayToString = (arr) => {
  if (!arr || !Array.isArray(arr)) return ""; // Handle empty or non-array input
  return arr.join(",");
};
