import React, { useState } from "react";
import styles from "./filter.module.css";

function Filter({ token, setToken }) {
  const [topCoin, setTopCoin] = useState(false);

  const top50 = () => {
    topCoin ? setToken(token?.slice(0, 100)) : setToken(token?.slice(0, 50));
  };

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
          <select name="" id="">
            <option value="">1hr%</option>
            <option value="">24hr%</option>
            <option value="">1D%</option>
          </select>
        </div>

        {/* toggle top 100 and top 50 coins */}
        <div
          className={styles["price-in"]}
          onClick={() => {
            setTopCoin(!topCoin);
            top50();
          }}
        >
          {topCoin ? <div>Top 50</div> : <div>Top 100</div>}
        </div>
      </div>

      {/* /////filter 2///////// */}
    </div>
  );
}

export default Filter;
