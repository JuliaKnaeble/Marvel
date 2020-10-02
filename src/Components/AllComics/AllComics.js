import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

const AllComics = ({ hero, comic, requestComicDetail }) => {
  const history = useHistory();

  const showComicDetail = (indexKey) => {
    requestComicDetail(indexKey);
    history.push("/comics");
  };

  return (
    <div className="AllComics">
      <div className="all-comics-container">
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <p className="all-comics-available">
          All comics: {hero.name} [{hero.comics.available}]
        </p>
        <div className="all-comics-img-container">
          {comic.map((item, index) => {
            if (index < 8) {
              return (
                <div key={index} className="all-comics-img">
                  <p className="more">READ MORE</p>
                  <img
                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                    alt={item.title}
                    onClick={() => showComicDetail(index)}
                  />
                  <p>{item.title}</p>
                </div>
              );
            }
            return null;
          })}
        </div>
        <p className="load-more">LOAD MORE</p>
      </div>
    </div>
  );
};

export default AllComics;
