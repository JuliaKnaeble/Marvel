import React, { useState, useEffect } from "react";

import "./Comics.scss";

const Comics = ({ comic, requestComic, hero }) => {
  const [heroID, setHeroID] = useState(null);

  useEffect(() => {
    if (hero.id && hero.id !== heroID) {
      requestComic(hero.id);
      setHeroID(hero.id);
    }
  }, [comic, hero, heroID, requestComic]);

  return (
    <div className="Comics">
      {comic.map((item, index) => {
        if (index < 5) {
          return (
            <img
              key={index}
              src={`${item.thumbnail.path}/portrait_medium.${item.thumbnail.extension}`}
              alt={item.title}
            />
          );
        }
        return null;
      })}
      <p>+{hero.comics ? hero.comics.available : `0`} MORE</p>
    </div>
  );
};

export default Comics;
