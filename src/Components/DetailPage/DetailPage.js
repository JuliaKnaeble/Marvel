import React from "react";

import DetailNew from "./DetailNew";

const HomePage = (props) => {
  return (
    <div>
      {props.error ? <p>{props.error}</p> : <DetailNew hero={props.hero} />}
    </div>
  );
};

export default HomePage;
