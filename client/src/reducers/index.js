import { combineReducers } from "redux";

// v1:
import authReducer from "./authReducer";
// v2:

export default combineReducers({
  auth: authReducer,
});
