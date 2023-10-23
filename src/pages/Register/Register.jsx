import React from "react";
import MultiValueSelect from "../../components/molecules/MultiValueSelect/MultiValueSelect";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./register.module.css";
import { LOCATION } from "../../utils/constants/locations";
import { SERVICES } from "../../utils/constants/services";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
const Register = () => {
  return (
    <div className={styles.register}>
      <div className={styles.title}>
        <Text type="title">Registrarse</Text>
      </div>
      <form className={styles.form}>
        <Input
          id={"name"}
          onChange={() => {}}
          placeholder="Nombre y apellido"
        />
        <Input
          id={"phone"}
          onChange={() => {}}
          placeholder="Número de teléfono"
        />
        <Input id={"password"} onChange={() => {}} placeholder="Contraseña" />
        <MultiValueSelect
          id={"professions"}
          elements={SERVICES}
          onChange={() => {}}
          listPosition="top"
          title={"Profesión(es)"}
        />
        <MultiValueSelect
          id={"locations"}
          listPosition="top"
          elements={LOCATION}
          onChange={() => {}}
          title={"Distrito(s)"}
        />
        <section className={styles.btns}>
          <IconTextButton textProps={{ type: "subtitle" }}>
            Registrarse
          </IconTextButton>
          <IconTextButton textProps={{ type: "subtitle" }}>
            Iniciar sesión
          </IconTextButton>
        </section>
      </form>
    </div>
  );
};

export default Register;
