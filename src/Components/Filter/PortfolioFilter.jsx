import React from "react";
import styles from "./portfoliofilter.module.css";

function PortfolioFilter() {
  return (
    <>
      <div className={styles["portfoliofilter-container"]}>
        <div className="portfolio-filter">Assest</div>
        <div className="portfolio-filter">Price</div>
        <div className="portfolio-filter">Holdings</div>
      </div>
    </>
  );
}

export default PortfolioFilter;
