import React, { Fragment } from "react";
import "../navigation.css";
import NewsHeader from "../../Components/Header/NewsHeader";
import NewsCard from "../../Components/Card/News/NewsCard";
import ErrorPage from "../Error/404";
import { SCoinCard } from "../../Components/Card/Skeletons/SkeletonCard";
import useFetch2 from "../../Hooks/UseFetch2.js";

function News() {
  const { newData, loading, error } = useFetch2();
  return (
    <Fragment>
      <div className="error-page">{error && <ErrorPage />}</div>

      <NewsHeader icon={newData[Math.round(Math.random() * 50)]?.image} />

      <div className="skeleton-loading">{loading && <SCoinCard />}</div>
      <div className="news-card__container">
        {newData &&
          newData.map((news) => {
            return (
              <NewsCard
                key={news.id}
                id={news.id}
                icon={news.image}
                title={news.title}
                author={news.author}
                date={news.published_time}
              />
            );
          })}
      </div>
    </Fragment>
  );
}

export default News;
