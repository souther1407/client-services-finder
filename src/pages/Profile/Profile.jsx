import React, { useEffect, useState } from "react";
import styles from "./profile.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate } from "react-router-dom";
import { FIND_SERVICE } from "../../utils/constants/routes";
import Input from "../../components/atoms/Input/Input";
import Textarea from "../../components/atoms/Textarea/Textarea";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import ListInput from "../../components/molecules/ListInput/ListInput";
import LoadingScreen from "../../components/molecules/LoadingScreen/LoadingScreen";
import {
  getProfesionalDetail,
  updateProfessional,
} from "../../services/professionalsApi";
const Profile = () => {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    name: "",
    phone: "",
    skills: [],
    description: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      return navigate(FIND_SERVICE);
    } else {
      getProfesionalDetail()
        .then((data) =>
          setDetails({
            ...data,
          })
        )
        .catch((err) => alert(err))
        .finally(() => setLoading(false));
    }
  }, []);

  const handleChange = (id, value) => {
    setDetails((prev) => ({ ...prev, [id]: value }));
  };

  const handleDeleteSkill = async (skill) => {
    setDetails((prev) => ({
      ...prev,
      skills: prev.skills.filter((s) => s != skill),
    }));
  };

  const handleUpdateUser = async () => {
    try {
      setLoading(true);
      const updated = await updateProfessional(details);
      alert("Cambios guardados!");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className={styles.profile}>
      {loading && <LoadingScreen />}
      <Text type="title">Perfil</Text>
      <div className={styles.settings}>
        <div className={styles.column}>
          <Input
            icon={"user"}
            id={"name"}
            onChange={handleChange}
            onError={() => {}}
            variant="secondary"
            value={details.name}
            placeholder="Nombre y apellido"
          />
          <Input
            icon={"phone"}
            id={"phone"}
            onChange={handleChange}
            onError={() => {}}
            variant="secondary"
            value={details.phone}
            placeholder="Número de teléfono"
          />
          <ListInput
            id={"skills"}
            onEnterValue={handleChange}
            values={details.skills}
            onDelete={handleDeleteSkill}
          />
        </div>
        <div className={styles.column}>
          <Textarea
            id={"description"}
            onChange={handleChange}
            value={details.description}
            placeholder="Descripción"
          />
        </div>
      </div>
      <div className={styles.btns}>
        <IconTextButton onClick={handleUpdateUser}>
          Guardar cambios
        </IconTextButton>
        <IconTextButton>Cerrar sesion</IconTextButton>
      </div>
    </div>
  );
};

export default Profile;
