import React from "react";
import styles from "../styles/Portofolio.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

function PortofolioCard() {
  return (
    <div>
      <div className={styles.container}>
        <h1 className={styles.projecttitle}>
          Faire Passer une librairie Jquery vers React
        </h1>
        <div className={styles.left}>
          <Link href="https://github.com/Webnume/Y.GABA_14_18032021">
            <a target="blank" rel="noopener noreferrer">
              <Image
                src="/webnume_projet_14.png"
                alt="Webnumerik Logo"
                className=""
                width={250}
                height={140}
              />
            </a>
          </Link>
          <div>
            <div className={styles.inner}>
              <a href="" className="hover-shadow hover-color">
                <span>Live</span>
                <span>D</span>
                <span>e</span>
                <span>m</span>
                <span>o</span>
              </a>{" "}
              /{" "}
              <a href="" className="hover-shadow hover-color">
                <span>Git</span>
                <span>H</span>
                <span>u</span>
                <span>b</span>
              </a>
            </div>
            <span className={styles.skilltitle}>Technos utilisées</span>
            <div className={styles.skills}>
              <span className={styles.logoHtml5}>
                <FontAwesomeIcon icon={faHtml5} />
              </span>
              <span className={styles.logoCss3}>
                <FontAwesomeIcon icon={faCss3Alt} />
              </span>
              <span className={styles.logoJs}>
                <FontAwesomeIcon icon={faJsSquare} />
              </span>
              <span className={styles.logoReact}>
                <FontAwesomeIcon icon={faReact} />
              </span>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <h2>Mission réalisée</h2>
          <p>
            Convertir une application entière et ses plugins de Jquery vers
            React en ajoutant un système de gestion d'état Redux. Déployer un
            composant en librairie sur NPM.
          </p>
          <h2>Compétences déployées</h2>
          <ul className={styles.customlist}>
            <li> Refondre une application pour réduire la dette technique</li>
            <li> Analyser la performance d'une application web</li>
            <li> Déployer une application front-end</li>
            <li>
              {" "}
              Programmer en JavaScript avec la programmation fonctionnelle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortofolioCard;
