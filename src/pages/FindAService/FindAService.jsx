import React, { useState } from "react";
import styles from "./findAService.module.css";
import IconButton from "../../components/molecules/IconButton/IconButton";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import { getByLocationAndType } from "../../services/professionalsApi";
import SelectService from "./components/SelectService/SelectService";
import SelectLocation from "./components/SelectLocation/SelectLocation";
import ServiceResults from "./components/ServiceResults/ServiceResults";
import { useNavigate } from "react-router-dom";

const FindAService = ({ showDetail }) => {
  const max = 6;
  const [currentSection, setCurrentSection] = useState(showDetail ? 2 : 0);
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
  const navigate = useNavigate();
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
    if (showDetail) {
      navigate("/");
    }
  };

  const handleFindProfessionals = async () => {
    try {
      setLoading(true);
      let professionals = await getByLocationAndType(
        showDetail ? showDetail.location : input.location,
        showDetail ? showDetail.type : input.type
      );

      if (showDetail && professionals.length > 0) {
        const profesional = professionals.find(
          (p) => p.name === showDetail.name
        );
        professionals = professionals.filter(
          (p) => p.name !== profesional.name
        );
        professionals = [profesional, ...professionals];
      }
      console.log(professionals);
      setProfessionals(professionals);
      if (!showDetail) next();
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useState(() => {
    if (showDetail) {
      handleFindProfessionals();
    }
  }, []);

  return (
    <div className={styles.findAService}>
      {loading && <LoadingScreen />}
      <nav className={styles.nav}>
        {currentSection !== 0 && (
          <IconButton
            icon={"Logo"}
            size={"150px"}
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
        {!loading && (
          <ServiceResults
            professionals={professionals}
            location={input.location}
            remarkFirst={!!showDetail}
          />
        )}
      </div>
    </div>
  );
};

export default FindAService;
