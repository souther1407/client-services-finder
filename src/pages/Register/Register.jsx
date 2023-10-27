import React, { useState } from "react";
import MultiValueSelect from "../../components/molecules/MultiValueSelect/MultiValueSelect";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./register.module.css";
import { LOCATION } from "../../utils/constants/locations";
import { SERVICES } from "../../utils/constants/services";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import { isEmpty, isPhoneIncorrect } from "../../utils/validators/validators";
import { create } from "../../services/professionalsApi";
import { login } from "../../services/auth";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
const Register = () => {
  const [isInLogin, setIsInLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    password: "",
    professions: [],
    locations: [],
  });
  const [errors, setErrors] = useState({
    name: "Ingrese un valor por favor",
    phone: "Ingrese un valor por favor",
    password: "Ingrese un valor por favor",
    professions: "",
    locations: "",
  });

  const clearInput = () => {
    setInput({
      name: "",
      phone: "",
      password: "",
      professions: [],
      locations: [],
    });
  };

  const handleErrors = (id, value) => {
    setErrors((prev) => ({ ...prev, [id]: value }));
  };
  const handleChange = (id, value) => {
    setInput((prev) => ({ ...prev, [id]: value }));
  };

  const getErrors = () => {
    if (isInLogin)
      return [errors.phone, errors.password].filter((e) => e.length > 0);
    return Object.values(errors).filter((e) => e.length > 0);
  };

  const handleLogin = async () => {
    if (!isInLogin) {
      return setIsInLogin(true);
    }
    const errorsList = getErrors();
    console.log(errors);
    if (errorsList.length > 0) return alert(errorsList[errorsList.length - 1]);
    try {
      setLoading(true);
      await login({ phone: input.phone, password: input.password });
      alert("logeado!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleRegister = async () => {
    if (isInLogin) {
      return setIsInLogin(false);
    }
    const errorsList = getErrors();
    if (errorsList.length > 0) return alert(errorsList[errorsList.length - 1]);
    try {
      setLoading(true);
      await create(input);
      alert("Creado!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.register}>
      {loading && <LoadingScreen />}
      <div className={styles.title}>
        <Text type="title">{isInLogin ? "Iniciar sesión" : "Registrarse"}</Text>
      </div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        {!isInLogin && (
          <Input
            id={"name"}
            icon={"user"}
            variant="secondary"
            onChange={handleChange}
            validators={[isEmpty]}
            onError={handleErrors}
            placeholder="Nombre y apellido"
          />
        )}
        <Input
          icon={"phone"}
          id={"phone"}
          onChange={handleChange}
          validators={[isEmpty]}
          onError={handleErrors}
          variant="secondary"
          placeholder="Número de teléfono"
        />
        <Input
          id={"password"}
          variant="secondary"
          icon={"shieldLock"}
          onChange={handleChange}
          validators={[isEmpty]}
          onError={handleErrors}
          placeholder="Contraseña"
          type="password"
        />
        {!isInLogin && (
          <MultiValueSelect
            id={"professions"}
            icon={"case"}
            elements={SERVICES}
            variant="secondary"
            onChange={handleChange}
            listPosition="top"
            title={"Profesión(es)"}
          />
        )}

        {!isInLogin && (
          <MultiValueSelect
            id={"locations"}
            icon={"location"}
            listPosition="top"
            variant="secondary"
            elements={LOCATION}
            onChange={handleChange}
            title={"Distrito(s)"}
          />
        )}
        <section className={styles.btns}>
          <IconTextButton
            textProps={{ type: "subtitle" }}
            onClick={handleRegister}
            colorVariant={isInLogin ? "secondary" : "primary"}
          >
            Registrarse
          </IconTextButton>
          <IconTextButton
            colorVariant={!isInLogin ? "secondary" : "primary"}
            textProps={{ type: "subtitle" }}
            onClick={handleLogin}
          >
            Iniciar sesión
          </IconTextButton>
        </section>
      </form>
    </div>
  );
};

export default Register;
