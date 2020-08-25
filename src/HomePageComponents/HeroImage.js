import React, { useEffect } from "react";
import "./HeroImage.scss";
import { fetchHero } from "../Actions";
import { useSelector, useDispatch } from "react-redux";

const HeroImage = () => {
  const dispatch = useDispatch();
  //const heroImage = useSelector((state) => state.hero.hero.thumbnail.path);

  //console.log(heroImage);

  useEffect(() => {
    dispatch(fetchHero());
  });

  return <div className="HeroImage"></div>;
};

export default HeroImage;
