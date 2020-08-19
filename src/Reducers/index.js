import { combineReducers } from "redux";
import reducer from "./fetchHero";

const allReducers = combineReducers({
  reducer,
});

export default allReducers;
