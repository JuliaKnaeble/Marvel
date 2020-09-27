import React from "react";
import "./ComicsDetail.scss";

const ComicsDetail = ({ comic }) => {
  console.log(comic);
  return (
    <div className="ComicsDetail">
      <div className="comic-image">
        <p> ◁ BACK TO PROFILE</p>
        <img
          src={
            comic[0].thumbnail
              ? `${comic[0].thumbnail.path}/portrait_incredible.${comic[0].thumbnail.extension}`
              : require(`../../Assets/portrait_incredible.jpg`)
          }
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default ComicsDetail;
