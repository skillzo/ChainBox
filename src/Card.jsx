import React from "react";
import icon from "../../Assest/Icon.png";
import "./card.css";

function Card() {
  return (
    <div className="coin-container">
      <div className="coin-card">
        <div className="coin-number">1</div>
        <div className="coin-logo">
          <img src={icon} alt="" />

          <div className="coin-name">
            <div>Bitcoin</div>
            <div className="market-cap">359.17Bn</div>
          </div>
        </div>
        <div className="coin-Price">$18,000.00</div>
        <div className="coin-change">+2.01%</div>
        <div className="coin-holding">12BTC</div>
      </div>
    </div>
  );
}

export default Card;
