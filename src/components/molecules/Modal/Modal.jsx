import React from "react";
import styles from "./modal.module.css";
import IconButton from "../IconButton/IconButton";
const Modal = ({ children, isOpen, onClose, size = "fit-content" }) => {
  return (
    <div
      className={`${styles.modal} ${isOpen && styles.show}`}
      onClick={onClose}
    >
      <div
        className={`${styles.modalContent} ${isOpen && styles.show}`}
        onClick={(e) => e.stopPropagation()}
        style={{ width: size }}
      >
        {" "}
        <div className={styles.closeButton}>
          <IconButton icon="close" size="1.5rem" onClick={onClose} />
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
