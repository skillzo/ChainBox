import React from "react";
import styles from "./chartcard.module.css";
import { AdvancedChart } from "react-tradingview-embed";

function ChartCard(props) {
  return (
    <>
      <div className={styles["chart-container"]}>
        <AdvancedChart
          widgetProps={{
            theme: "light",
            height: "600px",
            symbol: `${props.sSymbol}USD`,
            toolbar_bg: "#f2f5f8",
            hide_side_toolbar: true,
            allow_symbol_change: false,
          }}
        />
      </div>
    </>
  );
}

export default ChartCard;
