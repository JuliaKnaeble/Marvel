import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import HomeButton from "../../Assets/NavSvg/HomeButton";
import Search from "../../Assets/NavSvg/Search";
import Random from "../../Assets/NavSvg/Random";
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
        <div onClick={() => history.push("/")}>
          <HomeButton className="logo nav-items" />
        </div>
        <div onClick={() => setSearchClicked(!searchClicked)}>
          <Search className="nav-items" />
        </div>
        <div onClick={showRandomHero}>
          <Random className="bottom nav-items" />
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
