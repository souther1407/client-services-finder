import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../components/atoms/Input/Input";
const FindAService = () => {
  const [currentSection, setCurrentSection] = useState(1);
  return (
    <div className={styles.findAService}>
      <div
        className={`${styles.section} ${currentSection === 0 && styles.show}`}
      >
        <Text type="title">¿Qué servicio necesitas?</Text>

        <section className={styles.services}>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
          <div className={styles.servicesBtn}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardineria</Text>
          </div>
        </section>
      </div>
      <div
        className={`${styles.section} ${currentSection === 1 && styles.show} ${
          styles.bordered
        }`}
      >
        <div className={styles.header}>
          <Text type="title" bold>
            Ingresa tu ubicación
          </Text>
          <Input
            id={"location"}
            onChange={(id, value) => console.log(id, value)}
            placeholder={"Ejemplo: La molina, Lima"}
            size="450px"
          />
        </div>
        <div className={styles.footer}>
          <IconTextButton textProps={{ type: "subtitle", bold: true }}>
            Siguiente
          </IconTextButton>
        </div>
      </div>
    </div>
  );
};

export default FindAService;
