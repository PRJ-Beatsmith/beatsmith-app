import * as TYPES from "./types";
import * as ssoService from "services/sso";

export const oidcEnabled = () => (dispatch) => {
  ssoService
    .oidcEnabled()
    .then((res) => {
      dispatch({
        type: TYPES.GET_SSO_OIDC_ENABLED_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: TYPES.GET_SSO_OIDC_ENABLED_ERROR,
        payload: err.response.data,
      });
    });

  return {
    type: TYPES.GET_SSO_OIDC_ENABLED_REQUEST,
    payload: null,
  };
};
