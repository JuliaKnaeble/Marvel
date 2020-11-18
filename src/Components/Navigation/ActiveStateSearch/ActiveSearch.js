import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ActiveSearch.scss";

const ActiveSearch = ({ requestHero, clicked, requestSearch }) => {
  const [heroInput, setHeroInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    document.body.style.overflow = "visible";
    event.preventDefault();
    requestHero(heroInput);
    requestSearch(false);
    history.push("/hero");
  };

  const closeMenu = () => {
    document.body.style.overflow = "visible";
    requestSearch(false);
  };

  if (clicked) {
    document.body.style.overflow = "hidden";
    return (
      <div>
        <div className="menu-open">
          <form onSubmit={handleSubmit}>
            <div className="search-close">
              <img
                className="close-icon"
                src={require(`../../../Assets/close_x.png`)}
                alt=""
                onClick={closeMenu}
              />
            </div>
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
    return null;
  }
};

export default ActiveSearch;
