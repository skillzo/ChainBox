import React from "react";
import "./profile.css";
import icon4 from "../../Assest/Icon4.png";

function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-name">
        <img src={icon4} alt="" />
        <p>Skillzo</p>
      </div>
      <div className="profile-logo">
        <p>
          Chain<span>Box</span>
        </p>
      </div>
      <div className="profile-search">
        search icon 
      </div>
    </div>
  );
}

export default Profile;
