import http from "./api";

const SSO_BASE_PATH = "/api/v2/sso";
const SSO_OIDC_BASE_PATH = SSO_BASE_PATH + "/oidc";
const SSO_OIDC_ENABLED_ENDPOINT = SSO_OIDC_BASE_PATH + "/enabled";
export const SSO_OIDC_CALLBACK_PATH = "/api/v2/sso/oidc/callback";
export function oidcEnabled() {
  return http.get(SSO_OIDC_ENABLED_ENDPOINT);
}
