import React from "react";
import styles from "./checkbox.module.css";
const Checkbox = ({ id, onChange, ...otherProps }) => {
  return (
    <input
      type="checkbox"
      onClick={(e) => onChange(id, e.target.checked)}
      className={styles.checkbox}
      {...otherProps}
    />
  );
};

export default Checkbox;
