import { combineReducers } from "redux";
import hero from "./Hero";
import comic from "./Comic";

const allReducers = combineReducers({
  hero,
  comic,
});

export default allReducers;
