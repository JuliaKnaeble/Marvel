import React from "react";
import CardRow from "./CardRow";
import "./CardGrid.scss";

const CardGrid = () => {
  return (
    <div>
      <div className="CardGrid">
        <CardRow />
        <CardRow />
      </div>
    </div>
  );
};

export default CardGrid;
