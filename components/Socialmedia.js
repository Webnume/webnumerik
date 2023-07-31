import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGit,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import styles from "../styles/Nav.module.scss";
import Link from "next/link";
import Image from "next/image";

function Socialmedia() {
  return (
    <div className={styles.socialmedia}>
    <Link href="/CV_Developper_FullStack_JavaScript_React_Node_Yves_GABA.pdf">
      <a target="_blank">
        <Image src="/cv.png" alt="cv" className="" width={40} height={40} />
      </a>
    </Link>
      <a
        href="https://www.linkedin.com/in/yves-ga/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faLinkedin} />
      </a>
      <a
        href="https://github.com/Webnume/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FontAwesomeIcon icon={faGit} />
      </a>
    </div>
  );
}

export default Socialmedia;
