import React from "react";
import { Link } from "react-router-dom";
import styles from "./coincard.module.css";

function CoinCard({ rank, icon, coinName, mkCap, price, symbol, change, id }) {
  return (
    <Link to={`/CoinInfo/${id}`}>
      <div className={styles["coin-card"]}>
        <div className={styles["coin-number"]}>{rank}</div>

        {/* coin logo and mkp cap */}
        <div className={styles["coin-logo"]}>
          <img src={icon} alt="" />

          <div className={styles["coin-name"]}>
            <div>{coinName.toUpperCase()}</div>
            {/* <div className={styles["market-cap"]}>
              {(mkCap / 1000000000).toFixed(2)}Bn
            </div> */}
          </div>
        </div>

        {/* price change in 24hrs  */}
        {/* {price < 1 ? (
          <div className={styles["coin-price"]}>{price.toFixed(3) || 0}</div>
        ) : (
          <div className={styles["coin-price"]}>{price.toFixed(2) || 0}</div>
        )} */}

        {/* percetage change in 24hrs  */}
        {/* {change < 0 ? (
          <div className={`${styles["coin-change"]} ${"red"}`}>
            {Math.abs(change.toFixed(2)) || 0}
          </div>
        ) : (
          <div className={`${styles["coin-change"]} ${"green"}`}>
            {change.toFixed(2) || 0}
          </div>
        )} */}
        <div className={styles["coin-holding"]}>0{symbol.toUpperCase()}</div>
      </div>
    </Link>
  );
}

export default CoinCard;
