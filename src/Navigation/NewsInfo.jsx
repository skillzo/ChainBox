import React from "react";
import NewsMain from "../Components/Card/NewsMain";
import NewsNavbar from "../Components/Navbar/NewsNavbar";

function NewsInfo() {
  return (
    <>
      <div className="outlet">
        <NewsNavbar />
        <NewsMain />
      </div>
    </>
  );
}

export default NewsInfo;
