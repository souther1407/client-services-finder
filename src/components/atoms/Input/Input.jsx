import React from "react";
import styles from "./input.module.css";
import Icon from "../Icon/Icon";
const Input = ({ id, onChange, icon, size = "100%", ...otherProps }) => {
  const handleChange = (e) => {
    onChange(id, e.target.value);
  };
  return (
    <div className={styles.container}>
      {icon && (
        <div className={styles.icon}>
          <Icon type={icon} size={"1.4rem"} color="var(--primary)" />
        </div>
      )}
      <input
        style={{ width: size }}
        className={styles.input}
        id={id}
        onChange={handleChange}
        {...otherProps}
      />
    </div>
  );
};

export default Input;
