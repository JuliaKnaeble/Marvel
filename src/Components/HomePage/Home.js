import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="home-container">
        <div className="info">
          <a
            href="https://developer.marvel.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            API
          </a>
          <a
            href="https://github.com/JuliaKnaeble"
            target="_blank"
            rel="noopener noreferrer"
          >
            ABOUT
          </a>
        </div>
        <div className="header">
          <p className="marvel-lable">MARVEL</p>
          <h1>
            MARVEL COMICS <br />
            CHARACTER ARCHIVE
          </h1>
          <p className="home-description">
            Browse from over 70 years worth of Marvel comic history. Look up
            your favorite hero and check out all their relevant information, or
            use the randomizer if you feel like being surprised with a hero
            you've never even heard of.
          </p>
          <button className="start-search">START YOUR SEARCH</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
