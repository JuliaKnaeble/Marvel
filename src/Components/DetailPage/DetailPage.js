import React from "react";
import ErrorRandomSearch from "../Error/ErrorRandomSearch";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import HeroDetail from "./HeroDetail";

// props coming from the index

const DetailPage = ({hero, comic, error}) => {

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
