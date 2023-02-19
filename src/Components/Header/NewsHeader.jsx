import React from "react";
import useFetch2 from "../../Hooks/UseFetch2.js";
import { useAuth } from "../../Store/AuthContext";
import { ImageSkeleton } from "../Card/Skeletons/SkeletonCard";
import "./newsheader.css";

function NewsHeader({ icon }) {
  const { currentUser } = useAuth();
  const { loading } = useFetch2();
  const time = new Date().getHours();
  return (
    <>
      <div className="news-header__container">
        <div className="news-greeting">
          {time < 11 ? (
            <h1>Good Morning</h1>
          ) : time >= 11 && time <= 16 ? (
            <h1>Good Afternoon</h1>
          ) : time >= 16 && time <= 23 ? (
            <h1>Good Evening</h1>
          ) : (
            <h1>Good Morning</h1>
          )}
          <p> {currentUser?.displayName || "Skillzo"}</p>
        </div>
        <div className="greetings-text">
          <p>Explore The World With A Single Click </p>
        </div>

        <div className="header-news__image">
          {loading ? <ImageSkeleton /> : <img src={icon} alt="" />}
        </div>

        <div>
          <h2>Trending</h2>
        </div>
      </div>
    </>
  );
}

export default NewsHeader;
