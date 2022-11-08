import React from "react";
import "./navbar3.css";
import { useNavigate } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import SearchIcon from "@mui/icons-material/Search";
import { IconCheckboxes } from "../Button/Button";
import { useAuth, ACTIONS } from "../../Store/Context/AuthContext";
function Navbar3({ currItem }) {
  const { dispatch, checked, setChecked } = useAuth();
  const navigate = useNavigate();

  const watchListHandler = (e) => {
    console.log(checked, "changed");
    setChecked(e.target.checked);
    if (checked) {
      dispatch({
        type: ACTIONS.ADD_TO_WATCHLIST,
        payload: { currItem: currItem },
      });
    } else {
      dispatch({
        type: ACTIONS.DELETE_FROM_WATCHLIST,
        payload: { currItem: currItem.id },
      });
    }
  };

  return (
    <div className="navbar3">
      <div className="navbar3-icon" onClick={() => navigate(-1)}>
        <ArrowBackIosNewIcon sx={{ fontSize: 20 }} />
      </div>
      <div className="favorite">
        <div>
          <SearchIcon sx={{ fontSize: 20 }} />
        </div>
        <div>
          <IconCheckboxes
            sx={{ fontSize: 25 }}
            watchListHandler={watchListHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar3;
