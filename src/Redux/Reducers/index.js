import { combineReducers } from "redux";
import hero from "./Hero";
import comic from "./Comic";
import comicDetail from "./ComicDetail";
import search from "./Search";
import totalComicsToShow from "./TotalComics";

export const FETCH_HERO_SUCCESS = `FETCH_HERO_SUCCESS`;
export const FETCH_HERO_FAILURE = `FETCH_HERO_FAILURE`;
export const FETCH_COMIC_SUCCESS = `FETCH_COMIC_SUCCESS`;
export const FETCH_COMIC_DETAIL_SUCCESS = `FETCH_COMIC_DETAIL_SUCCESS`;
export const FETCH_SEARCH = `FETCH_SEARCH`;
export const FETCH_TOTAL_NUMBER = `FETCH_TOTAL_NUMBER`;
export const RESET_TOTAL_NUMBER = `RESET_TOTAL_NUMBER`;

const allReducers = combineReducers({
  hero,
  comic,
  comicDetail,
  search,
  totalComicsToShow,
});

export default allReducers;
