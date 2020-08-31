import React, { useState } from "react";
import "./NavbarNew.scss";

const NavbarNew = () => {
  const [searchClicked, setSearchClicked] = useState(false);

  let menu;
  if (searchClicked) {
    menu = (
      <div className="menu-opene">
        <form>
          <input
            type="text"
            placeholder="Search your Hero"
            autoComplete="off"
            spellCheck="false"
            autoFocus
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
