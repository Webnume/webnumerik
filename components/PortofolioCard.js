import React, { useEffect, useState } from "react";
import styles from "../styles/Portofolio.module.css";
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
  return (
    <div>
      <div style={{ position: "absolute", top: "0", left: "0" }}>
        <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
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
      <div className={styles.container}>
        <h1 className={styles.projecttitle}>{projectTitle}</h1>
        <div className={`${styles.left}`}>
            <span className={styles.siteImg}>
              <Image src={`/${imgSrc}`} alt={imgAlt} width={200} height={120} />
            </span>
          <div className={styles.underThumb}>
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
            <span className={styles.skilltitle}>Technos </span>
            <div className={styles.skills}>
              {technos.map((techno) => {
                if (techno === "html")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoHtml5}
                        onMouseEnter={() => setHover("html")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faHtml5} />
                      </span>
                      {inHover === "html" && (
                        <span className={styles.infos}>Html</span>
                      )}
                    </div>
                  );
                if (techno === "css")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoCss3}
                        onMouseEnter={() => setHover("css")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faCss3Alt} />
                      </span>
                      {inHover === "css" && (
                        <span className={styles.infos}>Css</span>
                      )}
                    </div>
                  );

                if (techno === "sass")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoSass}
                        onMouseEnter={() => setHover("sass")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faSass} />
                      </span>
                      {inHover === "sass" && (
                        <span className={styles.infos}>Préprocesseur sass</span>
                      )}
                    </div>
                  );
                if (techno === "js")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoJs}
                        onMouseEnter={() => setHover("js")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faJsSquare} />
                      </span>
                      {inHover === "js" && (
                        <span className={styles.infos}>JavaScript</span>
                      )}
                    </div>
                  );
                if (techno === "react")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoReact}
                        onMouseEnter={() => setHover("react")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faReact} />
                      </span>
                      {inHover === "react" && (
                        <span className={styles.infos}>React</span>
                      )}
                    </div>
                  );
                if (techno === "git")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoGit}
                        onMouseEnter={() => setHover("git")}
                        onMouseLeave={() => setHover("")}
                      >
                        <FontAwesomeIcon icon={faGitSquare} />
                      </span>
                      {inHover === "git" && (
                        <span className={styles.infos}>
                          Git gestion de versions
                        </span>
                      )}
                    </div>
                  );
                if (techno === "jest")
                  return (
                    <div key={nanoid(10)}>
                      <span
                        className={styles.logoJest}
                        onMouseEnter={() => setHover("jest")}
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
                      {inHover === "jest" && (
                        <span className={styles.infos}>jest</span>
                      )}
                    </div>
                  );
              })}
            </div>
          </div>
        </div>
        <div className={styles.right}>
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
  );
}

export default PortofolioCard;
