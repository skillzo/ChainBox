import React from "react";
import Navbar2 from "../../Navbar/Navbar2";
import "./settingscard.css";
function SettingsCard(props) {
  return (
    <>
      <Navbar2 pageName="Settings" />
      <div className="settingscard-container">
        <div className="settingscard">
          <p>Launch Screen</p>
          <p>Market</p>
        </div>
        <div className="settingscard">
          <p>Appearance</p>
          <div className="settingscard-appearance__container">
            <div className="settingscard-appearance">Light</div>
            <div className="settingscard-appearance">Dark</div>
            <div className="settingscard-appearance">System</div>
          </div>
        </div>
        <div className="settingscard">
          <p>Language</p>
          <p>English</p>
        </div>
      </div>
    </>
  );
}

export default SettingsCard;
