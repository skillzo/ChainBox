import React from "react";
import "./statcard.css";

function StatCard({
  mkCap,
  vol,
  mxSupply,
  symbol,
  ath,
  atl,
  fully_dil_mkCap,
  circulating_supply,
  total_supply,
  roi,
  currItem,
}) {
  const stats = [
    {
      name: "Market Cap",
      value: `US ${(mkCap / 1000000000).toFixed(2)}Bn`,
    },
    {
      name: "Volume 24h",
      value: `US ${(mkCap / 1000000000).toFixed(2)}Bn`,
    },
    {
      name: "Max Supply",
      value: `${(mxSupply / 100000000).toFixed(2)}Bn ${symbol}`,
    },
    {
      name: "All Time High",
      value: ath,
    },
    {
      name: "All Time Low",
      value: atl,
    },
    {
      name: "Full Diluted MkCap",
      value: `US ${(fully_dil_mkCap / 1000000000).toFixed(2)}Bn`,
    },
    {
      name: "Circulating Supply",
      value: `${(circulating_supply / 1000000000).toFixed(2)} Bn`,
    },
    {
      name: "Total Suppy",
      value: `${(total_supply / 1000000000).toFixed(2)}Bn`,
    },
    {
      name: "ROI",
      value: `${roi}%`,
    },
  ];

  return (
    <div className="grid grid-cols-2 justify-between gap-x-10 gap-y-3 my-10">
      {stats?.map((i, idx) => {
        return (
          <div key={idx}>
            <p className="font-semibold">{i.name}</p>
            <p className="text-gray-400 text-xs font-semibold">{i.value}</p>
          </div>
        );
      })}
    </div>
  );
}

export default StatCard;
