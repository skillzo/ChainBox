import React from "react";
import "./newsheader.css";

function NewsHeader() {
  return (
    <>
      <div className="news-header__container">
        <div className="news-greeting">
          <h1>Good Morning</h1>
          <p> Skillzo</p>
        </div>
        <div className="greetings-text">
          <p>Explore The World With a Single Click </p>
        </div>

        <div className="header-news__image">
          <img src="https://wallpapercave.com/wp/wp2128385.jpg" alt="" />
        </div>

        <div>
          <h2>Trending</h2>
        </div>
      </div>
    </>
  );
}

export default NewsHeader;
