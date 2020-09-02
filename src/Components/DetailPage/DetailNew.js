import React from "react";
import "./DetailNew.scss";

// props coming from DetailPage

const DetailNew = (props) => {
  let link = (
    <div>
      <a
        href={
          props.hero.urls
            ? `${props.hero.urls[0].url}`
            : `We do not have a link for this hero`
        }
        target="_blank"
        rel="noopener noreferrer"
        className="hero-reference-link"
      >
        MARVEL
      </a>
      <br></br>
    </div>
  );

  return (
    <div className="DetailNew">
      <div className="hero-description">
        <p className="lable">
          Marvel <span>Justice League</span>
        </p>
        <h1>{props.hero.name}</h1>
        <h2>
          {props.hero.description
            ? `${props.hero.description} Find out more under:`
            : `Sadly this hero has no description. If you are interessted in finding out more about ${props.hero.name}, you can do so here:`}
          {link}
        </h2>
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
