import React, { useState } from "react";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../../../components/molecules/Modal/Modal";
import Icon from "../../../../components/atoms/Icon/Icon";
import styles from "./serviceResults.module.css";

const ServiceResults = ({ professionals, location, remarkFirst }) => {
  const [showModal, setShowModal] = useState(false);

  const [profesionalDetail, setProfesionalDetail] = useState({
    name: "",
  });

  const handleShowDetailProfesional = (profesional) => {
    setProfesionalDetail(profesional);
    setShowModal(true);
  };
  const handleCotize = async (professionalPhoneNumbers) => {
    try {
      const link = document.createElement("a");
      link.setAttribute("href", `https://wa.me/${professionalPhoneNumbers}`);
      link.setAttribute("target", "_blank");
      link.click();
    } catch (error) {
      alert(error.message);
    } finally {
    }
  };
  return (
    <>
      {professionals.length > 0 ? (
        <Text type="title" textAlign="center">
          ¡Encontramos a {professionals.length}{" "}
          {professionals.length > 1 ? "profesionales" : "profesional"} en{" "}
          {location}
        </Text>
      ) : (
        <Text type="title">
          No encontramos a nadie :c, prueba con otra ubicación.
        </Text>
      )}

      <section className={styles.profesionals}>
        {professionals.map((p, index) => (
          <div className={styles.profesional}>
            <div
              className={styles.professionalData}
              onClick={() => handleShowDetailProfesional(p)}
            >
              <Text color="primary" size={"1.25rem"} bold>
                {p.name}
              </Text>
              <section className={styles.professionalDetail}>
                <div className={styles.detailSection}>
                  <Icon size={"1.2rem"} color="var(--black)" type={"checked"} />

                  <Text size={"1rem"}>Aprobado</Text>
                </div>

                <div className={styles.separator}></div>
                <div className={styles.detailSection}>
                  <Text size={"1rem"}>{p.types[0]}</Text>
                </div>
              </section>
            </div>
            <div className={styles.btnContanctList}>
              <IconTextButton
                variant={remarkFirst && index === 0 ? "full" : "bordered"}
                size="100%"
                iconProps={{
                  type: "whatsapp",
                  size: "2rem",
                }}
                textProps={{
                  bold: true,
                  size: "1.25rem",
                }}
                onClick={() => handleCotize([p.phone])}
              >
                Contactar
              </IconTextButton>
            </div>
          </div>
        ))}
      </section>

      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <div className={styles.modalContent}>
          <Text type="subtitle" size={"2rem"} bold>
            {profesionalDetail.name}
          </Text>
          <div className={styles.detailSection}>
            <Icon size={"1.2rem"} color="var(--black)" type={"checked"} />

            <Text size={"0.8rem"}>Aprobado</Text>
          </div>
          <div>
            <Text type="subtitle" size={"1.25rem"} bold>
              Experiencia
            </Text>
            <ul className={styles.listSkills}>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
              <li>Lorem</li>
            </ul>
          </div>
          <div className={styles.descripcion}>
            <Text type="subtitle" size={"1.25rem"} bold>
              Descripción
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              molestias animi veritatis odit magnam corrupti expedita, harum,
              praesentium voluptas laboriosam, velit nobis repellat accusamus
              tenetur. Iste quo voluptates tenetur quaerat.
            </Text>
          </div>
          <div className={styles.btnContact}>
            <IconTextButton
              variant="bordered"
              size="300px"
              iconProps={{
                type: "whatsapp",
                size: "2rem",
              }}
              textProps={{
                bold: true,
                size: "1.25rem",
              }}
              onClick={() => handleCotize([profesionalDetail.phone])}
            >
              Contactar
            </IconTextButton>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ServiceResults;
