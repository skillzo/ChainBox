import React from "react";
import "./portfolioheader.css";

function PortFolioHeader() {
  return (
    <>
      <div className="portfolio-header__container">
        <div className="portfolio-header__amount">
          <p>Current Balance</p>
          <h1>US$336,145.58</h1>
          <div className="portfolio-header__amountChange">
            +US$39,400.70(24h)
          </div>
        </div>
        <div className="portfolio-header__change green ">1,529%</div>
      </div>
    </>
  );
}

export default PortFolioHeader;
