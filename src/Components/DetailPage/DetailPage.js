import React from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  return (
    <div>
      {props.error ? (
        props.error
      ) : (
        <DetailNew hero={props.hero} comic={props.comic} />
      )}
    </div>
  );
};

export default DetailPage;
