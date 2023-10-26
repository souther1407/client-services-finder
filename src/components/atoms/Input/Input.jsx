import React from "react";
import styles from "./input.module.css";
import Icon from "../Icon/Icon";
const Input = ({
  id,
  onChange,
  onError,
  variant = "primary",
  icon,
  size = "100%",
  validators = [],
  ...otherProps
}) => {
  const handleChange = (e) => {
    handleError(e.target.value);
    onChange(id, e.target.value);
  };

  const handleError = (value) => {
    let error = "";
    for (const validator of validators) {
      error = validator(value);
    }
    onError(id, error);
  };

  return (
    <div className={`${styles[variant]} ${styles.container}`}>
      {icon && (
        <div className={styles.icon}>
          <Icon type={icon} size={"1.4rem"} />
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
