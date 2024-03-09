import http, { deviceHttp } from "services/api";

const setAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    http.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete auth header
    delete http.defaults.headers.common["Authorization"];
  }
};

export const setDeviceAuthToken = (token) => {
  if (token) {
    // Apply authorization token to every request if logged in
    deviceHttp.defaults.headers.common["Authorization"] = "Bearer " + token;
  } else {
    // Delete auth header
    delete deviceHttp.defaults.headers.common["Authorization"];
  }
};

export default setAuthToken;
