import React from "react";
import useFetch2 from "../../Hooks/UseFetch2.js";
import { useAuth } from "../../Store/AuthContext";
import { ImageSkeleton } from "../Card/Skeletons/SkeletonCard";
import styles from "./newsheader.module.css";

function NewsHeader({ icon }) {
  const { currentUser } = useAuth();
  const { loading } = useFetch2();
  const time = new Date().getHours();
  return (
    <>
      <div className={styles["news-header__container"]}>
        <div className="fc !text-lg font-bold gap-2">
          {time < 11 ? (
            <h1>Good Morning</h1>
          ) : time >= 11 && time <= 16 ? (
            <h1>Good Afternoon</h1>
          ) : time >= 16 && time <= 23 ? (
            <h1>Good Evening</h1>
          ) : (
            <h1>Good Morning</h1>
          )}
          <p className="text-brand-blue font-semibold">
            {" "}
            {currentUser?.displayName || "Skillzo"}
          </p>
        </div>

        <p className="my-1 text-gray-500 ">
          Explore The World With A Single Click{" "}
        </p>

        <div className={styles["header-news__image"]}>
          {loading ? <ImageSkeleton /> : <img src={icon} alt="" />}
        </div>

        <h2 className="my-5 text-lg font-semibold">Trending</h2>
      </div>
    </>
  );
}

export default NewsHeader;
