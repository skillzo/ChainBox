import React from "react";
import "./coinheader.css";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

function CoinHeader({ coinName, price, changePercent, changeCur }) {
  return (
    <>
      <div className="coinheader-container">
        <div className="coinheader-main">
          <div className="coinheader-name">{coinName}</div>
          <div className="coinheader-price">
            <h2>US ${price}</h2>
          </div>
          <div className="CoinHeader_change">
            <div className="CoinHeader_change__icon">
              <ChangeCircleIcon />
            </div>
            {changeCur < 0 ? (
              <div className="CoinHeader_change__changenumber textred">
                {" "}
                $
                {Math.abs(Math.round((changeCur + Number.EPSILON) * 100) / 100)}
              </div>
            ) : (
              <div className="CoinHeader_change__changenumber textgreen">
                {" "}
                ${Math.round((changeCur + Number.EPSILON) * 100) / 100}
              </div>
            )}
          </div>
        </div>
        <div className="coinheader-change red">
          {Math.abs(Math.round((changePercent + Number.EPSILON) * 100) / 100)}%
        </div>
      </div>
    </>
  );
}

export default CoinHeader;
