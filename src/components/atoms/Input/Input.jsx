import React from "react";
import styles from "./input.module.css";
const Input = ({ id, onChange, size = "100%", ...otherProps }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <input
      style={{ width: size }}
      className={styles.input}
      id={id}
      onChange={handleChange}
      {...otherProps}
    />
  );
};

export default Input;
