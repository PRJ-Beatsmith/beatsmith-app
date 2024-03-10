import Axios from "axios";
import { CONTEXT_PATH } from "utils/constant";

// Create a request cancel token
const CancelToken = Axios.CancelToken;

// Creates an instance of axios that always uses the eatup api base route
const http = Axios.create({
  baseURL: CONTEXT_PATH,
  withCredentials: true,
  cancelToken: CancelToken.source().token,
});

const deviceHttp = Axios.create({
  baseURL: CONTEXT_PATH,
  withCredentials: true,
  cancelToken: CancelToken.source().token,
});

const ocrHttp = Axios.create({
  baseURL: "https://beatsmith.de/beatsmith-ocr",
  withCredentials: false,
  cancelToken: CancelToken.source().token,
});

export { CancelToken, deviceHttp, ocrHttp };
export default http;
