import React, { useRef, useState } from "react";
import styles from "./select.module.css";
import Icon from "../Icon/Icon";
import Text from "../Text/Text";
import IconButton from "../../molecules/IconButton/IconButton";
const Select = ({
  elements = [],
  id,
  size = "100%",
  value,
  variant = "primary",
  icon,
  title,
  listPosition = "bottom",
  onChange,
  onClear = () => {},
}) => {
  const [show, setShow] = useState(false);
  const btn = useRef();
  const handleChange = (value) => {
    onChange(id, value);
    setShow(false);
  };
  const handleClear = (e) => {
    onClear(id);
    setShow(false);
    e.stopPropagation();
  };
  const handleClick = () => {
    setShow((prev) => !prev);
    btn.current.focus();
  };
  const handleCloseOnBlur = (e) => {
    setShow(false);
  };
  return (
    <a
      className={`${styles[variant]} ${styles.select}`}
      style={{ width: size }}
      href="#"
      onBlur={handleCloseOnBlur}
    >
      <div className={styles.header} onClick={handleClick}>
        <div className={styles.placeholder}>
          {icon && (
            <div className={styles.icon}>
              <Icon size={"1.4rem"} type={icon} />
            </div>
          )}
          <Text color={!value && "soft"} bold>
            {value || title}
          </Text>
        </div>
        {/*  <a
          ref={btn}
          style={{ width: "0px", height: "0px" }}
          href="#"
          onBlur={handleCloseOnBlur}
        /> */}
        <div className={styles.btns}>
          {value && <IconButton icon={"close"} onClick={handleClear} />}
          <Icon type={"upDownArrows"} size={"1rem"} />
        </div>
      </div>
      {show && (
        <div className={`${styles.elementsList} ${styles[listPosition]}`}>
          {elements.map((e) => (
            <Text onClick={() => handleChange(e)}>{e}</Text>
          ))}
        </div>
      )}
    </a>
  );
};

export default Select;
