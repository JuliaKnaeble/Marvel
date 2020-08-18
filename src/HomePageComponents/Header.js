import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="header-bg">
      <div className="Header">
        <h1>What's your Hero like?</h1>
        <h2>
          Find out more about your favorite Marvel Heros and get all related
          commics and background stroies.
        </h2>
        <button>Hero Generator</button>
      </div>
    </div>
  );
};

export default Header;
