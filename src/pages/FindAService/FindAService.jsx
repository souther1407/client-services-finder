import React, { useState } from "react";
import styles from "./findAService.module.css";
import IconButton from "../../components/molecules/IconButton/IconButton";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { getByLocationAndType } from "../../services/professionalsApi";
import SelectService from "./components/SelectService/SelectService";
import SelectLocation from "./components/SelectLocation/SelectLocation";
import ServiceResults from "./components/ServiceResults/ServiceResults";

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
        className={`${styles.section} ${currentSection === 0 && styles.show} ${
          styles.serviceSelect
        }`}
      >
        <SelectService onSelectService={handleSetServiceType} />
      </div>
      <div
        className={`${styles.section} ${currentSection === 1 && styles.show} ${
          styles.bordered
        }`}
      >
        <SelectLocation
          onChange={handleChangeInput}
          onFindProfesionals={handleFindProfessionals}
          valueInput={input.location}
        />
      </div>

      <div
        className={`${styles.section} ${styles.results} ${
          currentSection === 2 && styles.show
        }`}
      >
        <ServiceResults professionals={professionals} />
      </div>
    </div>
  );
};

export default FindAService;
