import React from "react";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import ErrorRandomSearch from "../Error/ErrorRandomSearch";
import HeroDetail from "./HeroDetail";

// props coming from the index

const DetailPage = (props) => {
  return (
    <div>
      {props.error ? (
        props.error === `ERROR_RANDOM_SEARCH` ? (
          <ErrorRandomSearch />
        ) : (
          <ErrorHeroSearch />
        )
      ) : (
        <HeroDetail hero={props.hero} comic={props.comic} />
      )}
    </div>
  );
};

export default DetailPage;
