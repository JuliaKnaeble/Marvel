import React from "react";

import "./Comics.scss";

const Comics = (props) => {
  return (
    <div className="Comics">
      <div className="top"></div>
      <div></div>
      <div></div>
      <div className="bottom"></div>
      <p>+{props.hero.comics ? props.hero.comics.available : `0`} MORE</p>
    </div>
  );
};

export default Comics;
