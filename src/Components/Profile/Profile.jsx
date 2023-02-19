import React from "react";
import "./profile.css";
import { Link } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useAuth } from "../../Store/AuthContext";

function Profile() {
  const { currentUser } = useAuth();
  return (
    <div className="profile-container">
      <Link to="/profile">
        <div className="profile-name">
          <img
            src={
              currentUser?.photoURL ||
              "https://img.a.transfermarkt.technology/portrait/big/253677-1593437372.jpg?lm=1"
            }
            alt=""
          />
          {currentUser?.displayName || "Skillzo"}
        </div>
      </Link>
      <Link to="/">
        <div className="profile-logo">
          <p>
            Chain
            <span>
              <SmartToyIcon sx={{ fontSize: 20, color: "yellow" }} />
              Box
            </span>
          </p>
        </div>
      </Link>

      <div className="profile-search">
        <Link to="/search">
          <SearchIcon sx={{ color: "#fff" }} />
        </Link>
      </div>
    </div>
  );
}

export default Profile;
