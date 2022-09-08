import React from "react";
import "./newsnavbar.css";

function NewsNavbar() {
  return (
    <>
      <div className="news-navbar__container">
        Back
        <div className="news-navbar__share">
          <p>Fav</p>
          <p>Share</p>
        </div>
      </div>
    </>
  );
}

export default NewsNavbar;
