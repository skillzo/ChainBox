import React from "react";
import "./navigation.css";
import NewsHeader from "../Components/Header/NewsHeader";
import NewsCard from "../Components/Card/NewsCard";

function News() {
  return (
    <>
      <NewsHeader />
      <div className="news-card__container">
        <NewsCard />
      </div>
    </>
  );
}

export default News;
