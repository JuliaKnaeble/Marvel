import axios from "axios";

import {
  FETCH_HERO_SUCCESS,
  FETCH_HERO_FAILURE,
  FETCH_COMIC_SUCCESS,
  FETCH_COMIC_DETAIL_SUCCESS,
  FETCH_SEARCH,
  FETCH_TOTAL_NUMBER,
  RESET_TOTAL_NUMBER,
} from "../Reducers";

// ACTION CREATOR TOTAL COMICS

export const requestTotalComics = (totalNumber) => {
  return {
    type: FETCH_TOTAL_NUMBER,
    payload: totalNumber,
  };
};

export const resetTotalComics = () => {
  return {
    type: RESET_TOTAL_NUMBER,
  };
};

// ACTION CREATOR SEARCH

export const requestSearch = (clicked) => {
  return {
    type: FETCH_SEARCH,
    payload: clicked,
  };
};

//ACTION CREATORS HERO

const fetchHeroSuccess = (hero) => {
  return {
    type: FETCH_HERO_SUCCESS,
    payload: hero,
  };
};

const fetchHeroFailure = (error) => {
  return {
    type: FETCH_HERO_FAILURE,
    payload: error,
  };
};

// ACTION CREATORS COMICS

const fetchComicSuccess = (comic) => {
  return {
    type: FETCH_COMIC_SUCCESS,
    payload: comic,
  };
};

// ACTION CREATORS COMIC DETAIL

export const requestComicDetail = (indexKey) => {
  return {
    type: FETCH_COMIC_DETAIL_SUCCESS,
    payload: indexKey,
  };
};

// HTTPS REQUEST

const ts = "blobby";
const privateKey = `9e03dafe762937ad20491330b0bcd5beb486280b`;
const publicKey = "5094ba4401702d0e3ae3bcf66339e50a";
const md = require("md5");
const md5 = md(`${ts}${privateKey}${publicKey}`);
const marvel = "https://gateway.marvel.com/v1/public/characters";

export const requestRandomHero = () => {
  const min = Math.ceil(9150);
  const max = Math.floor(9799);
  const number = Math.floor(Math.random() * (max - min) + min);
  const request = axios.get(
    `${marvel}/100${number}?ts=${ts}&apikey=${publicKey}&hash=${md5}`
  );
  return (dispatch) =>
    request
      .then((response) => {
        return dispatch(fetchHeroSuccess(response.data.data.results[0]));
      })
      .catch((error) => {
        if (error.response.data.code === 404) {
          return dispatch(requestRandomHero());
        }
        return dispatch(fetchHeroFailure(error.response.data.status));
      });
};

// action that receives parameter (hero(name), comic(characterID))

export const requestHero = (hero) => {
  const request = axios.get(
    `${marvel}?ts=${ts}&apikey=${publicKey}&hash=${md5}&name=${hero}`
  );

  return (dispatch) =>
    request
      .then((response) => {
        if (response.data.data.count === 0) {
          return dispatch(fetchHeroFailure(`ERROR_HERO_SEARCH`));
        }
        return dispatch(fetchHeroSuccess(response.data.data.results[0]));
      })
      .catch((error) => {
        dispatch(fetchHeroFailure(error.message));
      });
};

export const requestComic = (characterID) => {
  const request = axios.get(
    `${marvel}/${characterID}/comics?ts=${ts}&apikey=${publicKey}&hash=${md5}`
  );
  return (dispatch) =>
    request
      .then((response) => {
        return dispatch(fetchComicSuccess(response.data.data.results));
      })
      .catch((error) => {
        dispatch(fetchHeroFailure(error.message));
      });
};
