import React from "react";
import { useHistory } from "react-router-dom";
import "./ComicsDetail.scss";

const ComicsDetail = ({ comic, hero, indexKey }) => {
  const history = useHistory();
  let date = comic[indexKey].dates[0].date;
  const year = date.substring(0, 4);

  return (
    <div className="ComicsDetail">
      <div className="comic-image">
        <p onClick={() => history.goBack()} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <img
          src={
            comic[indexKey].thumbnail
              ? `${comic[indexKey].thumbnail.path}/portrait_incredible.${comic[indexKey].thumbnail.extension}`
              : require(`../../Assets/hero_placeholder.jpg`)
          }
          alt=""
        ></img>
      </div>
      <div className="comic-details">
        <p className="label">
          <span>{hero.name}</span>
        </p>
        <h3>{comic[indexKey].title}</h3>
        <h4>
          {comic[indexKey].description !== null
            ? comic[indexKey].description
            : `Sadly this comic has no description.`}
        </h4>
        <div className="comic-dates">
          <p>
            <span className="label-border">
              ORIGINAL PRICE:
              <span className="detail">
                {comic[indexKey].prices[0].price &&
                comic[indexKey].prices[0].price > 0
                  ? `${comic[indexKey].prices[0].price} $`
                  : `⎻⎻`}
              </span>
            </span>
            <span className="label-border">
              DATE:
              <span className="detail">{year}</span>
            </span>
            <span className="label-border">
              PAGES:
              <span className="detail">
                {comic[indexKey].pageCount && comic[indexKey].pageCount > 0
                  ? comic[indexKey].pageCount
                  : `⎻⎻`}
              </span>
            </span>
          </p>
        </div>
        <div className="contributions">
          <p className="list-header">CONTRIBUTORS:</p>
          <div className="contributors-container">
            <div className="names">
              {comic[indexKey].creators.items.map((item, index) => {
                if (index < 6) {
                  return (
                    <p className="contributors-items" key={index}>
                      {item.role}:{` `}
                      {item.name}
                    </p>
                  );
                }
                return null;
              })}
            </div>
            <div className="names">
              {comic[indexKey].creators.items.map((item, index) => {
                if (index > 6 && index < 13) {
                  return (
                    <p className="contributors-items" key={index}>
                      {item.role}:{` `}
                      {item.name}
                    </p>
                  );
                }
                return null;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComicsDetail;
