import React from "react";
import styles from "./loadingScreen.module.css";
import Spinner from "../../atoms/Spinner/Spinner";
const LoadingScreen = () => {
  return (
    <div className={styles.loadingScreen}>
      <Spinner />
    </div>
  );
};

export default LoadingScreen;
