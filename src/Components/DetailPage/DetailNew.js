import React from "react";
import "./DetailNew.scss";

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
        <img src={require(`../../Assets/portrait_incredible.jpg`)} alt="" />
      </div>
    </div>
  );
};

export default DetailNew;
