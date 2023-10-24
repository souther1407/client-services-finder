import React, { useState } from "react";
import MultiValueSelect from "../../components/molecules/MultiValueSelect/MultiValueSelect";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./register.module.css";
import { LOCATION } from "../../utils/constants/locations";
import { SERVICES } from "../../utils/constants/services";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
const Register = () => {
  const [isInLogin, setIsInLogin] = useState(false);
  return (
    <div className={styles.register}>
      <div className={styles.title}>
        <Text type="title">{isInLogin ? "Iniciar sesión" : "Registrarse"}</Text>
      </div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {!isInLogin && (
          <Input
            id={"name"}
            icon={"user"}
            onChange={() => {}}
            placeholder="Nombre y apellido"
          />
        )}
        <Input
          icon={"phone"}
          id={"phone"}
          onChange={() => {}}
          placeholder="Número de teléfono"
        />
        <Input
          id={"password"}
          icon={"shieldLock"}
          onChange={() => {}}
          placeholder="Contraseña"
          type="password"
        />
        {!isInLogin && (
          <MultiValueSelect
            id={"professions"}
            icon={"case"}
            elements={SERVICES}
            onChange={() => {}}
            listPosition="top"
            title={"Profesión(es)"}
          />
        )}

        {!isInLogin && (
          <MultiValueSelect
            id={"locations"}
            icon={"location"}
            listPosition="top"
            elements={LOCATION}
            onChange={() => {}}
            title={"Distrito(s)"}
          />
        )}
        <section className={styles.btns}>
          <IconTextButton
            textProps={{ type: "subtitle" }}
            onClick={() => setIsInLogin(false)}
          >
            Registrarse
          </IconTextButton>
          <IconTextButton
            textProps={{ type: "subtitle" }}
            onClick={() => setIsInLogin(true)}
          >
            Iniciar sesión
          </IconTextButton>
        </section>
      </form>
    </div>
  );
};

export default Register;
