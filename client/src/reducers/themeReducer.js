import { SET_THEME } from "../actions/types";

const initialState = {
  theme: localStorage.getItem("theme") || "dark",
};

const themeReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      const newTheme = ["dark", "light"].includes(payload) ? payload : "dark";
      return {
        ...state,
        theme: newTheme,
      };
    default:
      return state;
  }
};

export default themeReducer;
