import { combineReducers } from "redux";
import hero from "./fetchHero";

const allReducers = combineReducers({
  hero,
});

export default allReducers;
