import React from "react";

import DetailNew from "./DetailNew";

const DetailPage = (props) => {
  return (
    <div>
      <DetailNew hero={props.hero} />
    </div>
  );
};

export default DetailPage;
