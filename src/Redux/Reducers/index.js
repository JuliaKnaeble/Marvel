import { combineReducers } from "redux";
import hero from "./Hero";

const allReducers = combineReducers({
  hero,
});

export default allReducers;
