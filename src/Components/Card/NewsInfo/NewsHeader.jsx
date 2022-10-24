import React from "react";
import "./newsheader.css";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate, Link } from "react-router-dom";
import { IconCheckboxes } from "../../Button/Button";

function Header2({ title, image }) {
  const navigate = useNavigate();
  return (
    <div className="newsinfo-header">
      <div className="navbar2">
        <div className="navbar2-icon" onClick={() => navigate(-1)}>
          <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
        </div>
        <div className="favorite">
          <div>
            <Link to="/search">
              <SearchIcon
                sx={{ fontSize: 22, marginRight: 0.5, color: "white" }}
              />
            </Link>
          </div>
          <div>
            <IconCheckboxes sx={{ fontSize: 25 }} />
          </div>
        </div>
      </div>
      <div className="newsinfo-image">
        <img src={image} alt="" />
      </div>
      <div className="newsinfo-title">
        <h2>{title}</h2>
      </div>
    </div>
  );
}

export default Header2;
