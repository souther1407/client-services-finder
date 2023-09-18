import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
const FindAService = () => {
  return (
    <div className={styles.findAService}>
      <div className={styles.section}>
        <Text type="title">¿Qué servicio necesitas?</Text>
        <section className={styles.services}>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindAService;
