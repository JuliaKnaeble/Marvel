import { combineReducers } from "redux";
import hero from "./Hero";
import comic from "./Comic";
import comicDetail from "./ComicDetail";
import search from "./Search";

const allReducers = combineReducers({
  hero,
  comic,
  comicDetail,
  search,
});

export default allReducers;
