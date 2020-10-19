import React from "react";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import ErrorRandomSearch from "../Error/ErrorRandomSearch";
import HeroDetail from "./HeroDetail";

// props coming from the index

const DetailPage = ({error, hero, comic}) => {
  return (
    <div>
      {error ? (
        error === `ERROR_RANDOM_SEARCH` ? (
          <ErrorRandomSearch />
        ) : (
          <ErrorHeroSearch />
        )
      ) : (
        <HeroDetail hero={hero} comic={comic} />
      )}
    </div>
  );
};

export default DetailPage;
