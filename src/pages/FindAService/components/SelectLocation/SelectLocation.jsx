import React from "react";
import Text from "../../../../components/atoms/Text/Text";
import Select from "../../../../components/atoms/Select/Select";
import IconTextButton from "../../../../components/molecules/IconTextButton/IconTextButton";
import styles from "./selectLocation.module.css";
import { LOCATION } from "../../../../utils/constants/locations";
const SelectLocation = ({ onChange, valueInput, onFindProfesionals }) => {
  return (
    <div>
      <div className={styles.header}>
        <Text type="title" bold>
          Ingresa tu ubicación
        </Text>
        <Select
          elements={LOCATION}
          id={"location"}
          value={valueInput}
          onChange={onChange}
          onError={() => {}}
          title={"Ingresa tu distrito"}
        />
      </div>
      <div className={styles.footer}>
        <IconTextButton
          textProps={{ type: "subtitle", bold: true }}
          onClick={onFindProfesionals}
          size="240px"
        >
          Siguiente
        </IconTextButton>
      </div>
    </div>
  );
};

export default SelectLocation;
