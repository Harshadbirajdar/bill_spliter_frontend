import { combineReducers } from "redux";
import groupReducer from "./group";
import popupReducer from "./popup";
import userReducer from "./user";
export default combineReducers({
  user: userReducer,
  group: groupReducer,
  popup: popupReducer,
});
