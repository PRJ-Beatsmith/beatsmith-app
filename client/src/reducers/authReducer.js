/* eslint-disable import/no-anonymous-default-export */
import { appSocket } from "utils/socket";
import * as TYPES from "actions/types";

const isEmpty = require("is-empty");

const initialState = {
  socket: null,
  isAuthenticated: false,
  user: {},
  loading: false,
  login_unsuccessful: false,
  login_unsuccessful_reason: null,
  register_unsuccessful: false,
  register_unsuccessful_reason: null,
  setPassword: {
    loading: false,
    requesSent: false,
    error: null,
  },
  changePassword: {
    loading: false,
    requestSent: false,
    error: null,
    success: false,
  },
  updateProfileOnlineStatus: {
    loading: false,
    requestSent: false,
    error: null,
    success: false,
  },
  profileOnlineStatus: {
    data: null,
    loading: false,
    requestSent: false,
    error: null,
    success: false,
  },
  forgotPassword: {
    loading: false,
    requestSent: false,
    error: null,
    success: false,
  },
  resetPassword: {
    loading: false,
    requestSent: false,
    error: null,
    success: false,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
    case TYPES.APP_SOCKET_ESTABLISH_CONNECTION:
      return {
        ...state,
        socket: state.socket || appSocket(action.payload),
      };
    case TYPES.APP_SOCKET_CLOSE_CONNECTION:
      state.socket && state.socket.close();
      return {
        ...state,
        socket: null,
      };
    case TYPES.SET_USER_ROLE:
      return {
        ...state,
        user: {
          ...state.user,
          role: action.payload,
        },
      };
    case TYPES.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
        login_unsuccessful: false,
        login_unsuccessful_reason: null,
      };
    case TYPES.UPDATE_CURRENT_USER:
      return {
        ...state,
        user: { ...state.user, ...action.payload },
      };
    case TYPES.SET_CURRENT_DEVICE:
      return {
        ...state,
        device: action.payload,
      };
    case TYPES.USER_LOADING:
      return {
        ...state,
        loading: true,
      };
    case TYPES.LOGIN_UNSUCCESSFUL:
      return {
        ...state,
        login_unsuccessful: true,
        login_unsuccessful_reason: action.payload.errors.msg,
      };
    case TYPES.REMOVE_LOGIN_ERROR:
      return {
        ...state,
        login_unsuccessful: false,
        login_unsuccessful_reason: null,
      };
    case TYPES.SET_PASSWORD_START:
      return {
        ...state,
        setPassword: {
          ...state.setPassword,
          loading: true,
          requestSent: true,
          error: null,
        },
      };

    case TYPES.SET_PASSWORD_SUCCESS:
      return {
        ...state,
        setPassword: {
          ...state.setPassword,
          loading: false,
          error: null,
        },
      };

    case TYPES.SET_PASSWORD_FAIL:
      return {
        ...state,
        changePassword: {
          ...state.setPassword,
          loading: false,
          error: action.payload,
        },
      };

    case TYPES.CHANGE_PASSWORD_START:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: true,
          requestSent: true,
          error: null,
          success: false,
        },
      };

    case TYPES.CHANGE_PASSWORD_SUCCESS:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: null,
          success: true,
        },
      };

    case TYPES.CHANGE_PASSWORD_FAIL:
      return {
        ...state,
        changePassword: {
          ...state.changePassword,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    case TYPES.CHANGE_PASSWORD_RESET:
      return {
        ...state,
        changePassword: {
          loading: false,
          requestSent: false,
          error: null,
          success: false,
        },
      };

    case TYPES.GET_PROFILE_ONLINE_STATUS_START:
      return {
        ...state,
        profileOnlineStatus: {
          ...state.profileOnlineStatus,
          loading: true,
          requestSent: true,
          error: null,
          success: false,
        },
      };

    case TYPES.GET_PROFILE_ONLINE_STATUS_SUCCESS:
      return {
        ...state,
        profileOnlineStatus: {
          ...state.profileOnlineStatus,
          data: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };

    case TYPES.GET_PROFILE_ONLINE_STATUS_FAIL:
      return {
        ...state,
        profileOnlineStatus: {
          ...state.profileOnlineStatus,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    case TYPES.GET_PROFILE_ONLINE_STATUS_RESET:
      return {
        ...state,
        profileOnlineStatus: {
          data: null,
          loading: false,
          requestSent: false,
          error: null,
          success: false,
        },
      };

    case TYPES.UPDATE_PROFILE_ONLINE_STATUS_START:
      return {
        ...state,
        updateProfileOnlineStatus: {
          ...state.updateProfileOnlineStatus,
          loading: true,
          requestSent: true,
          error: null,
          success: false,
        },
      };

    case TYPES.UPDATE_PROFILE_ONLINE_STATUS_SUCCESS:
      return {
        ...state,
        updateProfileOnlineStatus: {
          ...state.updateProfileOnlineStatus,
          data: action.payload,
          loading: false,
          error: null,
          success: true,
        },
      };

    case TYPES.UPDATE_PROFILE_ONLINE_STATUS_FAIL:
      return {
        ...state,
        updateProfileOnlineStatus: {
          ...state.updateProfileOnlineStatus,
          loading: false,
          error: action.payload,
          success: false,
        },
      };
    case TYPES.UPDATE_PROFILE_ONLINE_STATUS_RESET:
      return {
        ...state,
        updateProfileOnlineStatus: {
          data: null,
          loading: false,
          requestSent: false,
          error: null,
          success: false,
        },
      };

    case TYPES.FORGOT_PASSWORD_START:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: true,
          requestSent: true,
          error: null,
          success: false,
        },
      };

    case TYPES.FORGOT_PASSWORD_SUCCESS:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: null,
          success: true,
        },
      };

    case TYPES.FORGOT_PASSWORD_FAIL:
      return {
        ...state,
        forgotPassword: {
          ...state.forgotPassword,
          loading: false,
          error: action.payload || true,
          success: false,
        },
      };
    case TYPES.FORGOT_PASSWORD_RESET:
      return {
        ...state,
        forgotPassword: {
          loading: false,
          requestSent: false,
          error: null,
          success: false,
        },
      };

    case TYPES.RESET_PASSWORD_START:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: true,
          requestSent: true,
          error: null,
          success: false,
        },
      };

    case TYPES.RESET_PASSWORD_SUCCESS:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: null,
          success: true,
        },
      };

    case TYPES.RESET_PASSWORD_FAIL:
      return {
        ...state,
        resetPassword: {
          ...state.resetPassword,
          loading: false,
          error: action.payload || true,
          success: false,
        },
      };

    case TYPES.RESET_PASSWORD_RESET:
      return {
        ...state,
        resetPassword: {
          loading: false,
          requestSent: false,
          error: null,
          success: false,
        },
      };

    default:
      return state;
  }
}
