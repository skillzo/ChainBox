import React from "react";
import "./filter.css";

function Filter() {
  return (
    <div className="filter-container">
      <div className="filter1">
        <div className="price-in">
          <p>BTC</p>
        </div>
        <div className="price-in">
          <p>1hr%</p>
        </div>
        <div className="price-in">
          <p>Top 100</p>
        </div>
      </div>

      {/* /////filter 2///////// */}

      <div className="filter2">
        <div className="name-filter">
          <p>No</p>
        </div>
        <div className="name-filter">
          <p>Name</p>
        </div>
        <div className="name-filter">
          <p>Price</p>
        </div>
        <div className="name-filter">
          <p>Change</p>
        </div>
        <div className="name-filter">
          <p>Holdings</p>
        </div>
      </div>
    </div>
  );
}

export default Filter;
