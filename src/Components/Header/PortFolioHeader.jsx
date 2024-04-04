import React from "react";
import { useAuth } from "../../Store/AuthContext";
import styles from "./portfolioheader.module.css";

function PortFolioHeader() {
  const { state } = useAuth();
  return (
    <>
      <div className={styles["portfolio-header__container"]}>
        <div className={styles["portfolio-header__amount"]}>
          <p>Current Balance</p>
          <h1 className="my-3">US${state.total?.toFixed(2) || 0}</h1>
          <div className={styles["portfolio-header__amountChange"]}>
            +US$39,400.70(24h)
          </div>
        </div>
        <div className={styles["portfolio-header__change green "]}>1,529%</div>
      </div>
    </>
  );
}

export default PortFolioHeader;
