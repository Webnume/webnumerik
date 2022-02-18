import React from "react";
import styles from "../styles/Portofolio.module.css";

function PortofolioCard() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.left}><img src="http://via.placeholder.com/250x300
" alt="" /></div>
        <div className={styles.right}>
          <h1>Faire Passer une librairie Jquery vers React</h1>
          <p>
            Convertir une application entière et ses plugins de Jquery vers
            React en ajoutant un système de gestion d'état Redux. Déployer un
            composant en librairie sur NPM.
          </p>
          <h2>Compétences déployées</h2>
          <ul>
            <li>- Refondre une application pour réduire la dette technique</li>
            <li>- Analyser la performance d'une application web</li>
            <li>- Déployer une application front-end</li>
            <li>
              - Programmer en JavaScript avec la programmation fonctionnelle
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PortofolioCard;
