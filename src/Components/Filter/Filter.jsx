import React from "react";
import styles from "./filter.module.css";

function Filter() {
  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter1}>
        <div className={styles["price-in"]}>BTC</div>
        <div className={styles["price-in"]}>1hr%</div>
        <div className={styles["price-in"]}>Top 100</div>
      </div>

      {/* /////filter 2///////// */}
    </div>
  );
}

export default Filter;
