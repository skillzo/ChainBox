import React, { useEffect, useState } from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import PieChartIcon from "@mui/icons-material/PieChart";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

function Footer() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(100);

  function navbarHandler() {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    }
  }

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", navbarHandler);
      return () => {
        window.removeEventListener("scroll", navbarHandler);
      };
    }
    // eslint-disable-next-line
  }, [lastScrollY]);
  return (
    <div
      className={`${styles["footer-container"]} ${
        !showNavbar && styles["footer-scroll"]
      }`}
    >
      <Link to="/">
        <div className={styles.footer1}>
          <HomeIcon sx={{ color: "#a2adb8", fontSize: 27 }} />
          Home
        </div>
      </Link>
      <Link to="/search">
        {" "}
        <div className={styles.footer1}>
          <SearchIcon sx={{ color: "#a2adb8", fontSize: 25 }} />
          Search
        </div>
      </Link>
      <div className={styles["footer-news"]}>
        <Link to="/news">
          <div className={styles.footer1}>
            <NewspaperIcon sx={{ color: "#fff" }} />
            <p>News</p>
          </div>
        </Link>
      </div>
      <Link to="/portfolio">
        <div className={styles.footer1}>
          <PieChartIcon sx={{ color: "#a2adb8", fontSize: 25 }} />
          Portfolio
        </div>
      </Link>

      <Link to="/settings">
        <div className={styles.footer1}>
          <SettingsIcon sx={{ color: "#a2adb8", fontSize: 25 }} />
          Settings
        </div>
      </Link>
    </div>
  );
}

export default Footer;
