import http from "./api";

export function getUserSettings() {
  return http.get("/api/v2/users/viewMySettings");
}

export function updateUserSettings(data) {
  return http.post("/api/users/updateMyAccount", data);
}

export function updateMyAccount(data) {
  return http.post("/api/updateMyAccount", data);
}

export function updateMyProfile(data) {
  return http.post("/api/user-profile/updateMyProfile", data);
}

export function updateUserCallSetting(data) {
  return http.post("/api/v2/callSetting", data);
}

export function getUserCallSettings(userId) {
  return http.get(`/api/v2/callSetting/${userId}`);
}
