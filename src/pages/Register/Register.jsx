import React, { useState } from "react";
import MultiValueSelect from "../../components/molecules/MultiValueSelect/MultiValueSelect";
import Text from "../../components/atoms/Text/Text";
import Input from "../../components/atoms/Input/Input";
import styles from "./register.module.css";
import Textarea from "../../components/atoms/Textarea/Textarea";
import { LOCATION } from "../../utils/constants/locations";
import { SERVICES } from "../../utils/constants/services";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import { isEmpty } from "../../utils/validators/validators";
import { create } from "../../services/professionalsApi";
import { login } from "../../services/auth";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import ListInput from "../../components/molecules/ListInput/ListInput";
import { useNavigate } from "react-router-dom";
import { PROFILE } from "../../utils/constants/routes";
const Register = () => {
  const [isInLogin, setIsInLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [input, setInput] = useState({
    name: "",
    phone: "",
    password: "",
    professions: [],
    locations: [],
    description: "",
    skills: [],
  });
  const navigate = useNavigate();
  const [errors, setErrors] = useState({
    name: "Ingrese un valor por favor",
    phone: "Ingrese un valor por favor",
    password: "Ingrese un valor por favor",
    professions: "Ingrese un valor por favor",
    locations: "Ingrese un valor por favor",
  });

  const clearInput = () => {
    setInput({
      name: "",
      phone: "",
      password: "",
      description: "",
      professions: [],
      locations: [],
      skills: [],
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
    if (errorsList.length > 0) return alert(errorsList[errorsList.length - 1]);
    try {
      setLoading(true);
      const { token } = await login({
        phone: input.phone,
        password: input.password,
      });
      localStorage.setItem("token", token);
      alert("logeado!");
      navigate(PROFILE);
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
      <div className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <div className={styles.fields}>
          <div className={styles.column}>
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
                onError={handleErrors}
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
                onError={handleErrors}
                onChange={handleChange}
                title={"Distrito(s)"}
              />
            )}
          </div>
          {!isInLogin && (
            <div className={styles.column}>
              <Textarea
                id={"description"}
                placeholder={"Descripción"}
                onChange={handleChange}
              />
              <ListInput
                id="skills"
                values={input.skills}
                onEnterValue={handleChange}
              />
            </div>
          )}
        </div>

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
      </div>
    </div>
  );
};

export default Register;
