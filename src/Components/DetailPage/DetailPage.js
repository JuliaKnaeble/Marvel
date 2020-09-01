import React from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  return (
    <div>
      {props.error ? <p>{props.error}</p> : <DetailNew hero={props.hero} />}
    </div>
  );
};

export default DetailPage;

//const DetailPage = ({hero}) => {
//  return (
//    <div>
//     <DetailNew hero={hero} />
//    </div>
//  );
//};
