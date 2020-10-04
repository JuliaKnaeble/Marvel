import React from "react";
import "./Home.scss";

const Home = () => {
  return (
    <div className="Home">
      <div className="info">
        <a
          href="https://developer.marvel.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          API
        </a>
      </div>
      <div>
        <h1>
          WELCOME TO THE <br />
          MARVEL COMIC ARCHIVE
        </h1>
        <p className="home-description">
          Browse from over 70 years worth of Marvel comic history. Look up your
          favorite hero and check out all their relevant information, or use the
          randomizer if you feel like being surprised with a hero you've never
          even heard of.
        </p>
      </div>
    </div>
  );
};

export default Home;
