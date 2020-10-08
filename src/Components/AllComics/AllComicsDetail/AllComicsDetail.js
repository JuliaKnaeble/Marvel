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
      <div className="all-comics-img-container">
        {comicsToRender.map((item, index) => {
          return (
            <div key={index} className="all-comics-img">
              <p className="more">READ MORE</p>
              <img
                src={`${item.thumbnail.path}/portrait_uncanny.${item.thumbnail.extension}`}
                alt={item.title}
                onClick={() => showComicDetail(index)}
              />
              <p>{item.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AllComics;
