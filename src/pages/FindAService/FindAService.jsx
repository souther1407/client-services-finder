import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../components/atoms/Input/Input";
import Textarea from "../../components/atoms/Textarea/Textarea";
const FindAService = () => {
  const max = 3;
  const [currentSection, setCurrentSection] = useState(0);

  const next = () => {
    if (currentSection === max - 1) return;
    setCurrentSection((prev) => prev + 1);
  };
  const ant = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
  };
  return (
    <div className={styles.findAService}>
      <div
        className={`${styles.section} ${currentSection === 0 && styles.show}`}
      >
        <Text type="title">¿Qué servicio necesitas?</Text>

        <section className={styles.services}>
          <div className={styles.servicesBtn} onClick={next}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardinería</Text>
          </div>
          <div className={styles.servicesBtn} onClick={next}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Tutoría</Text>
          </div>
          <div className={styles.servicesBtn} onClick={next}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Eléctrico</Text>
          </div>
          <div className={styles.servicesBtn} onClick={next}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Limpieza</Text>
          </div>
          <div className={styles.servicesBtn} onClick={next}>
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Pasear Perro</Text>
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
            size="600px"
          />
        </div>
        <div className={styles.footer}>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            onClick={next}
          >
            Siguiente
          </IconTextButton>
        </div>
      </div>
      <div
        className={`${styles.section} ${currentSection === 2 && styles.show} ${
          styles.bordered
        }`}
      >
        <div className={styles.header}>
          <Text type="title" bold>
            Descripción del trabajo
          </Text>
          <Textarea
            id={"location"}
            onChange={(id, value) => console.log(id, value)}
            placeholder={
              "Ejemplo: Pasear a mi perro de Lunes a viernes. Horario: 6pm-7pm"
            }
            size="600px"
          />
        </div>
        <div className={`${styles.footer} ${styles.btns}`}>
          <IconTextButton
            variant="bordered"
            textProps={{ type: "subtitle", bold: true }}
            onClick={ant}
          >
            Anterior
          </IconTextButton>
          <IconTextButton textProps={{ type: "subtitle", bold: true }}>
            Siguiente
          </IconTextButton>
        </div>
      </div>
    </div>
  );
};

export default FindAService;
