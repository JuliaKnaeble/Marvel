import React from "react";
import "./NavDesktop.scss";

import axios from "axios";

const NavDesktop = () => {
  function handleClick() {
    let privateKey = `9e03dafe762937ad20491330b0bcd5beb486280b`;
    let publicKey = "5094ba4401702d0e3ae3bcf66339e50a";
  }

  return (
    <div className="nav-bg">
      <div className="NavDesktop">
        <div>HeroSearch</div>
        <div className="nav-times">
          <span>Home</span>
          <span>Heroes</span>
          <form>
            <input
              type="text"
              placeholder="Search your Hero"
              autoComplete="off"
              spellCheck="false"
              autoFocus
            />
            <button onClick={handleClick}>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
