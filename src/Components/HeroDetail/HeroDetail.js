import React from "react";
import "./HeroDetail.scss";
import ComicsContainer from "../HeroDetail/Comics/index";

// props coming from DetailPage

const HeroDetail = ({hero, comic}) => {
  let link = (
    <a
      href={hero.urls ? `${hero.urls[0].url}` : ``}
      target="_blank"
      rel="noopener noreferrer"
      className="hero-reference-link"
    >
      here.
    </a>
  );

  return (
    <div className="HeroDetail">   
      <div className="hero-detail-container">
        <div className="hero-image-mobile">
        <img
          src={
            hero.thumbnail
              ? `${hero.thumbnail.path}/landscape_incredible.${hero.thumbnail.extension}`
              : require(`../../Assets/default_mobile_hero.jpg`)
          }
          alt=""
        />
        <div className="overlay">
        </div>
      </div>
        <p className="label">
          <span className="label-border">Marvel</span>
          <span className="label-border label-creator">
            {comic[0] && comic[0].creators.items[0] ? comic[0].creators.items[0].name : "Unknown"}
          </span>
        </p>
        <h2 className="hero-name">{hero.name ? hero.name : "CAPTAIN AMERICA"}</h2>
        <p className="hero-detail-description">
          {hero.description
            ? `${hero.description} Find out more`
            : `Sadly this hero has no description. If you are interested in finding out more about ${hero.name}, you can do so`}
          {` `}
          {link}
        </p>
        <ComicsContainer />
      </div>
      <div className="hero-image-desktop">
        <img
          src={
            hero.thumbnail
              ? `${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`
              : require(`../../Assets/default_hero.jpg`)
          }
          alt=""
        />
      </div>
    </div>
  );
};

export default HeroDetail;
