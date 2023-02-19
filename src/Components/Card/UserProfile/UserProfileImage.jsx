import React from "react";
import { useAuth } from "../../../Store/AuthContext";
import Button from "../../Button/Button";
import "./userprofileimage.css";

function UserProfileImage() {
  const { logOut, currentUser } = useAuth();
  return (
    <div className="profilecard-container">
      <div className="profile-header">
        <img
          src={
            currentUser?.photoURL ||
            "https://img.a.transfermarkt.technology/portrait/big/253677-1593437372.jpg?lm=1"
          }
          alt=""
        />
        <div className="profilecard-name">
          <div>
            <h3>{currentUser?.displayName || "Skillzo"}</h3>
          </div>
          <div>Investor</div>
        </div>
      </div>
      <div className="profilecard-details">
        <div className="detail">
          <div className="detail-head">Email:</div>
          <div className="detail-detail">{currentUser?.email}</div>
        </div>
        <div className="detail">
          <div className="detail-head">Display Name:</div>
          <div className="detail-detail">
            {currentUser?.displayName || "Skillzo"}
          </div>
        </div>
        <div className="detail">
          <div className="detail-head">User Name:</div>
          <div className="detail-detail">Skillz_fire</div>
        </div>
        <div className="detail">
          <div className="detail-head">Password:</div>
          <div className="detail-detail">********</div>
        </div>
        <div className="detail">
          <div className="detail-head">DOB:</div>
          <div className="detail-detail">11/11/11</div>
        </div>
      </div>
      <div className="userprofile-button" onClick={logOut}>
        <Button bgColor={"black"} btnColor={"#f4f5f6"}>
          Sign Out
        </Button>
      </div>
    </div>
  );
}

export default UserProfileImage;
