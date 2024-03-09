import { ocrHttp } from "./api";

// set the timeout to 5 minutes
export function getBeatsmithOCR(data) {
  return ocrHttp.post("/api/ocr", data, {
    timeout: 300000,
    responseType: "arraybuffer",
  });
}
