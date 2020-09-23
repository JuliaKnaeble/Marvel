import React, { useState } from "react";
import DetailNew from "./DetailNew";

// props coming from the index

const DetailPage = (props) => {
  // João: I am sure this is NO GOOD and should be done different!
  // I basically tried to make it only run once the hero.id changes but this is surely not the way to do it!!
  const [updateComic, setUpdateComic] = useState(props.hero.id);

  if (props.hero.id && props.hero.id !== updateComic) {
    setUpdateComic(props.hero.id) && props.requestComic(props.hero.id);
  }

  //useEffect(() => {
  //  if (hero.id !== updateComic) {
  //    setUpdateComic(hero.id);
  //    requestComic(hero.id);
  //  }
  // }, [updateComic]);

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
