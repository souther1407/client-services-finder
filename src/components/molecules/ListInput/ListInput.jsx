import React, { useState } from "react";
import styles from "./listInput.module.css";

const ListInput = ({ id, values, onEnterValue }) => {
  const handleEnterListValue = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      e.target.disabled = true;
      onEnterValue(id, [...values, e.target.value]);
    }
  };
  return (
    <div className={styles.listInput}>
      <ul className={styles.list}>
        <li>
          <input
            key={-1}
            type="text"
            className={styles.input}
            onKeyDown={handleEnterListValue}
            placeholder="Ingrese una habilidad"
          />
        </li>
        {values.map((v, i) => (
          <li>
            <input
              key={i}
              className={styles.input}
              type="text"
              placeholder="Ingrese una habilidad"
              onKeyDown={handleEnterListValue}
              autoFocus={true}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListInput;
