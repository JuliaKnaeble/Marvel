import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

import AllComicsDetailContainer from "../AllComics/AllComicsDetail/index";

const AllComics = ({ hero, comic }) => {
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
    <div className="LoadMore">
      <div className="all-comics-container">
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <p className="all-comics-available">
          All comics: {hero.name} [{hero.comics.available}]
        </p>
        <AllComicsDetailContainer comicsToRender={comicsToShow} />
        <p
          className="load-more"
          onClick={() => {
            handleShowMoreComics();
          }}
        >
          LOAD MORE
        </p>
      </div>
    </div>
  );
};

export default AllComics;
