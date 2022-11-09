import React from "react";
import { ACTIONS, useAuth } from "../../../Store/Context/AuthContext";
import styles from "./coincard2.module.css";
function CoinCard2({
  icon,
  coinName,
  symbol,
  price,
  change,
  count,
  id,
  currItem,
}) {
  const { dispatch } = useAuth();
  console.log(currItem);
  return (
    <div
      className={styles["coincard2-container"]}
      onClick={() =>
        dispatch({
          type: ACTIONS.DELETE_FROM_PORTFOLIO,
          payload: {
            currItem: id,
            price: currItem?.market_data?.current_price.usd * 10,
          },
        })
      }
    >
      <div className={styles["coincard2-card__coin"]}>
        <div className={styles["coincard2-card__image"]}>
          <img src={icon} alt="" />
        </div>
        <div className={styles["coincard2-card_name"]}>
          <h4>{coinName.toUpperCase()}</h4>
          <p>{symbol.toUpperCase()}</p>
        </div>
      </div>
      {/* //////// */}
      <div className={styles["coincard2-card__price"]}>
        <h4>US${price}</h4>
        {change < 0 ? (
          <div className={styles["coincard2-card__pricechange__textred"]}>
            {change.toFixed(2)}%
          </div>
        ) : (
          <div className={styles["coincard2-card__pricechange__textgreen"]}>
            {change.toFixed(2)}%
          </div>
        )}
      </div>
      {/* //////////// */}
      <div className={styles["coincard2-card__Holding"]}>
        <h4>1.00%</h4>
        <p>
          {count} 10 {symbol.toUpperCase()}
        </p>
      </div>
    </div>
  );
}

export default CoinCard2;
