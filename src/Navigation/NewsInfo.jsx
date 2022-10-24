import React from "react";
import { useParams } from "react-router-dom";
import Description from "../Components/Card/NewsInfo/Description";
import NewsHeader from "../Components/Card/NewsInfo/NewsHeader";
import {
  ImageSkeleton,
  TextSkeleton,
} from "../Components/Card/Skeletons/SkeletonCard";

import useFetch2 from "../Store/Apifolder/UseFetch2";
import ErrorPage from "./ErrorPage";

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
