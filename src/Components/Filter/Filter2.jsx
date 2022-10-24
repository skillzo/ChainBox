import React from "react";
import styles from "./filter2.module.css";

function Filter2(props) {
  return (
    <div className={styles.filter2}>
      <div className={styles["name-filter"]}>{props.rank}</div>
      <div className={styles["name-filter"]}>{props.name}</div>
      <div className={styles["name-filter"]}>{props.price}</div>
      <div className={styles["name-filter"]}>{props.change}</div>
      <div className={styles["name-filter"]}>{props.holdings}</div>
    </div>
  );
}

export default Filter2;
