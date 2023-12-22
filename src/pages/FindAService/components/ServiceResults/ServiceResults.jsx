import React, { useState } from "react";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../../../components/molecules/Modal/Modal";
import Icon from "../../../../components/atoms/Icon/Icon";
import SkillsCollapsable from "./components/SkillsCollapsable/SkillsCollapsable";
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
              <Text size={"1.25rem"} bold>
                {p.name}
              </Text>
              <section className={styles.professionalDetail}>
                {p?.aproved && (
                  <>
                    <div className={styles.detailSection}>
                      <Icon
                        size={"1.2rem"}
                        color="var(--black)"
                        type={"checked"}
                      />

                      <Text size={"1rem"}>Empresa Aprobada</Text>
                    </div>

                    <div className={styles.separator}></div>
                  </>
                )}
                <div className={styles.detailSection}>
                  <SkillsCollapsable skills={p?.skills ?? []} />
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
          {profesionalDetail?.aproved && (
            <div className={styles.detailSection}>
              <Icon size={"1.2rem"} color="var(--black)" type={"checked"} />

              <Text size={"0.8rem"}>Aprobado</Text>
            </div>
          )}
          {profesionalDetail?.skills?.length > 0 && (
            <div>
              <Text type="subtitle" size={"1.25rem"} bold>
                Experiencia
              </Text>
              <ul className={styles.listSkills}>
                {profesionalDetail?.skills.map((s) => (
                  <li>{s}</li>
                ))}
              </ul>
            </div>
          )}
          {profesionalDetail.description && (
            <div className={styles.descripcion}>
              <Text type="subtitle" size={"1.25rem"} bold>
                Descripción
              </Text>
              <Text>{profesionalDetail.description}</Text>
            </div>
          )}
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
