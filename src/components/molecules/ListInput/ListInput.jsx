import React, { useState } from "react";
import styles from "./listInput.module.css";

const ListInput = ({ id, values, onEnterValue, onDelete }) => {
  const handleEnterListValue = (e) => {
    if (e.key === "Enter" && e.target.value.trim() !== "") {
      const value = e.target.value;
      e.target.value = "";
      onEnterValue(id, [...values, value]);
    }
  };
  return (
    <div className={styles.listInput}>
      <ul className={styles.list}>
        {values.map((v, i) => (
          <li>
            <input
              key={i}
              className={styles.input}
              type="text"
              placeholder="Ingrese una habilidad"
              onKeyDown={handleEnterListValue}
              value={v}
              disabled
            />
            <button onClick={() => onDelete(v)}>X</button>
          </li>
        ))}
        <li>
          <input
            key={999999999999}
            type="text"
            className={styles.input}
            onKeyDown={handleEnterListValue}
            placeholder="Ingrese una habilidad"
            autoFocus={true}
          />
        </li>
      </ul>
    </div>
  );
};

export default ListInput;
