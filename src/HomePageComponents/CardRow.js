import React from "react";
import Card from "./Card";
import "./CardRow.scss";

const CardRow = () => {
  return (
    <div className="CardRow">
      <Card />
      <Card />
      <Card />
    </div>
  );
};

export default CardRow;
