import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../components/atoms/Input/Input";
import Textarea from "../../components/atoms/Textarea/Textarea";
const FindAService = () => {
  const max = 6;
  const [currentSection, setCurrentSection] = useState(0);
  const [input, setInput] = useState({
    serviceType: "",
    location: "",
    description: "",
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const next = () => {
    if (currentSection === max - 1) return;
    setCurrentSection((prev) => prev + 1);
  };
  const ant = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
  };
  const handleSetServiceType = (serviceType) => {
    setInput((prev) => ({ ...prev, serviceType }));
    next();
  };
  const handleChangeInput = (id, value) =>
    setInput((prev) => ({ ...prev, [id]: value }));
  return (
    <div className={styles.findAService}>
      <div
        className={`${styles.section} ${currentSection === 0 && styles.show}`}
      >
        <Text type="title">¿Qué servicio necesitas?</Text>

        <section className={styles.services}>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Jardinería")}
          >
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Jardinería</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Tutoría")}
          >
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Tutoría</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Eléctrico")}
          >
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Eléctrico</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Limpieza")}
          >
            <Icon type={"budget"} color={"var(--light-blue)"} size={"3rem"} />
            <Text>Limpieza</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Pasear Perro")}
          >
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
            onChange={handleChangeInput}
            placeholder={"Ejemplo: La molina, Lima"}
            size="600px"
            value={input.location}
          />
        </div>
        <div className={styles.footer}>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            onClick={next}
            size="240px"
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
            id={"description"}
            onChange={handleChangeInput}
            placeholder={
              "Ejemplo: Pasear a mi perro de Lunes a viernes. Horario: 6pm-7pm"
            }
            size="600px"
            value={input.description}
          />
        </div>
        <div className={`${styles.footer} ${styles.btns}`}>
          <IconTextButton
            variant="bordered"
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={ant}
          >
            Anterior
          </IconTextButton>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={next}
          >
            Siguiente
          </IconTextButton>
        </div>
      </div>
      <div
        className={`${styles.section} ${currentSection === 3 && styles.show} ${
          styles.bordered
        }`}
      >
        <div className={styles.header}>
          <Text type="title" bold>
            ¿Cúal es tu nombre?
          </Text>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Nombre</label>
            <Input
              id="firstName"
              size="600px"
              onChange={handleChangeInput}
              value={input.firstName}
            />
          </div>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Apellido</label>
            <Input
              id="lastName"
              size="600px"
              onChange={handleChangeInput}
              value={input.lastName}
            />
          </div>
        </div>
        <div className={`${styles.footer} ${styles.btns}`}>
          <IconTextButton
            variant="bordered"
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={ant}
          >
            Anterior
          </IconTextButton>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={next}
          >
            Siguiente
          </IconTextButton>
        </div>
      </div>
      <div
        className={`${styles.section} ${currentSection === 4 && styles.show} ${
          styles.bordered
        }`}
      >
        <div className={styles.header}>
          <Text type="title" bold>
            ¡Encontramos profesionales en tu área!
          </Text>
          <Text style={{ marginBottom: "16px" }} type="subtitle" bold>
            Proyecto: {input.serviceType}
          </Text>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Número de teléfono (+51)</label>
            <Input
              id="phone"
              size="600px"
              onChange={handleChangeInput}
              value={input.phone}
            />
          </div>
          <div className={styles.inputLabel}>
            <label className={styles.label}>Email</label>
            <Input
              id="email"
              size="600px"
              onChange={handleChangeInput}
              value={input.email}
            />
          </div>
        </div>
        <div className={`${styles.footer} ${styles.btns}`}>
          <IconTextButton
            variant="bordered"
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={ant}
          >
            Anterior
          </IconTextButton>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            size="240px"
            onClick={next}
          >
            Ver profesionales
          </IconTextButton>
        </div>
      </div>
      <div
        className={`${styles.section} ${currentSection === 5 && styles.show}`}
      >
        <Text type="title">¡Encontramos a 20 profesionales en tu area!</Text>
        <section className={styles.profesionals}>
          <div className={styles.profesional}>
            <Text bold>José Whittembury</Text>
            <IconTextButton variant="bordered" size="240px" onClick={() => {}}>
              Cotizar Precio
            </IconTextButton>
          </div>
          <div className={styles.profesional}>
            <Text bold>Luis Caceres</Text>
            <IconTextButton variant="bordered" size="240px" onClick={() => {}}>
              Cotizar Precio
            </IconTextButton>
          </div>
          <div className={styles.profesional}>
            <Text bold>Eric Casanova</Text>
            <IconTextButton variant="bordered" size="240px" onClick={() => {}}>
              Cotizar Precio
            </IconTextButton>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FindAService;
