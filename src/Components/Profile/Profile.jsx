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
      <Link to="/profile" className="profile-name">
        <img
          src={
            currentUser?.photoURL ||
            "https://img.a.transfermarkt.technology/portrait/big/253677-1593437372.jpg?lm=1"
          }
          alt="userProfile"
        />
        {currentUser?.displayName || "Skillzo"}
      </Link>

      <Link to="/" className="profile-logo">
        <p>
          Chain
          <span>
            <SmartToyIcon sx={{ fontSize: 20, color: "yellow" }} />
            Box
          </span>
        </p>
      </Link>

      <Link to="/search" className="profile-search">
        <SearchIcon sx={{ color: "#fff" }} />
      </Link>
    </div>
  );
}

export default Profile;
