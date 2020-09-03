import React from "react";

import "./Comics.scss";

const Comics = (props) => {
  return (
    <div className="Comics">
      <img
        src={
          props.comic[0]
            ? `${props.comic[0].thumbnail.path}/portrait_medium.${props.comic[0].thumbnail.extension}`
            : ""
        }
        alt=""
      />
      <img
        src={
          props.comic[1]
            ? `${props.comic[1].thumbnail.path}/portrait_medium.${props.comic[1].thumbnail.extension}`
            : ""
        }
        alt=""
      />
      <img
        src={
          props.comic[2]
            ? `${props.comic[2].thumbnail.path}/portrait_medium.${props.comic[2].thumbnail.extension}`
            : ""
        }
        alt=""
      />
      <img
        src={
          props.comic[3]
            ? `${props.comic[3].thumbnail.path}/portrait_medium.${props.comic[3].thumbnail.extension}`
            : ""
        }
        alt=""
      />
      <p>+{props.hero.comics ? props.hero.comics.available : `0`} MORE</p>
    </div>
  );
};

export default Comics;

// <img
//src = {
//  props.comic
//   ? `${props.comic[0].thumbnail.path}.${props.comic[0].thumbnail.extension}`
//   : ""
//}
//alt = ""
// />

// if (props.comic[0] ? console.log(props.comic[0].thumbnail) : "?")
