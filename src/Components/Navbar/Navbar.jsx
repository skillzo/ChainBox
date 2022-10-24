import React from "react";
import styles from "./navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.navlinks}>
        <ul>
          <Link to="/">
            <li>Coins</li>
          </Link>
          <Link to="/watchlist">
            <li>Watchlist</li>
          </Link>
          <Link to="/exchange">
            <li>Exchanges</li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
