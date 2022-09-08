import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import "./footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer1">
        <HomeIcon />
        <p>Home</p>
      </div>
      <div className="footer1">
        <HomeIcon />
        <p>Search</p>
      </div>
      <div className="footer1">
        <HomeIcon />
        <p>News</p>
      </div>
      <div className="footer1">
        <HomeIcon />
        <p>Portfolio</p>
      </div>
      <div className="footer1">
        <HomeIcon />
        <p>Settings</p>
      </div>
    </div>
  );
}

export default Footer;
