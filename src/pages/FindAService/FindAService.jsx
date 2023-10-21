import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
import IconButton from "../../components/molecules/IconButton/IconButton";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Input from "../../components/atoms/Input/Input";
import Textarea from "../../components/atoms/Textarea/Textarea";
import Select from "../../components/atoms/Select/Select";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { getByLocationAndType } from "../../services/professionalsApi";
import { LOCATION } from "../../utils/constants/locations";
import { create } from "../../services/serviceRequest.js";
import MoreInfo from "../../components/molecules/MoreInfo/MoreInfo";
const FindAService = () => {
  const max = 6;
  const [currentSection, setCurrentSection] = useState(0);
  const [input, setInput] = useState({
    type: "",
    location: "",
  });
  const [professionals, setProfessionals] = useState([]);
  const [loading, setLoading] = useState(false);

  const next = () => {
    if (currentSection === max - 1) return;
    setCurrentSection((prev) => prev + 1);
  };
  const ant = () => {
    if (currentSection === 0) return;
    setCurrentSection((prev) => prev - 1);
  };
  const handleSetServiceType = (type) => {
    setInput((prev) => ({ ...prev, type }));
    next();
  };
  const handleChangeInput = (id, value) =>
    setInput((prev) => ({ ...prev, [id]: value }));

  const resetForm = () => {
    setInput({
      description: "",
      email: "",
      firstName: "",
      lastName: "",
      location: "",
      phone: "",
      serviceType: "",
    });
    setCurrentSection(0);
  };

  const handleFindProfessionals = async () => {
    try {
      setLoading(true);
      const professionals = await getByLocationAndType(
        input.location,
        input.type
      );
      setProfessionals(professionals);
      next();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  const handleCotize = async (professionalPhoneNumbers) => {
    try {
      /* setLoading(true); */
      /* await create({ ...input, professionalPhoneNumbers }); */
      const link = document.createElement("a");
      link.setAttribute(
        "href",
        `whatsapp://send?phone=${professionalPhoneNumbers}&text=${encodeURIComponent(
          "Hola en que puedo ayudarte?"
        )}`
      );
      link.setAttribute("target", "_blank");
      link.click();
    } catch (error) {
      alert(error.message);
    } finally {
      /*  setLoading(false); */
    }
  };
  const handleCotizeAll = async () => {
    const phoneNumbers = professionals.map((p) => p.phone);
    handleCotize(phoneNumbers);
  };
  return (
    <div className={styles.findAService}>
      {loading && <LoadingScreen />}
      <nav className={styles.nav}>
        {currentSection !== 0 && (
          <IconButton
            icon={"home"}
            size={"2.5rem"}
            color={"var(--primary)"}
            onClick={resetForm}
          />
        )}
      </nav>
      <div
        className={`${styles.section} ${currentSection === 0 && styles.show}`}
      >
        <Text type="title">¿Qué servicio necesitas?</Text>

        <section className={styles.services}>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Jardinería")}
          >
            <Icon
              type={"jardineriaIcono"}
              color={"var(--light-blue)"}
              size={"3rem"}
            />
            <Text>Jardinería</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Tutoría")}
          >
            <Icon
              type={"tutoriaIcono"}
              color={"var(--light-blue)"}
              size={"3rem"}
            />
            <Text>Tutoría</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Eléctrico")}
          >
            <Icon
              type={"electricistaIcono"}
              color={"var(--light-blue)"}
              size={"3rem"}
            />
            <Text>Eléctrico</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Limpieza")}
          >
            <Icon
              type={"limpiezaIcono"}
              color={"var(--light-blue)"}
              size={"3rem"}
            />
            <Text>Limpieza</Text>
          </div>
          <div
            className={styles.servicesBtn}
            onClick={() => handleSetServiceType("Pasear Perro")}
          >
            <Icon
              type={"paseadorIcono"}
              color={"var(--light-blue)"}
              size={"3rem"}
            />
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
          <Select
            elements={LOCATION}
            id={"location"}
            value={input.location}
            onChange={handleChangeInput}
            title={"Ingresa tu distrito"}
          />
        </div>
        <div className={styles.footer}>
          <IconTextButton
            textProps={{ type: "subtitle", bold: true }}
            onClick={handleFindProfessionals}
            size="240px"
          >
            Siguiente
          </IconTextButton>
        </div>
      </div>

      <div
        className={`${styles.section} ${currentSection === 2 && styles.show}`}
      >
        {professionals.length > 0 ? (
          <Text type="title">
            ¡Encontramos a {professionals.length}{" "}
            {professionals.length > 1 ? "profesionales" : "profesional"} en tu
            area!
          </Text>
        ) : (
          <Text type="title">
            No encontramos a nadie :c, prueba con otra ubicación.
          </Text>
        )}

        <section className={styles.profesionals}>
          {professionals.map((p) => (
            <div className={styles.profesional}>
              <div className={styles.professionalData}>
                <Text bold>{p.name}</Text>
                <section className={styles.professionalDetail}>
                  <MoreInfo
                    text={
                      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed elit nisi, iaculis eget quam nec, malesuada finibus lectus. Ut et urna blandit, auctor leo nec, eleifend nisl. Ut consequat odio ut fermentum mollis. Sed commodo, arcu sit amet sodales condimentum, ex lectus porttitor mauris, sit amet porttitor massa nibh at erat. Vestibulum malesuada dapibus porta. Vivamus tristique velit urna, in accumsan urna volutpat in. Etiam eget sem id ex rutrum molestie. Curabitur in purus diam. Integer felis erat, lacinia ac eros ac, egestas porttitor arcu. Phasellus rutrum arcu at neque vulputate cursus."
                    }
                    img={
                      "https://upload.wikimedia.org/wikipedia/commons/e/e4/Cuesta_del_obispo_01.jpg"
                    }
                  >
                    <div className={styles.detailSection}>
                      <Icon
                        size={"1.2rem"}
                        color="var(--primary)"
                        type={"checked"}
                      />

                      <Text size={"0.8rem"} bold>
                        Aprobado
                      </Text>
                    </div>
                  </MoreInfo>

                  <div className={styles.separator}></div>
                  <div className={styles.detailSection}>
                    <div className={styles.ball}></div>
                    <Text size={"0.8rem"} bold>
                      Disponible
                    </Text>
                  </div>
                </section>
              </div>
              <IconTextButton
                variant="bordered"
                size="240px"
                iconProps={{
                  type: "whatsapp",
                  size: "2rem",
                }}
                onClick={() => handleCotize([p.phone])}
              >
                Contactar
              </IconTextButton>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
};

export default FindAService;
