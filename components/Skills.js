import React, { useState } from "react";
import styles from "../styles/Portofolio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";
import { nanoid } from "nanoid";

const Skills = ({ technos }) => {
  const [inHover, setHover] = useState("");
  return (
    <div className={styles.skills}>
      <span className={styles.infos}> {inHover}</span>
      <span className={styles.skilltitle}>Technos </span>
      {technos.map((techno) => {
        if (techno === "html")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoHtml5}
                onMouseEnter={() => setHover("Html")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faHtml5} />
              </span>
            </div>
          );
        if (techno === "css")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoCss3}
                onMouseEnter={() => setHover("Css")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faCss3Alt} />
              </span>
            </div>
          );

        if (techno === "sass")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoSass}
                onMouseEnter={() => setHover("Préprocesseur Sass")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faSass} />
              </span>
            </div>
          );
        if (techno === "js")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoJs}
                onMouseEnter={() => setHover("JavaScript")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faJsSquare} />
              </span>
            </div>
          );
        if (techno === "react")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoReact}
                onMouseEnter={() => setHover("React")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faReact} />
              </span>
            </div>
          );
        if (techno === "git")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoGit}
                onMouseEnter={() => setHover("Git gestion de versions")}
                onMouseLeave={() => setHover("")}
              >
                <FontAwesomeIcon icon={faGitSquare} />
              </span>
            </div>
          );
        if (techno === "jest")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoJest}
                onMouseEnter={() => setHover("Jest/ React Testing Library")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src="/jest-icon.svg"
                  alt="jest"
                  // className={styles.panelBackground}
                  width={20}
                  height={30}
                />
              </span>
            </div>
          );
        if (techno === "cypress")
          return (
            <div key={nanoid(10)}>
              <span
                className={styles.logoJest}
                onMouseEnter={() => setHover("Tested with Cypress.io")}
                onMouseLeave={() => setHover("")}
              >
                <Image
                  src="/cypress-io.png"
                  alt="Cypress.io"
                  // className={styles.panelBackground}
                  width={30}
                  height={30}
                />
              </span>
            </div>
          );
      })}
    </div>
  );
};

export default Skills;
