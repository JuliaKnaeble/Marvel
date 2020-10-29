import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./ComicGallery.scss";

import AllComicsContainer from "./AllComics/index";

const ComicGallery = ({ hero, comic }) => {
  const history = useHistory();
  const [comicsToShow, setComicsToShow] = useState([]);
  const comicsPerLoad = 8;
  const ref = useRef(comicsPerLoad);

  const loopWithSlice = (start, end) => {
    let arrayForHoldingComics = [];
    const slicedComics = comic.slice(start, end);
    let arrayConcat = arrayForHoldingComics.concat(slicedComics);
    setComicsToShow([...comicsToShow, ...arrayConcat]);
  };

  useEffect(() => {
    loopWithSlice(0, comicsPerLoad);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMoreComics = () => {
    loopWithSlice(ref.current, ref.current + comicsPerLoad);
    ref.current += comicsPerLoad;
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
