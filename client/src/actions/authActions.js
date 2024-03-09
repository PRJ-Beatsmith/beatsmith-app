import jwt_decode from "jwt-decode";
import { store } from "react-notifications-component";
import i18n from "i18next";
import * as authSerivce from "services/auth";
import { notificationOptions } from "components/shared/Config/notificationConfig";
import setAuthToken from "utils/setAuthToken";
import * as TYPES from "./types";
// import { onAppSocketConnected } from "actions/appSocketActions";
import Cookies from "js-cookie";
import { Logger } from "core/Logger";

// Connect to App socket
export const connectAppSocket = (payload) => (dispatch) => {
  dispatch(disconnectAppSocket());
  dispatch({ type: TYPES.APP_SOCKET_ESTABLISH_CONNECTION, payload });
  // dispatch(onAppSocketConnected());
};

// close connection of App socket
export const disconnectAppSocket = () => (dispatch) => {
  dispatch({ type: TYPES.APP_SOCKET_CLOSE_CONNECTION });
};

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  authSerivce
    .registerUser(userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      }),
    );
};

// Login - get user token
export const loginUser = (userData) => (dispatch) => {
  authSerivce
    .loginUser(userData)
    .then((res) => {
      // Save to localStorage
      Logger.log(res);
      // Set token to localStorage
      const { token } = res.data;
      localStorage.setItem(`${process.env.PUBLIC_URL}jwtToken`, token);
      // Set token to Auth header
      setAuthToken(token);
      // Decode token to get user data
      const decoded = jwt_decode(token);
      // Set current user
      dispatch(setCurrentUser(decoded));
      dispatch(connectAppSocket({ token, userId: decoded }));
    })
    .catch((err) => {
      dispatch({
        type: TYPES.LOGIN_UNSUCCESSFUL,
        payload: err.response.data,
      });
      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const loginUserWithOidcToken = (token) => (dispatch) => {
  localStorage.setItem(`${process.env.PUBLIC_URL}jwtToken`, token);

  setAuthToken(token);

  const decoded = jwt_decode(token);

  dispatch(setCurrentUser(decoded));
  dispatch(connectAppSocket({ token, userId: decoded }));
};

// Set logged in user
export const setCurrentUser = (decoded) => {
  return {
    type: TYPES.SET_CURRENT_USER,
    payload: decoded,
  };
};

// User loading
export const setUserLoading = () => {
  return {
    type: TYPES.USER_LOADING,
  };
};

// Log user out
export const logoutUser = () => (dispatch) => {
  // Remove token from local storage
  localStorage.removeItem(`${process.env.PUBLIC_URL}jwtToken`);
  // Remove token cookie, if present
  Cookies.remove("token");
  // Remove auth header for future requests
  setAuthToken(false);
  // Set current user to empty object {} which will set isAuthenticated to false
  dispatch(setCurrentUser({}));
  // close the connection of app socket
  dispatch(disconnectAppSocket());
};

export const logoutDevice = () => (dispatch) => {
  // Remove device token from local storage
  localStorage.removeItem(`${process.env.PUBLIC_URL}-deviceToken`);
};

export const setPasswordStart = () => {
  return {
    type: TYPES.SET_PASSWORD_START,
    payload: null,
  };
};

export const setPasswordSuccess = () => {
  return {
    type: TYPES.SET_PASSWORD_SUCCESS,
    payload: null,
  };
};

export const setPasswordFail = (error) => {
  return {
    type: TYPES.SET_PASSWORD_FAIL,
    payload: error,
  };
};
// Set Password with JWT Token
export const setPassword = (userData, jwtToken) => (dispatch) => {
  dispatch(setPasswordStart());

  authSerivce
    .setPassword(userData, jwtToken)
    .then((res) => {
      dispatch(setPasswordSuccess());
    })
    .catch((err) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t(
          "actions.Failed to set password Check with your admin if the invitation has expired",
        ),
        type: "danger",
      });
      dispatch(setPasswordFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const changePasswordReset = () => {
  return {
    type: TYPES.CHANGE_PASSWORD_RESET,
    payload: null,
  };
};

export const changePasswordStart = () => {
  return {
    type: TYPES.CHANGE_PASSWORD_START,
    payload: null,
  };
};

export const changePasswordSuccess = () => {
  return {
    type: TYPES.CHANGE_PASSWORD_SUCCESS,
    payload: null,
  };
};

export const changePasswordFail = (error) => {
  return {
    type: TYPES.CHANGE_PASSWORD_FAIL,
    payload: error,
  };
};
// Set Password with JWT Token
export const changePassword = (userData) => (dispatch) => {
  dispatch(changePasswordStart());

  authSerivce
    .changePassword(userData)
    .then((res) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Success"),
        message: i18n.t("actions.Password changed successfully"),
        type: "success",
      });
      dispatch(changePasswordSuccess());
    })
    .catch((err) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t(
          "actions.Could not change your password Make sure you entered old password correctly",
        ),
        type: "danger",
      });
      dispatch(changePasswordFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const removeLoginError = () => (dispatch) => {
  dispatch({
    type: TYPES.REMOVE_LOGIN_ERROR,
    payload: null,
  });
};

export const updateProfileOnlineStatusReset = () => {
  return {
    type: TYPES.UPDATE_PROFILE_ONLINE_STATUS_RESET,
    payload: null,
  };
};

export const updateProfileOnlineStatusStart = () => {
  return {
    type: TYPES.UPDATE_PROFILE_ONLINE_STATUS_START,
    payload: null,
  };
};

export const updateProfileOnlineStatusSuccess = (data) => {
  return {
    type: TYPES.UPDATE_PROFILE_ONLINE_STATUS_SUCCESS,
    payload: data,
  };
};

export const updateProfileOnlineStatusFail = (error) => {
  return {
    type: TYPES.UPDATE_PROFILE_ONLINE_STATUS_FAIL,
    payload: error,
  };
};
// Set Password with JWT Token
export const updateProfileOnlineStatus = (userData) => (dispatch) => {
  dispatch(updateProfileOnlineStatusStart());
  authSerivce
    .updateProfileOnlineStatus(userData)
    .then((res) => {
      dispatch(getProfileOnlineStatusSuccess(res.data));
      dispatch(updateProfileOnlineStatusSuccess(res.data));
    })
    .catch((err) => {
      dispatch(updateProfileOnlineStatusFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const getProfileOnlineStatusReset = () => {
  return {
    type: TYPES.GET_PROFILE_ONLINE_STATUS_RESET,
    payload: null,
  };
};

export const getProfileOnlineStatusStart = () => {
  return {
    type: TYPES.GET_PROFILE_ONLINE_STATUS_START,
    payload: null,
  };
};

export const getProfileOnlineStatusSuccess = (data) => {
  return {
    type: TYPES.GET_PROFILE_ONLINE_STATUS_SUCCESS,
    payload: data,
  };
};

export const getProfileOnlineStatusFail = (error) => {
  return {
    type: TYPES.GET_PROFILE_ONLINE_STATUS_FAIL,
    payload: error,
  };
};
// Set Password with JWT Token

// Old not used method - v1.
export const getProfileOnlineStatus = () => (dispatch) => {
  dispatch(getProfileOnlineStatusStart());

  authSerivce
    .getProfileOnlineStatus()
    .then((res) => {
      dispatch(getProfileOnlineStatusSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProfileOnlineStatusFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Forgot password
export const forgotPasswordReset = () => {
  return {
    type: TYPES.FORGOT_PASSWORD_RESET,
    payload: null,
  };
};

export const forgotPasswordStart = () => {
  return {
    type: TYPES.FORGOT_PASSWORD_START,
    payload: null,
  };
};

export const forgotPasswordSuccess = () => {
  return {
    type: TYPES.FORGOT_PASSWORD_SUCCESS,
    payload: null,
  };
};

export const forgotPasswordFail = (error) => {
  return {
    type: TYPES.FORGOT_PASSWORD_FAIL,
    payload: error,
  };
};
// Forgot Password
export const forgotPassword = (userData) => (dispatch) => {
  dispatch(forgotPasswordStart());

  authSerivce
    .forgotPassword(userData)
    .then((res) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Success"),
        message: i18n.t("actions.Forgot password requested successfully"),
        type: "success",
      });
      dispatch(forgotPasswordSuccess());
    })
    .catch((err) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t(
          "actions.Could not request your password change Make sure you entered username email correctly",
        ),
        type: "danger",
      });
      dispatch(forgotPasswordFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};

// Reset password
export const resetPasswordReset = () => {
  return {
    type: TYPES.RESET_PASSWORD_RESET,
    payload: null,
  };
};

export const resetPasswordStart = () => {
  return {
    type: TYPES.RESET_PASSWORD_START,
    payload: null,
  };
};

export const resetPasswordSuccess = () => {
  return {
    type: TYPES.RESET_PASSWORD_SUCCESS,
    payload: null,
  };
};

export const resetPasswordFail = (error) => {
  return {
    type: TYPES.RESET_PASSWORD_FAIL,
    payload: error,
  };
};
// Reset Password
export const resetPassword = (userData, token) => (dispatch) => {
  dispatch(resetPasswordStart());

  authSerivce
    .resetPassword(userData, token)
    .then((res) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Success"),
        message: `Reset password requested successfully.`,
        type: "success",
      });
      dispatch(resetPasswordSuccess());
    })
    .catch((err) => {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t("actions.Could not request your password reset"),
        type: "danger",
      });
      dispatch(resetPasswordFail(err.response.data.errors));

      dispatch({
        type: TYPES.GET_ERRORS,
        payload: err.response.data,
      });
    });
};
