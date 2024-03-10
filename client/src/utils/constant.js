export const CONTEXT_PATH = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "";
export const API_URL = process.env.REACT_APP_API_URL;
export const MY_URL = `${window.location.origin}${process.env.PUBLIC_URL}`;
export const FILE_URL = `${MY_URL}/api/v2/document/download/`;
export const AVATAR_URL = `${MY_URL}/api/v2/avatar`;
export const DOCUMENT_PREVIEW_URL = `${MY_URL}/api/v2/document/preview`;
export const BEATSMITH_LOGO = `${process.env.PUBLIC_URL}/img/auth/BENOVA-LOGO.svg`;

export const PENDING = "pending";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const FAILED = "failed";

export const DEFAULT_BEATSMITH_APP_TITLE = "BeatSmith";

export const PASSWORD_STRENGTH = {
  WEAK: "PASSWORD_STRENGTH_WEAK",
  MEDIUM: "PASSWORD_STRENGTH_MEDIUM",
  STRONG: "PASSWORD_STRENGTH_STRONG",
};

export const STATUSENUM = {
  ready: { color: "#45BB36", text: "ready" },
  pending: { color: "#F2C94C", text: "pending" },
  busy: { color: "#F2C94C", text: "busy" },
  error: { color: "#EB5757", text: "error" },
  offline: { color: "#A9B1BF", text: "offline" },
  success: { color: "#45BB36", text: "success" },
  failed: { color: "#EB5757", text: "failed" },
  cancelled: { color: "#EB5757", text: "cancelled" },
  notInitiated: { color: "#A9B1BF", text: "notInitiated" },
  initiated: { color: "#F2C94C", text: "initiated" },
};

export const VOLUME_LEVELS = {
  low: 0.3,
  medium: 0.6,
  high: 1.0,
};

export const COLORS = {
  WHITE: "#ffffff",
  BLACK: "#000000",
  GREY: "#536886",
  BEATSMITH_RED: "#e94057",
  RED: "#EE3426",
  LIGHT_RED: "#F44336",
  PINK: "#E91E63",
  PURPLE: "#9C27B0",
  DEEP_PURPLE: "#673AB7",
  INDIGO: "#3F51B5",
  LIGHT_BLUE: "#2196F3",
  CYAN: "#00BCD4",
  TEAL: "#009688",
  GREEN: "#37AC28",
  LIGHT_GREEN: "#4CAF50",
  LIME: "#8BC34A",
  AMBER: "#FFC107",
  ORANGE: "#FFAB2E",
  DEEP_ORANGE: "#FF9800",
};

export const SIZES = {
  SMALL: "small",
  MEDIUM: "medium",
  LARGE: "large",
};
