import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

const AllComics = ({ hero, comic, requestComicDetail }) => {
  const history = useHistory();
  const [loadMore, setLoadMore] = useState(false);

  const showComicDetail = (indexKey) => {
    requestComicDetail(indexKey);
    history.push("/comics");
  };

  let moreComics;
  if (loadMore) {
    moreComics = (
      <div className="work">
        <p>Hallo Hallo</p>
      </div>
    );
  }

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
          {moreComics}
        </div>
        <p
          className="load-more"
          onClick={() => {
            setLoadMore(!loadMore);
          }}
        >
          LOAD MORE
        </p>
      </div>
    </div>
  );
};

export default AllComics;

// to set a useState that has the index, that increases with each click.
