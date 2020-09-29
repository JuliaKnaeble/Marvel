import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

const AllComics = ({ comic }) => {
  const history = useHistory();
  return (
    <div className="AllComics">
      <div className="all-comics-container">
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
      </div>
    </div>
  );
};

export default AllComics;
