import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComics.scss";

const AllComics = ({ requestComicDetail, comicsToShow }) => {
  const history = useHistory();

  const showComicDetail = (indexKey) => {
    requestComicDetail(indexKey);
    history.push("/comics");
  };

  return (
    <div className="AllComics">
      {comicsToShow.map((item, index) => {
        return (
          <div key={index} className="all-comics-container">
            <div
              className="on-hover-container"
              onClick={() => showComicDetail(index)}
            >
              {/* position: relative; */}
              <div className="read-more-container">
                {" "}
                {/* position: absolute; width: 100%; height: 100%; top: 0; left: 0; display: flex; align-items: center; */}
                <span className="more">READ MORE</span>
              </div>
              <img
                className="comic-images"
                src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                alt={item.title}
              />
            </div>
            <p className="comic-title">{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default AllComics;
