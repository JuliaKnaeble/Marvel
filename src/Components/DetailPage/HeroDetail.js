import React from "react";
import "./HeroDetail.scss";
import ComicsContainer from "../Comics/index";

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
    <div className="DetailNew">
      <div className="hero-description">
        <p className="label">
          <span className="label-border">Marvel</span>
          <span className="label-border label-creator">
            {comic[0] && comic[0].creators.items[0] ? comic[0].creators.items[0].name : "Unknown"}
          </span>
        </p>
        <h2>{hero.name}</h2>
        <p className="hero-description-title">
          {hero.description
            ? `${hero.description} Find out more`
            : `Sadly this hero has no description. If you are interested in finding out more about ${hero.name}, you can do so`}
          {` `}
          {link}
        </p>
        <ComicsContainer />
      </div>
      <div className="hero-image">
        <img
          src={
            hero.thumbnail
              ? `${hero.thumbnail.path}/portrait_incredible.${hero.thumbnail.extension}`
              : require(`../../Assets/portrait_incredible.jpg`)
          }
          alt=""
        />
        <span className="copy-right">© 2020 MARVEL</span>
      </div>
    </div>
  );
};

export default HeroDetail;