import React from "react";
import "./HeroDetail.scss";
import ComicsContainer from "../Comics/index";

// props coming from DetailPage

const HeroDetail = (props) => {
  let link = (
    <a
      href={props.hero.urls ? `${props.hero.urls[0].url}` : ``}
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
            {props.comic[0] ? props.comic[0].creators.items[0].name : "Unknown"}
          </span>
        </p>
        <h2>{props.hero.name}</h2>
        <p className="hero-description-title">
          {props.hero.description
            ? `${props.hero.description} Find out more`
            : `Sadly this hero has no description. If you are interested in finding out more about ${props.hero.name}, you can do so`}
          {` `}
          {link}
        </p>
        <ComicsContainer />
      </div>
      <div className="hero-image">
        <img
          src={
            props.hero.thumbnail
              ? `${props.hero.thumbnail.path}/portrait_incredible.${props.hero.thumbnail.extension}`
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
