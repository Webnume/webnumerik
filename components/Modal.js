import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import styles from "../styles/Modal.module.css";
import Image from "next/image";

const Modal = (props) => {
  const [mount, setMount] = useState(false);
  const closeOnEscapeKeyDown = (e) => {
    if ((e.charCode || e.keyCode) === 27) {
      props.onClose();
    }
  };

  useEffect(() => {
    setMount(true);
    document.body.addEventListener("keydown", closeOnEscapeKeyDown);
    return function cleanup() {
      document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
    };
  });

  if (!props.show && typeof window !== "undefined") {
    document.body.style.overflow = "scroll";
    return null;
  }
  return mount
    ? ReactDOM.createPortal(
        <div onClick={(e) => e.stopPropagation()}>
          {(document.body.style.overflow = "hidden")}
          <div className={styles.modal} onClick={props.onClose}>
            <div
              className={styles.modalContent}
              onClick={(e) => e.stopPropagation()}
              style={{
                backgroundImage: "url(" + props.backgroundImg + ")",
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
      )
    : null;
};

export default Modal;
