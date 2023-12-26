import React from "react";
import Text from "../../../../../../components/atoms/Text/Text";
import styles from "./skillsCollapsable.module.css";
const limitCharacter = (str, limit) => {
  if (!str) return "";
  return str.substring(0, limit);
};
const SkillsCollapsable = ({ skills }) => {
  return (
    <div className={styles.skills}>
      <Text>{limitCharacter(skills.join(","), 15)}</Text>
      {skills.length > 0 && <span className={styles.seeMore}>Ver mas...</span>}
    </div>
  );
};

export default SkillsCollapsable;
