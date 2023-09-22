import React from "react";
import styles from "./spinner.module.css";
const Spinner = ({ size }) => {
  return (
    <div class={styles.ldsRoller}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
