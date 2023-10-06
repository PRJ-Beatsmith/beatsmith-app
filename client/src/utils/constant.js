import process from "process";

export const CONTEXT_PATH = process.env.PUBLIC_URL
  ? process.env.PUBLIC_URL
  : "";
export const API_URL = process.env.REACT_APP_API_URL;

export const PENDING = "pending";
export const IN_PROGRESS = "in_progress";
export const COMPLETED = "completed";
export const FAILED = "failed";
