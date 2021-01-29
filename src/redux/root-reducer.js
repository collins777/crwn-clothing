import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";

// Represets the state of our entire application.

export default combineReducers({
  user: userReducer
});
