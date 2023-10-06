/* eslint-disable no-unused-vars */
import { SET_THEME } from "../actions/types";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
};

const themeReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  const newTheme = payload || "dark";

  switch (type) {
    case SET_THEME:
      return {
        ...state,
        theme: payload,
      };
    default:
      return state;
  }
};

export default themeReducer;
