import { combineReducers } from "redux";
import { bankReducer } from "./Bank";
import { LoginReducer } from "./LoginReducer";
const rootReducer = combineReducers({
  bank: bankReducer,
  login: LoginReducer
});
export default rootReducer;
