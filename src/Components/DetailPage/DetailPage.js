import React, { useState } from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  const [updateComic, setUpdateComic] = useState(props.hero.id);
  if (
    props.hero.id & (props.hero.id !== updateComic)
      ? setUpdateComic(props.hero.id) & props.requestComic(props.hero.id)
      : ""
  );

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

//const DetailPage = ({hero}) => {
//  return (
//    <div>
//     <DetailNew hero={hero} />
//    </div>
//  );
//};
