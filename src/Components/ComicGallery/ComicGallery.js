import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import AllComicsContainer from "./AllComics/index";
import BackArrow from "../../Assets/NavSvg/BackArrow";
import "./ComicGallery.scss";

const ComicGallery = ({ hero, comic, totalNumber, requestTotalComics }) => {
  const history = useHistory();
  const [comicsToShow, setComicsToShow] = useState([]);
  const comicsPerLoad = 8;

  const loopWithSlice = (start, end) => {
    const slicedComics = comic.slice(start, end); // reducer looking at index 8 till 15
    setComicsToShow([...comicsToShow, ...slicedComics]); // spread operator combines the arrays
  };

  useEffect(() => {
    loopWithSlice(0, totalNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleShowMoreComics = () => {
    loopWithSlice(totalNumber, totalNumber + comicsPerLoad); // on first click 8, 8 + 8
    requestTotalComics(totalNumber + comicsPerLoad); // on first click 8 + 8 (16)
  };

  return (
    <div className="ComicGallery">
      <div>
        <div onClick={() => history.push("/hero")}>
          <BackArrow className="back" />
        </div>
        <p className="all-comics-available">
          All comics: {hero.name} [{hero.comics.available}]
        </p>
        <AllComicsContainer comicsToShow={comicsToShow} />
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
