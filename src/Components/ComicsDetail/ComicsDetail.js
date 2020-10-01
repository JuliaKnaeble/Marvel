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
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <img
          src={
            comic[indexKey].thumbnail
              ? `${comic[indexKey].thumbnail.path}/portrait_incredible.${comic[indexKey].thumbnail.extension}`
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
              <span className="detail">{year}</span>
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
          <p className="list-header">CONTRIBUTORS:</p>
          <div className="corntributors-container">
            <div className="names">
              {comic[0].creators.items.map((item, index) => {
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
              {comic[0].creators.items.map((item, index) => {
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

//    if (index > 6 && index < 12) {
//      return (
//        <div className="contributors-items">
//         <span key={index}>
//           {item.role}:{` `}
//          {item.name}
//        </span>
//       </div>
//      );
//    }//
