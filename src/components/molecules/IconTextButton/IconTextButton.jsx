import React from "react";
import Text from "../../atoms/Text/Text";
import styles from "./iconTextButton.module.css";
import Icon from "../../atoms/Icon/Icon";
const IconTextButton = ({
  variant = "full",
  size = "auto",
  textProps,
  colorVariant = "primary",
  iconProps,
  onClick,
  children,
  ...otherProps
}) => {
  return (
    <button
      style={{ width: size }}
      className={`${styles[colorVariant]} ${styles.iconTextButton} ${styles[variant]}`}
      onClick={onClick}
      {...otherProps}
    >
      <Text {...textProps}>{children}</Text>
      {iconProps?.type && <Icon {...iconProps} />}
    </button>
  );
};

export default IconTextButton;
