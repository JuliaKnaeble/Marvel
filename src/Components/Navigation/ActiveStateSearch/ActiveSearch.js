import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ActiveSearch.scss";

const ActiveSearch = ({ requestHero, buttonClicked, searchClicked }) => {
  const [searchActive, setSearchActive] = useState(buttonClicked);
  const [searchButtonActive, setSearchButtonActive] = useState(searchClicked);
  console.log(searchClicked);
  const [heroInput, setHeroInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    requestHero(heroInput);
    history.push("/hero");
    document.body.style.overflow = "visible";
    setSearchActive(false);
    setSearchButtonActive(false);
  };

  const closeMenu = () => {
    setSearchActive(false);
    setSearchButtonActive(false);
    document.body.style.overflow = "visible";
  };

  if (searchActive || searchButtonActive) {
    console.log("yes");
    document.body.style.overflow = "hidden";
    return (
      <div>
        <div className="menu-opene">
          <form onSubmit={handleSubmit}>
            <img
              className="close"
              src={require(`../../../Assets/close_x.png`)}
              alt=""
              onClick={closeMenu}
            />
            <input
              type="text"
              placeholder="Search your Hero..."
              autoComplete="off"
              spellCheck="false"
              autoFocus
              onChange={(event) => setHeroInput(event.target.value)}
            />
          </form>
        </div>
      </div>
    );
  } else {
    console.log("no");
    return null;
  }
};

export default ActiveSearch;
