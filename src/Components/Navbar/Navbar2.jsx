import React from "react";
import "./navbar2.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
function Navbar2(props) {
  const navigate = useNavigate();
  return (
    <div className="navbar2">
      <div className="navbar2-icon" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
      </div>
      <h3>{props.pageName}</h3>
    </div>
  );
}

export default Navbar2;
