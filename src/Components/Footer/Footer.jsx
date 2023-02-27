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
      <Link className={styles.footer1} to="/">
        <HomeIcon sx={{ color: "#a2adb8", fontSize: 30 }} />
        <div> Home</div>
      </Link>
      <Link className={styles.footer1} to="/search">
        <SearchIcon sx={{ color: "#a2adb8", fontSize: 30 }} />
        <div> Search</div>
      </Link>
      <div className={styles["footer-news"]}>
        <Link className={styles.footer1} to="/news">
          <NewspaperIcon sx={{ color: "#fff" }} />
          <div>News</div>
        </Link>
      </div>
      <Link className={styles.footer1} to="/portfolio">
        <PieChartIcon sx={{ color: "#a2adb8", fontSize: 30 }} />
        <div> Portfolio</div>
      </Link>

      <Link className={styles.footer1} to="/settings">
        <SettingsIcon sx={{ color: "#a2adb8", fontSize: 30 }} />
        <div> Settings</div>
      </Link>
    </div>
  );
}

export default Footer;
