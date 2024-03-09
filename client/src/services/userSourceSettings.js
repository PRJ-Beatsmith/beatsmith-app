import http from "./api";

const USER_SOURCES_BASE = "/api/v2/user-sources";

// The LDAP endpoints.
const LDAP_BASE = USER_SOURCES_BASE + "/ldap";
// Settings is not the ldap endpoint directly, as you might want
// to add different functionality (e.g. directly importing, or test logins)
// at a later point.
const LDAP_SETTINGS_ENDPOINT = LDAP_BASE + "/settings";

const OIDC_BASE = USER_SOURCES_BASE + "/oidc";
const OIDC_SETTINGS_ENDPOINT = OIDC_BASE + "/settings";
const OIDC_DISCOVER_ENDPOINT = OIDC_BASE + "/discover";
const OIDC_ENABLED_ENDPOINT = "/api/v2/sso/oidc/available";

// Send the LDAP Settings to the server and save them. They will take effect immediately and subsequent logins will use the new settings, if any (and enabled is true).
export function saveLdapSettings(settings) {
  // Technically, this would be a "POST" on the first time call, but we'll just
  // say that the default settings ("none") are being updated. So patch is fine.
  return http.patch(LDAP_SETTINGS_ENDPOINT, settings);
}

// Retrieve the LDAP Settings from the server.
export function getLdapSettings() {
  return http.get(LDAP_SETTINGS_ENDPOINT);
}

export function saveOidcSettings(settings) {
  return http.patch(OIDC_SETTINGS_ENDPOINT, settings);
}

export function getOidcSettings() {
  return http.get(OIDC_SETTINGS_ENDPOINT);
}

export function discoverOidcSettings(issuer) {
  return http.post(OIDC_DISCOVER_ENDPOINT, issuer);
}

export function oidcAvailable() {
  return http.get(OIDC_ENABLED_ENDPOINT);
}
