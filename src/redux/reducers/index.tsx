import { combineReducers } from "redux";
import users from "./users";
import searchInput from "./searchInput";

export default combineReducers({ users, searchInput });
