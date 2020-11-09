import React from "react";
import Heroes from "./Heroes.json";
import { useHistory } from "react-router-dom";
import "./Home.scss";

const Home = ({ requestHero, requestRandomHero, requestSearch }) => {
  const history = useHistory();

  const showHero = (newHero) => {
    requestHero(newHero);
    history.push("/hero");
  };

  const showRandomHero = () => {
    requestRandomHero();
    history.push("/hero");
  };

  return (
    <div>
      <div className="Home">
        <div className="home-container">
          <div className="info">
            <a
              className="api"
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
              GitHub
            </a>
          </div>
          <div className="header">
            <img
              className="marvel-label"
              src={require(`../../Assets/marvel_logo.png`)}
              alt="MARVEL"
            />
            <h1>
              MARVEL COMICS <br />
              CHARACTER ARCHIVE
            </h1>
            <p className="home-description">
              Browse from over 70 years worth of Marvel comic history. Look up
              your favorite hero and check out all their relevant information,
              or use the randomizer if you feel like being surprised with a hero
              you've never even heard of.
            </p>
            <button
              className="start-search"
              onClick={() => requestSearch(true)}
            >
              START YOUR SEARCH
            </button>
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
                Think you know everything about your favorite character? Check
                out more information about Marvel's most popular characters and
                browse their comic history. Watch out, you might learn something
                new.
              </p>
              <button
                className="someone-random"
                onClick={() => showRandomHero()}
              >
                SHOW ME SOMEONE RANDOM
              </button>
            </div>
            <div className="hero-suggestions">
              {Heroes.map((item, index) => {
                return (
                  <div className="circle-hero-container" key={index}>
                    <div
                      className="hero-on-hover-container"
                      onClick={() => showHero(item.search)}
                    >
                      <div className="more-info-container">
                        <span className="more">MORE INFO</span>
                      </div>
                      <div className="circle-hero-border">
                        <img
                          className="circle-hero-images"
                          src={require(`../../Assets/HeroesHome/${item.image}`)}
                          alt={item.name}
                        />
                      </div>
                    </div>
                    <p className="circle-hero-name">{item.name}</p>
                  </div>
                );
              })}
            </div>
          </div>
          <footer>© All images belong to their respective owners</footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
