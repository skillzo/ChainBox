import React from "react";
import "./userprofileimage.css";

function UserProfileImage() {
  return (
    <div className="profilecard-container">
      <div className="profile-header">
        <img
          src="https://img.a.transfermarkt.technology/portrait/big/253677-1593437372.jpg?lm=1"
          alt=""
        />
        <div className="profilecard-name">
          <div>
            <h3>Skillz Fire</h3>
          </div>
          <div>Ape Gen</div>
        </div>
      </div>
      <div className="profilecard-details">
        <div className="detail">
          <div className="detail-head">Email:</div>
          <div className="detail-detail">SkillzFire@yahoo.com</div>
        </div>
        <div className="detail">
          <div className="detail-head">Display Name:</div>
          <div className="detail-detail">Skillzo</div>
        </div>
        <div className="detail">
          <div className="detail-head">User Name:</div>
          <div className="detail-detail">Skillz fire</div>
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
    </div>
  );
}

export default UserProfileImage;
