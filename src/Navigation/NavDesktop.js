import React from "react";
import "./NavDesktop.scss";

import axios from "axios";

const NavDesktop = () => {
  let ts = "blobby";
  let privateKey = `9e03dafe762937ad20491330b0bcd5beb486280b`;
  let publicKey = "5094ba4401702d0e3ae3bcf66339e50a";
  let md = require("md5");
  let md5 = md(`${ts}${privateKey}${publicKey}`);
  let name = "hulk";
  let marvelCharacter = "http://gateway.marvel.com/v1/public/characters";
  axios
    .get(
      `${marvelCharacter}?ts=${ts}&apikey=${publicKey}&hash=${md5}&name=${name}`
    )
    .then((response) => {
      console.log(response.data.data.results[0].thumbnail.path);
    });

  return (
    <div className="nav-bg">
      <div className="NavDesktop">
        <div>HeroSearch</div>
        <div className="nav-times">
          <span>Home</span>
          <span>Heroes</span>
          <form>
            <input
              type="text"
              placeholder="Search your Hero"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;

// Character name: (response.data.data.results[0].name)
// Character description: (response.data.data.results[0].description)
// Character image: (response.data.data.results[0].thumbnail.path)
