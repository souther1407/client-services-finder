import React from "react";
import styles from "./textarea.module.css";
const Textarea = ({ id, onChange, size = "100%", ...otherProps }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <textarea
      style={{ width: size }}
      id={id}
      className={styles.textarea}
      onChange={handleChange}
      {...otherProps}
    ></textarea>
  );
};

export default Textarea;
