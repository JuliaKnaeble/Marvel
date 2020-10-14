import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ActiveSearchContainer from "./ActiveStateSearch";
import HomeButton from "../../Assets/NavSvg/HomeButton";
import Search from "../../Assets/NavSvg/Search";
import Random from "../../Assets/NavSvg/Random";
import "./NavbarNew.scss";

//props coming from the index (in this case the action requestHero)

const NavbarNew = ({ requestRandomHero }) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const history = useHistory();

  function getRandomInt(min, max) {
    min = Math.ceil(9150);
    max = Math.floor(9799);
    return requestRandomHero(Math.floor(Math.random() * (max - min) + min));
  }

  const showRandomHero = () => {
    getRandomInt();
    history.push("/hero");
  };

  if (searchClicked) {
    return <ActiveSearchContainer />;
  }

  return (
    <div>
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
