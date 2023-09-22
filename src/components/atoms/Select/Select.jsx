import React, { useState } from "react";
import styles from "./select.module.css";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
const Select = ({
  elements = [],
  id,
  size = "100%",
  value,
  title,
  onChange,
}) => {
  const [show, setShow] = useState(false);
  const handleChange = (value) => {
    onChange(id, value);
    setShow(false);
  };
  return (
    <div className={styles.select} style={{ width: size }}>
      <div className={styles.header} onClick={() => setShow((prev) => !prev)}>
        <Text>{value || title}</Text>
        <Icon type={"upDownArrows"} size={"1rem"} />
      </div>
      {show && (
        <div className={styles.elementsList}>
          {elements.map((e) => (
            <Text onClick={() => handleChange(e)}>{e}</Text>
          ))}
        </div>
      )}
    </div>
  );
};

export default Select;
