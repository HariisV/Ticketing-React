import { combineReducers } from "redux";
import counter from "./counter";
import auth from "./auth";
import movie from "./movie";
import registerPage from "./register";
import dashboard from "./dashboard";
import profile from "./profile";
export default combineReducers({
  counter,
  auth,
  movie,
  registerPage,
  dashboard,
  profile
});
