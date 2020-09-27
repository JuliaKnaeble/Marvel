import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import "./Comics.scss";

const Comics = ({ comic, requestComic, hero }) => {
  const [heroID, setHeroID] = useState(null);
  const history = useHistory();

  useEffect(() => {
    if (hero.id && hero.id !== heroID) {
      requestComic(hero.id);
      setHeroID(hero.id);
    }
  }, [comic, hero, heroID, requestComic]);

  const showComicDetail = () => {
    history.push("/comics");
  };

  return (
    <div className="Comics">
      {comic.map((item, index) => {
        if (index < 5) {
          return (
            <img
              key={index}
              src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
              alt={item.title}
              onClick={showComicDetail}
            />
          );
        }
        return null;
      })}
      <p>{hero.comics && hero.comics.available > 5 ? `SEE ALL` : ``}</p>
    </div>
  );
};

export default Comics;

// <p>+{hero.comics ? hero.comics.available : `0`} MORE</p>
