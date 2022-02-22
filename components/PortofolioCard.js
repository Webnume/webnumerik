import React, { useEffect } from "react";
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
import useWindowSize from "../utils/getWindowsSize";

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
  const widthSize = useWindowSize().width;
  // watch input value by passing the name of it
  // console.log(watch("nom"));
  useEffect(() => {
    useWindowSize;
  }, [widthSize]);
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
          {widthSize > 940 && (
            <Link href={repoGitLink}>
              <a target="blank" rel="noopener noreferrer">
                <Image
                  src={`/${imgSrc}`}
                  alt={imgAlt}
                  className={styles.siteImg}
                  width={200}
                  height={120}
                />
              </a>
            </Link>
          )}
          <div>
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
            <span className={styles.skilltitle}>Technos utilisées</span>
            <div className={styles.skills}>
              {technos.map((techno) => {
                if (techno === "html")
                  return (
                    <span key={nanoid(10)} className={styles.logoHtml5}>
                      <FontAwesomeIcon icon={faHtml5} />
                    </span>
                  );
                if (techno === "html")
                  return (
                    <span key={nanoid(10)} className={styles.logoHtml5}>
                      <FontAwesomeIcon icon={faHtml5} />
                    </span>
                  );
                if (techno === "css")
                  return (
                    <span key={nanoid(10)} className={styles.logoCss3}>
                      <FontAwesomeIcon icon={faCss3Alt} />
                    </span>
                  );

                if (techno === "sass")
                  return (
                    <span key={nanoid(10)} className={styles.logoSass}>
                      <FontAwesomeIcon icon={faSass} />
                    </span>
                  );
                if (techno === "js")
                  return (
                    <span key={nanoid(10)} className={styles.logoJs}>
                      <FontAwesomeIcon icon={faJsSquare} />
                    </span>
                  );
                if (techno === "react")
                  return (
                    <span key={nanoid(10)} className={styles.logoReact}>
                      <FontAwesomeIcon icon={faReact} />
                    </span>
                  );
                if (techno === "git")
                  return (
                    <span key={nanoid(10)} className={styles.logoGit}>
                      <FontAwesomeIcon icon={faGitSquare} />
                    </span>
                  );
                else return techno;
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
