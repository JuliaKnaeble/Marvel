import React from "react";
import { useHistory } from "react-router-dom";
import HomeButtonIcon from "../../Assets/NavSvg/HomeButtonIcon";
import SearchIcon from "../../Assets/NavSvg/SearchIcon";
import RandomIcon from "../../Assets/NavSvg/RandomIcon";
import "./NavbarNew.scss";

//props coming from the index (in this case the action requestHero)

const NavbarNew = ({ requestRandomHero, requestSearch }) => {
  const history = useHistory();

  const showRandomHero = (min, max) => {
    min = Math.ceil(9146);
    max = Math.floor(9742);
    history.push("/hero");
    return requestRandomHero(Math.floor(Math.random() * (max - min) + min));
  };


  return (
    <div>
      <div className="NavbarNew">
        <div onClick={() => history.push("/")}>
          <HomeButtonIcon className="logo nav-items" />
        </div>
        <div onClick={() => requestSearch(true)}>
          <SearchIcon className="nav-items" />
        </div>
        <div onClick={showRandomHero}>
          <RandomIcon className="bottom nav-items" />
        </div>
      </div>
    </div>
  );
};

export default NavbarNew;
