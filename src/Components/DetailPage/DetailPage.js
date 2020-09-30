import React from "react";
import ErrorHeroSearch from "../Error/ErrorHeroSearch";
import ErrorRandomSearch from "../Error/ErrorRandomSearch";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  return (
    <div>
      {props.error ? (
        props.error === `NOT_FOUND` ? (
          <ErrorRandomSearch />
        ) : (
          <ErrorHeroSearch />
        )
      ) : (
        <DetailNew hero={props.hero} comic={props.comic} />
      )}
    </div>
  );
};

export default DetailPage;
