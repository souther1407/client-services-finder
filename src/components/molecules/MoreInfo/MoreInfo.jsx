import React from "react";
import styles from "./moreInfo.module.css";
import Text from "../../atoms/Text/Text";
const MoreInfo = ({ children, img, text }) => {
  return (
    <div className={styles.moreInfo}>
      {children}
      <div className={styles.content}>
        {img && <img src={img} />}
        <Text>{text}</Text>
      </div>
    </div>
  );
};

export default MoreInfo;
