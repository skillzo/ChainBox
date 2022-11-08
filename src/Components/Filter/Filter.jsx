import React from "react";
import styles from "./filter.module.css";

function Filter() {
  return (
    <div className={styles["filter-container"]}>
      <div className={styles.filter1}>
        <div className={styles["price-in"]}>
          <select name="" id="">
            <option value="">BTC</option>
            <option value="">USDT</option>
          </select>
        </div>
        <div className={styles["price-in"]}>
          {" "}
          <select name="" id="">
            <option value="">1hr%</option>
            <option value="">24hr%</option>
            <option value="">1D%</option>
          </select>
        </div>
        <div className={styles["price-in"]}>
          {" "}
          <select name="" id="">
            <option value="">Top 100</option>
            <option value="">Top 50</option>
          </select>
        </div>
      </div>

      {/* /////filter 2///////// */}
    </div>
  );
}

export default Filter;
