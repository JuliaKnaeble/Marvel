import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import "./ActiveSearch.scss";

const ActiveSearch = (props) => {
  document.body.style.overflow = "hidden";
  const [searchClicked, setSearchClicked] = useState(false);
  const [heroInput, setHeroInput] = useState("");
  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    props.requestHero(heroInput);
    history.push("/hero");
    setSearchClicked(!searchClicked);
    document.body.style.overflow = "visible";
  };

  const updateHero = (event) => {
    setHeroInput(event.target.value);
  };
  return (
    <div>
      <div className="menu-opene">
        <form onSubmit={handleSubmit}>
          <img
            className="close"
            src={require(`../../../Assets/close_x.png`)}
            alt=""
            onClick={() => setSearchClicked(!searchClicked)}
          />
          <input
            type="text"
            placeholder="Search your Hero..."
            autoComplete="off"
            spellCheck="false"
            autoFocus
            onChange={updateHero}
          />
        </form>
      </div>
    </div>
  );
};

export default ActiveSearch;