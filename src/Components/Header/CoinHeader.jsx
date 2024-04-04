import React from "react";
import styles from "./coinheader.module.css";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

function CoinHeader({ coinName, price, changePercent, changeCur }) {
  const changeStyle =
    styles["CoinHeader_change__changenumber"] + " " + changeCur < 0
      ? styles.textred
      : styles.textgreen;
  const percentageStyle =
    styles["coinheader-change"] + " " + changePercent < 0
      ? styles.textred
      : styles.green;
  return (
    <div className={styles["coinheader-container"]}>
      <div className={styles["coinheader-main"]}>
        <div className={styles["coinheader-name"]}>{coinName}</div>
        <div className={styles["coinheader-price"]}>
          US ${price?.toLocaleString()}
        </div>

        {/* change in dollers */}
        <div className={styles["CoinHeader_change"]}>
          <ChangeCircleIcon style={{ margin: 0 }} />

          <div
            className={
              changeCur < 0
                ? styles["CoinHeader_change__numberred"]
                : styles["CoinHeader_change__numbergreen"]
            }
          >
            ${Math.abs(Math.round((changeCur + Number.EPSILON) * 100) / 100)}
          </div>
        </div>
      </div>

      {/* change in percentage */}
      <div
        className={
          changePercent < 0
            ? styles["coinheader-change__red"]
            : styles["coinheader-change__green"]
        }
      >
        {Math.abs(Math.round((changePercent + Number.EPSILON) * 100) / 100)}%
      </div>
    </div>
  );
}

export default CoinHeader;
