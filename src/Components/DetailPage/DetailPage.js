import React from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  return (
    <div>
      {props.error ? (
        <p>{props.error}</p>
      ) : (
        <DetailNew hero={props.hero} comic={props.comic} />
      )}
    </div>
  );
};

export default DetailPage;
