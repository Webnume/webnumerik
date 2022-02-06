import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faLinkedin,
  faCodepen,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Nav.module.css";

function Socialmedia() {
  return (
    <div className={styles.navbar__socialmedia}>
      <a href="https://www.linkedin.com/in/yves-ga/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a href="https://github.com/Webnume/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faGit} />
      </a>
      <a href="https://codepen.io/webnume/" target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faCodepen} />
      </a>
    </div>
  );
}

export default Socialmedia;
