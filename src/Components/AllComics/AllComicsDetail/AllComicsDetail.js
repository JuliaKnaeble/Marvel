import React from "react";
import { useHistory } from "react-router-dom";
import "./AllComicsDetail.scss";

const AllComics = ({ requestComicDetail, comicsToRender }) => {
  const history = useHistory();

  const showComicDetail = (indexKey) => {
    requestComicDetail(indexKey);
    history.push("/comics");
  };

  return (
    <div className="AllComics">
        {comicsToRender.map((item, index) => {
          return (
            <div key={index} className="all-comics-container">
              <p className="more">READ MORE</p>
              <img
                className="comic-images"
                src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                alt={item.title}
                onClick={() => showComicDetail(index)}
              />
              <p className="comic-title">{item.title}</p>
            </div>
          );
        })}
      </div>
  );
};

export default AllComics;
