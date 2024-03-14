import i18n from "i18next";
import { store } from "react-notifications-component";
import { notificationOptions } from "components/shared/Config/notificationConfig";
import * as TYPES from "./types";
import * as userAuth from "services/auth";
import { defaultSignUp, defaultSignIn } from "core/firebase/auth";

export const updateSignUpData = (data) => ({
  type: TYPES.UPDATE_SIGNUP_DATA,
  payload: data,
});

export const submitSignUp = (signUpData) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    dispatch({ type: TYPES.SUBMIT_SIGNUP });
    try {
      dispatch({ type: TYPES.SIGNUP_USER_REQUEST });

      const userCredential = await defaultSignUp(
        signUpData.email,
        signUpData.password,
      );
      const token = await userCredential.user.getIdToken();

      const { data } = await userAuth.registerUser({ token, ...signUpData });
      dispatch({ type: TYPES.SIGNUP_SUCCESS, payload: data });
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Success"),
        message: i18n.t("actions.Signup was successful"),
        type: "success",
      });
      resolve(data);
    } catch (error) {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t("actions.Failed to signup"),
        type: "danger",
      });
      dispatch({ type: TYPES.SIGNUP_FAIL, payload: error });
      reject(error);
    }
  });
};

export const submitLogin = (loginData) => async (dispatch) => {
  return new Promise(async (resolve, reject) => {
    try {
      dispatch({ type: TYPES.LOGIN_REQUEST });

      const userCredential = await defaultSignIn(
        loginData.email,
        loginData.password,
      );
      const token = await userCredential.user.getIdToken();

      const { data } = await userAuth.loginUser({ token, ...loginData });
      dispatch({ type: TYPES.LOGIN_SUCCESS, payload: data });
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Success"),
        message: i18n.t("actions.SignIn was successful"),
        type: "success",
      });
      resolve(data);
    } catch (error) {
      store.addNotification({
        ...notificationOptions,
        title: i18n.t("actions.Failure"),
        message: i18n.t("actions.Failed to login"),
        type: "danger",
      });
      dispatch({ type: TYPES.LOGIN_FAIL, payload: error });
      reject(error);
    }
  });
};
