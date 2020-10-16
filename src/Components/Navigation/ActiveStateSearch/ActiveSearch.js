import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ActiveSearch.scss";

const ActiveSearch = ({ requestHero, clicked, requestSearch }) => {
  const [heroInput, setHeroInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    requestHero(heroInput);
    history.push("/hero");
    document.body.style.overflow = "visible";
    requestSearch(false);
  };

  const closeMenu = () => {
    requestSearch(false);
    document.body.style.overflow = "visible";
  };

  if (clicked) {
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
    return null;
  }
};

export default ActiveSearch;
