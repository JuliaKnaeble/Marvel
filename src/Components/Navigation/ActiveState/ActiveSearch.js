import React, { useState } from "react";

import "./ActiveSearch.scss";

const ActiveSearch = (props) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [heroInput, setHeroInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.requestHero(heroInput);
    history.push("/hero");
    setSearchClicked(!searchClicked);
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
            src={require(`../../Assets/close_x.png`)}
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
