import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

import AllComicsDetailContainer from "../AllComics/AllComicsDetail/index";

const AllComics = ({ hero, comic }) => {
  const history = useHistory();
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
        <AllComicsDetailContainer />
        <p className="load-more" onClick={() => {}}>
          LOAD MORE
        </p>
      </div>
    </div>
  );
};

export default AllComics;
