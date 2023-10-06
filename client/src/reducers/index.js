import { combineReducers } from "redux";
import themeReducer from "./themeReducer";
import langReducer from "./langReducer";

export default combineReducers({
  theme: themeReducer,
  lang: langReducer,
});
