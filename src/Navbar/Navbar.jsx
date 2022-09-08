import React from "react";
import "./navbar.css"

function Navbar() {
  return (
    <div className="navbar">
      <div className="navlinks">
        <ul>
          <li>Coins</li>
          <li>Watchlist</li>
          <li>Exchanges</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
