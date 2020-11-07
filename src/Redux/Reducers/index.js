import { combineReducers } from "redux";
import hero from "./Hero";
import comic from "./Comic";
import comicDetail from "./ComicDetail";
import search from "./Search";
import totalComicsToShow from "./TotalComics";

const allReducers = combineReducers({
  hero,
  comic,
  comicDetail,
  search,
  totalComicsToShow,
});

export default allReducers;
