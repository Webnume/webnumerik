import React, { useEffect, useState, useRef } from "react";
import styles from "../styles/Portofolio.module.css";
import "../styles/Portofolio.module.css";
import Image from "next/image";
import { nanoid } from "nanoid";
import Skills from "./Skills";

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
        {/* <div
          style={{
            position: "relative",
            width: "100vw",
            height: "100vh",
          }}
        >
          <Image
            src={`/${backgroundImg}`}
            alt={imgAlt}
            className={styles.panelBackground}
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            priority
          />
        </div> */}
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
                <Skills technos={technos} />
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
