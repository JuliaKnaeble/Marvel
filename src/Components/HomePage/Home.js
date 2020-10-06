import React from "react";
import Heroes from "./Heroes.json";
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
          <img
            className="marvel-lable"
            src={require(`../../Assets/marvel_logo.png`)}
            alt="MARVEL"
          />
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
        <div className="vertical-line">
          <span></span>
        </div>
        <p className="browse-characters">BROWSE OVER 7,000 CHARACTERS</p>
        <div className="vertical-line">
          <span></span>
        </div>
        <div className="home-heroes">
          <div className="learn-more">
            <p className="header-learn">
              LEARN MORE ABOUT MARVEL'S MOST POPULAR CHARACTERS
            </p>
            <p className="paragraph-learn">
              Think you know everything about your favorite character? Check out
              more information about Marvel's most popular characters and browse
              their comic history. Watch out, you might learn something new.
            </p>
          </div>
          <div className="hero-suggestions">
            {Heroes.map((item, index) => {
              return (
                <div className="circle-hero-container" key={index}>
                  <img
                    className="circle-hero-images"
                    src={require(`../../Assets/HeroesHome/${item.image}`)}
                    alt={item.name}
                  />
                  <p className="circle-hero-name">{item.name}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
