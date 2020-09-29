import React from "react";
import "./ComicsDetail.scss";

const ComicsDetail = ({ comic, hero }) => {
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
      <div className="comic-details">
        <p className="lable">
          <span>{hero.name}</span>
        </p>
        <h3>{comic[0].title}</h3>
        <h4>
          {comic[0].description !== null
            ? comic[0].description
            : `Sadly this comic has no description.`}
        </h4>
        <div className="comic-dates">
          <p>
            <span className="lable-border">
              ORIGINAL PRICE:
              <span className="detail">
                {comic[0].prices[0].price && comic[0].prices[0].price > 0
                  ? comic[0].prices[0].price
                  : `⎻⎻`}
              </span>
            </span>
            <span className="lable-border">
              DATE:
              <span className="detail"></span>
            </span>
            <span className="lable-border">
              PAGES:
              <span className="detail">
                {comic[0].pageCount && comic[0].pageCount > 0
                  ? comic[0].pageCount
                  : `⎻⎻`}
              </span>
            </span>
          </p>
        </div>
        <div className="contributions">
          <p>CONTRIBUTORS:</p>
        </div>
      </div>
    </div>
  );
};

export default ComicsDetail;
