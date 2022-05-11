import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";

const Modal = (props) => {
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!props.show) {
    return null;
  }
  return ReactDOM.createPortal(
    <div onClick={(e) => e.stopPropagation()}>
      <div className={styles.modal} onClick={props.onClose}>
        <div
          className={styles.modalContent}
          onClick={(e) => e.stopPropagation()}
          style={{
            backgroundImage: "url(" + props.backgroundImg + ")",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPositionX: "100%",
          }}
        >
          <div className={styles.modalHeader}>
            <Image
              className={styles.closeModal}
              // src={closeModal}
              src="/close_modal.png"
              alt={styles.closeModal}
              onClick={props.onClose}
              width="25%"
              height="25%"
            />
          </div>
          <div className={styles.modalBody}>{props.children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("__next")
  );
};

export default Modal;
