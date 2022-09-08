import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsIcon from "@mui/icons-material/Settings";
import PieChartIcon from "@mui/icons-material/PieChart";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer1">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="footer1">
        <SearchIcon />
        <p>Search</p>
      </div>
      <div className="footer1">
        <NewspaperIcon />
        <p>News</p>
      </div>
      <div className="footer1">
        <PieChartIcon />
        <p>Portfolio</p>
      </div>
      <div className="footer1">
        <SettingsIcon />
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Footer;
