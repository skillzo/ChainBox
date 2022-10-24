import React from "react";
import styles from "./coincard3.module.css";

function Coincard3({ rank, icon, exchangeName, tVol, trustScore }) {
  return (
    <>
      <div className={styles["coincard3-card"]}>
        <div className={styles["coincard3-number"]}>{rank}</div>
        <div className={styles["coincard3-logo"]}>
          <img src={icon} alt="" />

          <div className={styles["coincard3-name"]}>
            <div>{exchangeName}</div>
          </div>
        </div>
        <div className={styles["coincard3-price"]}>
          {(tVol/ 1000).toFixed(2)}k
        </div>
        <div className={`${styles["coincard3-change"]} ${"green"}`}>+2.01%</div>
        <div className={`${styles["coincard3-score"]} ${"green"}`}>
          {trustScore}
        </div>
      </div>
    </>
  );
}

export default Coincard3;
