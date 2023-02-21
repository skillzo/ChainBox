import React from "react";
import styles from "./chartjs.module.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { useAuth } from "../../../../Store/AuthContext";

ChartJS.register(ArcElement, Tooltip, Legend);
export default function ChartJs() {
  const { state } = useAuth();

  const portfolioPrices = state.portfolio.map((coin) => {
    return coin.market_data.current_price.usd;
  });
  console.log(portfolioPrices);
  const data = {
    datasets: [
      {
        label: "# of Votes",
        data: portfolioPrices,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={styles["chartjs_container"]}>
      <Doughnut data={data} />
    </div>
  );
}
