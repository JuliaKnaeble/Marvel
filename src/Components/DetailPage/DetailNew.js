import React from "react";
import "./DetailNew.scss";

// props coming from DetailPage

const DetailNew = (props) => {
  return (
    <div className="DetailNew">
      <div className="hero-description">
        <p className="lable">
          Marvel <span>Justice League</span>
        </p>
        <h1>{props.hero.name}</h1>
        <h2>{props.hero.description}</h2>
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
      </div>
    </div>
  );
};

export default DetailNew;
