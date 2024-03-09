import { combineReducers } from "redux";

import testReducer from "./testReducer";
// v1:
import authReducer from "./authReducer";
// v2:

export default combineReducers({
  auth: authReducer,
  test: testReducer,
});
