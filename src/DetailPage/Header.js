import React, { useEffect } from "react";
import "./Header.scss";
import { fetchHero } from "../Actions";
import { useSelector, useDispatch } from "react-redux";

const Header = () => {
  const dispatch = useDispatch();
  const heroDescription = useSelector((state) => state.hero.hero.description);
  const heroName = useSelector((state) => state.hero.hero.name);

  useEffect(() => {
    dispatch(fetchHero());
  });

  return (
    <div className="header-bg">
      <div className="Header">
        <h1>{heroName}</h1>
        <h2>{heroDescription}</h2>
      </div>
    </div>
  );
};

export default Header;
