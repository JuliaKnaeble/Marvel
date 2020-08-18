import React from "react";
import "./NavDesktop.scss";

const NavDesktop = () => {
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
            <button>Search</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default NavDesktop;
