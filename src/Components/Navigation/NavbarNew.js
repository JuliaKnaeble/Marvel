import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./NavbarNew.scss";

//props coming from the index (in this case the action requestHero)

const NavbarNew = (props) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const [heroInput, setHeroInput] = useState("");
  const history = useHistory();
  document.body.style.overflow = "visible";

  function getRandomInt(min, max) {
    min = Math.ceil(9150);
    max = Math.floor(9799);
    return props.requestRandomHero(
      Math.floor(Math.random() * (max - min) + min)
    );
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    props.requestHero(heroInput);
    history.push("/hero");
    setSearchClicked(!searchClicked);
  };

  const updateHero = (event) => {
    setHeroInput(event.target.value);
  };

  const showRandomHero = () => {
    getRandomInt();
    history.push("/hero");
  };

  const showHome = () => {
    history.push("/");
  };

  let menu;
  if (searchClicked) {
    document.body.style.overflow = "hidden";
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
        <img
          className="logo"
          onClick={showHome}
          src={require(`../../Assets/logo.png`)}
          alt=""
        />
        <img
          onClick={() => setSearchClicked(!searchClicked)}
          src={require(`../../Assets/search.png`)}
          alt=""
        />
        <img
          onClick={showRandomHero}
          className="bottom"
          src={require(`../../Assets/random.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarNew;
