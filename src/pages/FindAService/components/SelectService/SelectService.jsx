import React from "react";
import Text from "../../../../components/atoms/Text/Text";
import Icon from "../../../../components/atoms/Icon/Icon";
import { SERVICES } from "../../../../utils/constants/services";
import styles from "./selectService.module.css";
const SelectService = ({ onSelectService }) => {
  return (
    <div>
      {" "}
      <Text type="title" textAlign="center">
        ¿Qué servicio necesitas?
      </Text>
      <section className={styles.services}>
        {SERVICES.map((s) => (
          <div
            className={styles.servicesBtn}
            onClick={() => onSelectService(s)}
          >
            <Icon type={s} color={"var(--light-blue)"} size={"3rem"} />
            <Text>{s}</Text>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SelectService;
