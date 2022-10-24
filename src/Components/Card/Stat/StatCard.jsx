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
  return (
    <>
      <div className="stat-container">
        <div className="stat1">
          <div className="stat-info">
            <h4>Market Cap</h4>
            <p>US ${(mkCap / 1000000000).toFixed(2)}Bn</p>
          </div>
          <div className="stat-info">
            <h4>Volume 24h</h4>
            <p>US ${(vol / 1000000000).toFixed(2)}Bn</p>
          </div>
          <div className="stat-info">
            <h4>Max Supply</h4>
            <p>
              {(mxSupply / 100000000).toFixed(2)}Bn {symbol}
            </p>
          </div>
          <div className="stat-info">
            <h4>All Time High</h4>
            <p>US ${ath}</p>
          </div>
          <div className="stat-info">
            <h4>All Time Low</h4>
            <p>US ${atl}</p>
          </div>
        </div>
        <div className="stat2">
          <div className="stat-info">
            <h4>Full Diluted MkCap</h4>
            <p>US ${(fully_dil_mkCap / 1000000000).toFixed(2)} Bn</p>
          </div>
          <div className="stat-info">
            <h4>Circulating Supply</h4>
            <p>{(circulating_supply / 1000000000).toFixed(2)} Bn</p>
          </div>
          <div className="stat-info">
            <h4>Full Diluted MkCap</h4>
            <p>US $367.506 Bn</p>
          </div>
          <div className="stat-info">
            <h4>Total Suppy</h4>
            <p>{(total_supply / 1000000000).toFixed(2)}Bn</p>
          </div>
          <div className="stat-info">
            <h4>ROI</h4>
            <p>{roi} %</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default StatCard;
