import axios from "axios";

const FETCH_HERO_SUCCESS = `FETCH_HERO_SUCCESS`;
const FETCH_HERO_FAILURE = `FETCH_HERO_FAILURE`;
const FETCH_COMIC_SUCCESS = `FETCH_COMIC_SUCCESS`;
const FETCH_COMIC_DETAIL_SUCCESS = `FETCH_COMIC_DETAIL_SUCCESS`;
const FETCH_SEARCH = `FETCH_SEARCH`;

// ACTION CREATOR SEARCH

export const requestSearch = (clicked) => {
  return {
    type: FETCH_SEARCH,
    palyload: clicked,
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

// HTTPS REQUESTS

let ts = "blobby";
let privateKey = `9e03dafe762937ad20491330b0bcd5beb486280b`;
let publicKey = "5094ba4401702d0e3ae3bcf66339e50a";
let md = require("md5");
let md5 = md(`${ts}${privateKey}${publicKey}`);
let name = "spider-man";
let characterID = `1009610`;
let marvel = "https://gateway.marvel.com/v1/public/characters";

export const fetchHero = () => {
  const request = axios.get(
    `${marvel}?ts=${ts}&apikey=${publicKey}&hash=${md5}&name=${name}`
  );
  return (dispatch) =>
    request.then((response) =>
      dispatch(fetchHeroSuccess(response.data.data.results[0]))
    );
};

export const fetchComic = () => {
  const request = axios.get(
    `${marvel}/${characterID}/comics?ts=${ts}&apikey=${publicKey}&hash=${md5}`
  );
  return (dispatch) =>
    request.then((response) =>
      dispatch(fetchComicSuccess(response.data.data.results[0]))
    );
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

export const requestRandomHero = (number) => {
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
          return dispatch(fetchHeroFailure(`ERROR_RANDOM_SEARCH`));
        }
        return dispatch(fetchHeroFailure(error.response.data.status));
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
