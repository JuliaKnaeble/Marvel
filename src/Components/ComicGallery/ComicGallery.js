import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ComicGallery.scss";

import AllComicsContainer from "./AllComics/index";

const ComicGallery = ({ hero, comic }) => {
  const history = useHistory();
  const [comicsToShow, setComicsToShow] = useState([]); 
  const comicsPerLoad = 8;
  const [totalComics, setTotalComics] = useState(comicsPerLoad);

  const loopWithSlice = (start, end) => {
    const slicedComics = comic.slice(start, end);
    setComicsToShow([...comicsToShow, ...slicedComics]);
  };

  useEffect(() => {
    loopWithSlice(0, comicsPerLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMoreComics = () => {
    loopWithSlice(totalComics, totalComics + comicsPerLoad);
    setTotalComics(totalComics + comicsPerLoad);
  };

  return (
    <div className="ComicGallery">
      <div>
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <p className="all-comics-available">
          All comics: {hero.name} [{hero.comics.available}]
        </p>
        <AllComicsContainer comicsToRender={comicsToShow} />
        <button
          className="load-more"
          onClick={() => {
            handleShowMoreComics();
          }}
        >
          LOAD MORE
        </button>
      </div>
    </div>
  );
};

export default ComicGallery;
