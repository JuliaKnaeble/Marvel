import React, { useState } from "react";
import "./NavbarNew.scss";

const NavbarNew = (props) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [heroInput, setHeroInput] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    props.requestHero(heroInput);
    setSearchClicked(!searchClicked);
  };

  const updateHero = (event) => {
    setHeroInput(event.target.value);
  };

  let menu;
  if (searchClicked) {
    menu = (
      <div className="menu-opene">
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search your Hero"
            autoComplete="off"
            spellCheck="false"
            autoFocus
            onChange={updateHero}
          />
        </form>
      </div>
    );
  }

  return (
    <div>
      {menu}
      <div className="NavbarNew">
        <span className="top">1</span>
        <span onClick={() => setSearchClicked(!searchClicked)}>2</span>
        <span className="bottom">3</span>
      </div>
    </div>
  );
};

export default NavbarNew;
