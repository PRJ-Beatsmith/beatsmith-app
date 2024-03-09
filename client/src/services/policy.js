import http from "./api";

export function getAllPolicyByAPI() {
  return http.get("/api/v2/policy/getAllPolicies");
}
