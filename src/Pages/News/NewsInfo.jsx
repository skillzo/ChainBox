import React from "react";
import { useParams } from "react-router-dom";
import Description from "../../Components/Card/Description/CoinDescription";
import NewsHeader from "../../Components/Header/NewsHeader";
import {
  ImageSkeleton,
  TextSkeleton,
} from "../../Components/Card/Skeletons/SkeletonCard.jsx";

import useFetch2 from "../../Hooks/UseFetch2.js";
import ErrorPage from "../Error/404";

function NewsInfo() {
  const { id } = useParams();
  const { newData, loading, error } = useFetch2();

  const newNewsData = newData.filter((news) => {
    return news.id === id;
  });
  return (
    <div className="newsinfo-container">
      <div className="error-page">{error && <ErrorPage />}</div>
      {newNewsData.map((news) => {
        return (
          <NewsHeader
            key={news.id}
            id={news.id}
            image={news.image}
            title={news.title}
            summay={news.summary}
            category={news.category}
          />
        );
      })}
      {loading && <ImageSkeleton />}
      <div className="newsinfo-body">
        {newNewsData.map((news) => {
          return (
            <Description
              key={news.id}
              id={news.id}
              summary={news.summary}
              author={news.author}
              category={news.category}
              copyright={news.copyright}
              link={news.link}
            />
          );
        })}
        {loading && <TextSkeleton />}
      </div>
    </div>
  );
}

export default NewsInfo;
