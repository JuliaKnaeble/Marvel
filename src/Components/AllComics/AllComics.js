import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

const AllComics = ({ hero, comic }) => {
  const history = useHistory();
  return (
    <div className="AllComics">
      <div className="all-comics-container">
        <p onClick={() => history.push("/hero")} className="back">
          {" "}
          ◁ BACK TO PROFILE
        </p>
        <div className="all-comics-img-container">
          {comic.map((item, index) => {
            if (index < 8) {
              return (
                <div key={index} className="all-comics-img">
                  <img
                    src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                    alt={item.title}
                  />
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
    </div>
  );
};

export default AllComics;
