import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./iconTextButton.module.css";
const IconTextButton = ({
  variant = "full",
  size = "auto",
  textProps,
  iconProps,
  onClick,
  children,
}) => {
  return (
    <button
      style={{ width: size }}
      className={`${styles.iconTextButton} ${styles[variant]}`}
      onClick={onClick}
    >
      <Text {...textProps}>{children}</Text>
    </button>
  );
};

export default IconTextButton;
