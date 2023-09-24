import React, { useState } from "react";
import styles from "./select.module.css";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
const Select = ({
  elements = [],
  id,
  size = "100%",
  value,
  title,
  onChange,
  onClear = () => {},
}) => {
  const [show, setShow] = useState(false);
  const handleChange = (value) => {
    onChange(id, value);
    setShow(false);
  };
  const handleClear = (e) => {
    onClear(id);
    setShow(false);
    e.stopPropagation();
  };
  return (
    <div className={styles.select} style={{ width: size }}>
      <div className={styles.header} onClick={(e) => setShow((prev) => !prev)}>
        <Text>{value || title}</Text>
        <div className={styles.btns}>
          {value && <IconButton icon={"close"} onClick={handleClear} />}
          <Icon type={"upDownArrows"} size={"1rem"} />
        </div>
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
