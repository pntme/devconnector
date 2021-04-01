import { combineReducers } from "redux";
import auth from "./auth";
import alert from "./alert";

export default combineReducers({
  // the list of reducers .
  auth,
  alert,
});
