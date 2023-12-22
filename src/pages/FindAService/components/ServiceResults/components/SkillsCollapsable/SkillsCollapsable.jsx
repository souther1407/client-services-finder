import React from "react";
import Text from "../../../../../../components/atoms/Text/Text";
import styles from "./skillsCollapsable.module.css";
const limitCharacter = (str, limit) => {
  if (!str) return "";
  return str.substring(0, limit) + "...";
};
const SkillsCollapsable = ({ skills }) => {
  return (
    <div>
      <Text>
        {limitCharacter(skills.join(","), 15)}
        {skills.length > 0 && <span className={styles.seeMore}>Ver mas</span>}
      </Text>
    </div>
  );
};

export default SkillsCollapsable;
