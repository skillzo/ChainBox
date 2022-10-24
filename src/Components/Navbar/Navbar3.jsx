import React from "react";
import "./navbar3.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { IconCheckboxes } from "../Button/Button";
function Navbar3({ id }) {
  const navigate = useNavigate();
  return (
    <div className="navbar3">
      <div className="navbar3-icon" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
      </div>
      <div className="favorite">
        <div>
          <SearchIcon sx={{ fontSize: 20 }} />
        </div>
        <div
        // onClick={() =>
        //   dispatch({
        //     type: ACTIONS.ADD_TO_WATCHLIST,
        //     payload: { currItem: id },
        //   })
        // }
        >
          <IconCheckboxes sx={{ fontSize: 25 }} />
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
