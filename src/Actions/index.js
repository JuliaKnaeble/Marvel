import axios from "axios";

const FETCH_HERO_REQUEST = `FETCH_HERO_REQUEST`;
const FETCH_HERO_SUCCESS = `FETCH_HERO_SUCCESS`;
const FETCH_USERS_FAILURE = `FETCH_USERS_FAILURE`;

//ACTION CREATORES

const fetchHeroRequest = () => {
  return {
    type: FETCH_HERO_REQUEST,
  };
};

const fetchHeroSuccess = (heroName) => {
  return {
    type: FETCH_HERO_SUCCESS,
    payload: heroName,
  };
};

const fetchHeroFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  };
};

let ts = "blobby";
let privateKey = `9e03dafe762937ad20491330b0bcd5beb486280b`;
let publicKey = "5094ba4401702d0e3ae3bcf66339e50a";
let md = require("md5");
let md5 = md(`${ts}${privateKey}${publicKey}`);
let name = "spider-man";
let marvelCharacter = "http://gateway.marvel.com/v1/public/characters";

export const fetchHero = () => {
  const request = axios.get(
    `${marvelCharacter}?ts=${ts}&apikey=${publicKey}&hash=${md5}&name=${name}`
  );
  return (dispatch) =>
    request.then((response) =>
      dispatch(fetchHeroSuccess(response.data.data.results[0]))
    );
};
