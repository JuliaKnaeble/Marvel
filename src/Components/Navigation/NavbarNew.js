import React, { useState } from "react";
import "./NavbarNew.scss";

//props coming from the index (in this case the action requestHero)

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
  }

  return (
    <div>
      {menu}
      <div className="NavbarNew">
        <img className="top" src={require(`../../Assets/logo.png`)} alt="" />
        <img
          onClick={() => setSearchClicked(!searchClicked)}
          src={require(`../../Assets/search.png`)}
          alt=""
        />
        <img
          className="bottom"
          src={require(`../../Assets/random.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarNew;
