import * as TYPES from "actions/types";

const initialState = {
  enabled: false,
  error: null,
};

const ssoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.GET_SSO_OIDC_ENABLED_SUCCESS:
      return {
        ...state,
        enabled: action.payload.enabled,
        error: null,
      };
    case TYPES.GET_SSO_OIDC_ENABLED_ERROR:
      return {
        ...state,
        enabled: false,
        error: null,
      };
    default:
      return state;
  }
};

export default ssoReducer;
