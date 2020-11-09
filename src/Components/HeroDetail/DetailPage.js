import React, { useEffect } from "react";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import HeroDetail from "./HeroDetail";

// props coming from the index

const DetailPage = ({ error, hero, comic, resetTotalComics }) => {
  useEffect(() => {
    resetTotalComics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {error === `ERROR_HERO_SEARCH` ? (
        <ErrorHeroSearch />
      ) : (
        <HeroDetail hero={hero} comic={comic} />
      )}
    </div>
  );
};

export default DetailPage;
