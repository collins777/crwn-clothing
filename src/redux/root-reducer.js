import { combineReducers } from "redux";
import userReducer from "./user/user.reducer";
import cartReducer from "./cart/cart.reducer";

// Represets the state of our entire application.

export default combineReducers({
  user: userReducer,
  cart: cartReducer
});
