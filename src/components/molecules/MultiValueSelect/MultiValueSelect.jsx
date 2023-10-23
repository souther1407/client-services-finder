import React, { useEffect, useMemo, useState } from "react";
import styles from "./multiValueSelect.module.css";
import Select from "../../atoms/Select/Select";
import Text from "../../atoms/Text/Text";
const MultiValueSelect = ({
  id,
  elements,
  title = "",
  size = "100%",
  listPosition = "bottom",
  onChange,
}) => {
  const [selectedElements, setSelectedElements] = useState([]);

  const filteredElements = useMemo(() => {
    return elements.filter((e) => !selectedElements.includes(e));
  }, [selectedElements]);

  const clearSelectedElements = () => {
    setSelectedElements([]);
  };
  const addSelectedElement = (element) => {
    setSelectedElements([...selectedElements, element]);
  };
  useEffect(() => {
    onChange(id, selectedElements);
  }, [selectedElements]);
  return (
    <div className={styles.multiValueSelect}>
      <Select
        id={id}
        elements={filteredElements}
        size={size}
        title={title}
        listPosition={listPosition}
        onChange={(id, value) => addSelectedElement(value)}
        value={selectedElements.join(",") || ""}
        onClear={clearSelectedElements}
      />
    </div>
  );
};

export default MultiValueSelect;
