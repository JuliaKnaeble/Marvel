import React, { useEffect } from "react";
import "./DetailNew.scss";
import { fetchHero } from "../Actions";
import { useSelector, useDispatch } from "react-redux";

const DetailNew = () => {
  const dispatch = useDispatch();
  const heroDescription = useSelector((state) => state.hero.hero.description);
  const heroName = useSelector((state) => state.hero.hero.name);

  useEffect(() => {
    dispatch(fetchHero());
  });

  return (
    <div className="DetailNew">
      <div className="hero-description">
        <p className="lable">
          Marvel <span>Justice League</span>
        </p>
        <h1>{heroName}</h1>
        <h2>{heroDescription}</h2>
      </div>
      <div className="hero-image">
        <img src={require(`../Assets/portrait_incredible.jpg`)} alt="" />
      </div>
    </div>
  );
};

export default DetailNew;
