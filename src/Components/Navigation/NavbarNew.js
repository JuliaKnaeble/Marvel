import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import ActiveSearchContainer from "./ActiveStateSearch";
import "./NavbarNew.scss";

//props coming from the index (in this case the action requestHero)

const NavbarNew = (props) => {
  const [searchClicked, setSearchClicked] = useState(false);
  const history = useHistory();

  function getRandomInt(min, max) {
    min = Math.ceil(9150);
    max = Math.floor(9799);
    return props.requestRandomHero(
      Math.floor(Math.random() * (max - min) + min)
    );
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
        <img
          className="logo nav-items"
          onClick={() => history.push("/")}
          src={require(`../../Assets/logo.png`)}
          alt=""
        />
        <img
          className="nav-items"
          onClick={() => setSearchClicked(!searchClicked)}
          src={require(`../../Assets/search.png`)}
          alt=""
        />
        <img
          onClick={showRandomHero}
          className="bottom nav-items"
          src={require(`../../Assets/random.png`)}
          alt=""
        />
      </div>
    </div>
  );
};

export default NavbarNew;
