import React, { useState } from "react";
import Text from "../../../../components/atoms/Text/Text";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import Modal from "../../../../components/molecules/Modal/Modal";
import Icon from "../../../../components/atoms/Icon/Icon";
import styles from "./serviceResults.module.css";
const ServiceResults = ({ professionals }) => {
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
  return (
    <div>
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
                  <Icon size={"1.2rem"} color="var(--black)" type={"checked"} />

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

export default ServiceResults;
