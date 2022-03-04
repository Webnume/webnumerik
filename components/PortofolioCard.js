import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Portofolio.module.css";
import "../styles/Portofolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from "nanoid";

function PortofolioCard({
  projectTitle,
  demoLink,
  repoGitLink,
  technos,
  mission,
  skills,
  imgSrc,
  imgAlt,
  backgroundImg,
}) {
  const [inHover, setHover] = useState("");
  const container = useRef();

  return (
    <div>
      <div style={{ position: "absolute", top: "0", left: "0" }}>
        <div style={{ position: "relative", width: "100vw", height: "100vh",filter: "blur(9px)" }}>
          <Image
            src={`/${backgroundImg}`}
            alt={imgAlt}
            className={styles.panelBackground}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div>
      </div>
      <div className={styles.container} ref={container}>
        <h1 className={styles.projecttitle} data-title>
          {projectTitle}
        </h1>
        <div className={styles.content}>
          <div className={`${styles.left}`} data-left>
            <div className={styles.siteInfos}>
              <span className={styles.siteImg}>
                <Image
                  src={`/${imgSrc}`}
                  alt={imgAlt}
                  width={200}
                  height={120}
                />
              </span>

              <div className={styles.inner}>
                <a
                  href={demoLink}
                  target="blank"
                  rel="noopener noreferrer"
                  className="hover-shadow hover-color"
                >
                  <span>Live</span>
                  <span>D</span>
                  <span>e</span>
                  <span>m</span>
                  <span>o</span>
                </a>{" "}
                /{" "}
                <a
                  href={repoGitLink}
                  target="blank"
                  rel="noopener noreferrer"
                  className="hover-shadow hover-color"
                >
                  <span>Git</span>
                  <span>H</span>
                  <span>u</span>
                  <span>b</span>
                </a>
              </div>
            </div>
            <div className={styles.underThumb}>
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
                          onMouseEnter={() =>
                            setHover("Git gestion de versions")
                          }
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
                          onMouseEnter={() => setHover("Jest")}
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
                })}
              </div>
            </div>
          </div>
          <div className={styles.right} data-right>
            <h2>Mission réalisée</h2>
            <p>{mission}</p>
            <h2>Compétences déployées</h2>
            <ul className={styles.customlist}>
              {skills.map((skill, index) => {
                return <li key={nanoid(10)}>{skill}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PortofolioCard;
