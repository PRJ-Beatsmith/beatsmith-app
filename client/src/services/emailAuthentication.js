import http from "./api";

export function sendAuthenticationCode(data) {
  return http.post("/api/v2/smsAuthentication/sendEmail", data);
}

export function verifyAuthenticationCode(data) {
  return http.post("/api/v2/smsAuthentication/codeVerification", data);
}

export function verifyClientAuthenticationCode(data) {
  return http.post("/api/v2/smsAuthentication/client/codeVerification", data);
}
