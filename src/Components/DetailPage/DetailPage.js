import React, { useState } from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  console.log(props.hero.id);
  //const [updateComic, setUpdateComic] = useState(props.hero.id);

  //if (
  // updateComic === props.hero.id
  //   ? console.log("?")
  //   : setUpdateComic(props.requestComic(props.hero.id))
  // );

  console.log(props);
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
