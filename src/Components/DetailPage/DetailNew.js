import React from "react";
import "./DetailNew.scss";
import ComicsContainer from "../Comics/index";

// props coming from DetailPage

const DetailNew = (props) => {
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
        <p className="lable">
          <span className="lable-border">Marvel</span>
          <span className="lable-border lable-creator">
            {props.comic[0] ? props.comic[0].creators.items[0].name : "Unknown"}
          </span>
        </p>
        <h1>{props.hero.name}</h1>
        <h2>
          {props.hero.description
            ? `${props.hero.description} Find out more`
            : `Sadly this hero has no description. If you are interessted in finding out more about ${props.hero.name}, you can do so`}
          {` `}
          {link}
        </h2>
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

export default DetailNew;
