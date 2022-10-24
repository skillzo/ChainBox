import React from "react";
import "./trending.css";

function Trending({ icon, coinName, symbol }) {
  return (
    <div className="singlecoins">
      <div className="singlecoin-name">
        <img src={icon} alt="" />
        {coinName.toUpperCase()}
      </div>
      <div className="singlecoin-abb">{symbol.toUpperCase()}</div>
    </div>
  );
}

export default Trending;
