import http from "./api";

export function registerUser(userData) {
  return http.post("/api/users/register", userData);
}

export function loginUser(userData) {
  return http.post("/api/login", userData);
}

export function changePassword(userData) {
  return http.post(`/api/profile/changePassword`, userData);
}

export function updateProfileOnlineStatus(userData) {
  return http.patch(`/api/profile/online-status`, userData);
}

export function getProfileOnlineStatus() {
  return http.get(`/api/profile/online-status`);
}

export function forgotPassword(userData) {
  return http.post(`/api/forgot-password`, userData);
}

export function resetPassword(userData, token) {
  return http.post(`/api/reset/${token}`, userData);
}
