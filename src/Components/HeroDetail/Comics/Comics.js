import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Comics.scss";

const Comics = ({ comic, requestComic, hero, requestComicDetail }) => {
  const [heroID, setHeroID] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (hero.id && hero.id !== heroID) {
      requestComic(hero.id);
      setHeroID(hero.id);
    }
  }, [hero, heroID, requestComic]);

  const showComicDetail = (indexKey) => {
    requestComicDetail(indexKey);
    history.push("/comics");
  };

  return (
    <div className="Comics">
      {comic.map((item, index) => {
        if (index < 5) {
          return (
            <div className="comic-container" key={index}>
              <div
                className="comic-on-hover-container"
                onClick={() => showComicDetail(index)}
              >
                <div className="read-more-container">
                  <span className="more">READ MORE</span>
                </div>
                <img
                  className="comic-image"
                  src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
                  alt={item.title}
                />
              </div>
            </div>
          );
        }
        return null;
      })}
      <p className="see-all" onClick={() => history.push("/allcomics")}>
        {hero.comics && hero.comics.available > 5 ? `SEE ALL` : ``}
      </p>
    </div>
  );
};

export default Comics;
