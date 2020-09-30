import { combineReducers } from "redux";
import hero from "./Hero";
import comic from "./Comic";
import comicDetail from "./ComicDetail";

const allReducers = combineReducers({
  hero,
  comic,
  comicDetail,
});

export default allReducers;
