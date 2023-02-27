import React from "react";
import HashLoader from "react-spinners/HashLoader";
import styles from "./loading.module.css";
export default function Loading() {
  return (
    <div className={styles.loading}>
      <HashLoader color="#123783" size={150} margin="0 auto" />
    </div>
  );
}
