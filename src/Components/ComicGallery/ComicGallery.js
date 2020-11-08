import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./ComicGallery.scss";

import AllComicsContainer from "./AllComics/index";

const ComicGallery = ({ hero, comic, requestTotalComics}) => {
  const history = useHistory();
  const [comicsToShow, setComicsToShow] = useState([]); 
  const comicsPerLoad = 8;
  const [totalComics, setTotalComics] = useState(comicsPerLoad);

  useEffect (() => {
    requestTotalComics(comicsToShow);
  }, [comicsToShow, requestTotalComics]);

  const loopWithSlice = (start, end) => { 
    const slicedComics = comic.slice(start, end); // reducer looking at index 8 till 15 
    setComicsToShow([...comicsToShow, ...slicedComics]); // spread operator combines the arrays 
  };

  useEffect(() => {
    loopWithSlice(0, comicsPerLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMoreComics = () => {
    loopWithSlice(totalComics, comicsPerLoad + totalComics); // on first click 8, 8 + 8 
    setTotalComics(comicsPerLoad + totalComics); // on first click 8 + 8 (16)
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
        <AllComicsContainer />
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
