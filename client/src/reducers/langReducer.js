import { SET_LANGUAGE } from "../actions/types";
import i18n from "../core/i18n";

const initialState = {
  language: localStorage.getItem("language") || "en",
};

const langReducer = (state = initialState, action = {}) => {
  const { type, payload } = action;
  const newLanguage = payload || "en";

  switch (type) {
    case SET_LANGUAGE:
      i18n.changeLanguage(newLanguage);
      return {
        ...state,
        language: payload,
      };
    default:
      return state;
  }
};

export default langReducer;
