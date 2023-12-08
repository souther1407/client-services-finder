import React, { useState } from "react";
import Text from "../../components/atoms/Text/Text";
import Icon from "../../components/atoms/Icon/Icon";
import styles from "./findAService.module.css";
import IconButton from "../../components/molecules/IconButton/IconButton";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import Select from "../../components/atoms/Select/Select";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { getByLocationAndType } from "../../services/professionalsApi";
import Modal from "../../components/molecules/Modal/Modal";
import { LOCATION } from "../../utils/constants/locations";
import { SERVICES } from "../../utils/constants/services";
const FindAService = () => {
  const max = 6;
  const [currentSection, setCurrentSection] = useState(0);
  const [input, setInput] = useState({
    type: "",
    location: "",
  });
  const [professionals, setProfessionals] = useState([]);
  const [profesionalDetail, setProfesionalDetail] = useState({
    name: "",
  });
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        `whatsapp://send?phone=${professionalPhoneNumbers}`
      );
      link.setAttribute("target", "_blank");
      link.click();
    } catch (error) {
      alert(error.message);
    } finally {
      /*  setLoading(false); */
    }
  };

  const handleShowDetailProfesional = (profesional) => {
    setProfesionalDetail(profesional);
    setShowModal(true);
  };
  /* const handleCotizeAll = async () => {
    const phoneNumbers = professionals.map((p) => p.phone);
    handleCotize(phoneNumbers);
  }; */
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
          {SERVICES.map((s) => (
            <div
              className={styles.servicesBtn}
              onClick={() => handleSetServiceType(s)}
            >
              <Icon type={s} color={"var(--light-blue)"} size={"3rem"} />
              <Text>{s}</Text>
            </div>
          ))}
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
            onError={() => {}}
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
        className={`${styles.section} ${styles.results} ${
          currentSection === 2 && styles.show
        }`}
      >
        {professionals.length > 0 ? (
          <Text type="title" textAlign="center">
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
              <div
                className={styles.professionalData}
                onClick={() => handleShowDetailProfesional(p)}
              >
                <Text color="primary" bold>
                  {p.name}
                </Text>
                <section className={styles.professionalDetail}>
                  <div className={styles.detailSection}>
                    <Icon
                      size={"1.2rem"}
                      color="var(--black)"
                      type={"checked"}
                    />

                    <Text size={"0.8rem"} bold>
                      Aprobado
                    </Text>
                  </div>

                  <div className={styles.separator}></div>
                  <div className={styles.detailSection}>
                    <Text size={"0.8rem"} bold>
                      {p.types[0]}
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
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="50%">
        <div className={styles.modalContent}>
          <Text type="subtitle" bold>
            {profesionalDetail.name}
          </Text>
          <div className={styles.detailSection}>
            <Icon size={"1.2rem"} color="var(--black)" type={"checked"} />

            <Text size={"0.8rem"} bold>
              Aprobado
            </Text>
          </div>
          <div>
            <Text type="subtitle" bold>
              Experiencia
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              molestias animi veritatis odit magnam corrupti expedita, harum,
              praesentium voluptas laboriosam, velit nobis repellat accusamus
              tenetur. Iste quo voluptates tenetur quaerat.
            </Text>
          </div>
          <div>
            <Text type="subtitle" bold>
              Descripción
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              molestias animi veritatis odit magnam corrupti expedita, harum,
              praesentium voluptas laboriosam, velit nobis repellat accusamus
              tenetur. Iste quo voluptates tenetur quaerat.
            </Text>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default FindAService;
