import React from "react";
import styles from "./login.module.css";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useAuth } from "../../Store/Context/AuthContext";

export default function Login() {
  const { logInWithGoogle, loginError } = useAuth();
  return (
    <div className={styles["login-container"]} onClick={logInWithGoogle}>
      <div className={styles["profile-logo"]}>
        <p>
          Chain
          <span>
            <SmartToyIcon sx={{ fontSize: 20, color: "yellow" }} />
            Box
          </span>
        </p>
      </div>
      <div className={styles["login-gif"]}>
        <img
          src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif"
          alt=""
        />
      </div>
      <h3>Sign In with Google</h3>
      <button type="button" className={styles["login-with-google-btn"]}>
        Sign in with Google
      </button>
      {loginError && <p className={styles.loginError}>{loginError}</p>}
    </div>
  );
}
