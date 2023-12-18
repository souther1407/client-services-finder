import React, { useEffect } from "react";
import styles from "./profile.module.css";
import Text from "../../components/atoms/Text/Text";
import { useNavigate } from "react-router-dom";
import { FIND_SERVICE } from "../../utils/constants/routes";
import Input from "../../components/atoms/Input/Input";
import Textarea from "../../components/atoms/Textarea/Textarea";
import IconTextButton from "../../components/molecules/IconTextButton/IconTextButton";
import ListInput from "../../components/molecules/ListInput/ListInput";
const Profile = () => {
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate(FIND_SERVICE);
    }
  }, []);

  return (
    <div className={styles.profile}>
      <Text type="title">Perfil</Text>
      <div className={styles.settings}>
        <div className={styles.column}>
          <Input
            icon={"user"}
            id={"name"}
            onChange={() => {}}
            onError={() => {}}
            variant="secondary"
            placeholder="Nombre y apellido"
          />
          <Input
            icon={"phone"}
            id={"phone"}
            onChange={() => {}}
            onError={() => {}}
            variant="secondary"
            placeholder="Número de teléfono"
          />
          <ListInput id={"skills"} onEnterValue={() => {}} values={[]} />
        </div>
        <div className={styles.column}>
          <Textarea
            id={"description"}
            onChange={() => {}}
            placeholder="Descripción"
          />
        </div>
      </div>
      <div className={styles.btns}>
        <IconTextButton>Guardar cambios</IconTextButton>
        <IconTextButton>Cerrar sesion</IconTextButton>
      </div>
    </div>
  );
};

export default Profile;
