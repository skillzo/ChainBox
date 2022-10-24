import React from "react";
import { Link } from "react-router-dom";
import styles from "./coincard.module.css";

function CoinCard({ rank, icon, coinName, mkCap, price, symbol, change, id }) {
  return (
    <Link to={`/cardinfo/${id}`}>
      <div className={styles["coin-card"]}>
        <div className={styles["coin-number"]}>{rank}</div>
        <div className={styles["coin-logo"]}>
          <img src={icon} alt="" />

          <div className={styles["coin-name"]}>
            <div>{coinName.toUpperCase()}</div>
            <div className={styles["market-cap"]}>
              {(mkCap / 1000000000).toFixed(2)}Bn
            </div>
          </div>
        </div>
        {price < 1 ? (
          <div className={styles["coin-price"]}>{price.toFixed(3)}</div>
        ) : (
          <div className={styles["coin-price"]}>{price.toFixed(2)}</div>
        )}

        {change < 0 ? (
          <div className={`${styles["coin-change"]} ${"red"}`}>
            {change.toFixed(2)}
          </div>
        ) : (
          <div className={`${styles["coin-change"]} ${"green"}`}>
            {change.toFixed(2)}
          </div>
        )}
        <div className={styles["coin-holding"]}>12{symbol.toUpperCase()}</div>
      </div>
    </Link>
  );
}

export default CoinCard;
