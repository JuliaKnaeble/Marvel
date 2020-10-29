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
            <div className="comic-container" key={index} onClick={() => showComicDetail(index)}>
              <p className="more">READ MORE</p>
              <img
                src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
                alt={item.title}
              />
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
