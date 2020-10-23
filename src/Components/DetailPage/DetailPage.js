import React from "react";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import HeroDetail from "./HeroDetail";

// props coming from the index

const DetailPage = ({error, hero, comic}) => {
  return (
    <div>
        {error === `ERROR_HERO_SEARCH` ? (<ErrorHeroSearch/>) : (<HeroDetail hero={hero} comic={comic} />)}
    </div>
    
  );
};

export default DetailPage;
