import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/About.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Timeline from "../components/Timeline";
import { gsap } from "gsap";

export default function Home() {
  const timelineArray = [
    {
      title: "Développeur d'application - JavaScript React",
      description:
        "Diplôme et titre RNCP de niveau 6 (BAC +3/4). Formation à plein temps de 12 mois.",
      date: "2020 - 2021",
    },
    {
      title: "Technicien informatique indépendant",
      description:
        "Réalisation, sécurisation et installation des nouveaux équipements ou logiciels de parc informatique d’entreprise ou de particuliers, ensuite l’entretien et la réparation des différents matériels.",
      date: "2013 - 2020",
    },
    {
      title: "Webmaster freelance",
      description:
        "Conception, développement et entretien de sites internets. Mise en forme et en ligne des contenus, maintien de plateforme technique et référencement.",
      date: "1999 - 2013",
    },
    {
      title: "Licence SNV",
      description:
        "Sciences de la Nature et de la Vie mention Biologie des Organismes.",
      date: "1995 - 1999",
    },
    {
      title: "BAC S",
      description: "Baccalauréat Scientifique option Biologie.",
      date: "1994 - 1995",
    },
  ];

  const mainRef = useRef();
  useEffect(() => {
    let tl2 = gsap.timeline();
    tl2.from(mainRef.current, {
      duration: 1.5,
      ease: "power3.out",
      xPercent: -400,
      opacity: 0,
      repeat: 0,
    });
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} ref={mainRef}>
        <h1 className={styles.title}>
          Mon <span>Parcours</span>
        </h1>
        <section className={styles.section1}>
          <p>
            Issu d'un cursus scientifique, je me suis d'abord lancé en
            autodidacte dans le domaine de la création web dès 1999 par passion.
            Ensuite, j'ai validé une formation diplômante de développeur
            d'applications front-end ReactJS chez OpenClassRoom. Les compétences
            acquises grâce à cette formation :
          </p>
          <ul className={styles.customlist}>
            <li>
              Choisir une solution technique adaptée à votre client et
              travailler en mode Agile ;
            </li>
            <li>Créer des sites web avec HTML et CSS ;</li>
            <li>
              Créer des applications web dynamiques avec Javascript et ReactJS ;
            </li>
            <li>
              Communiquer avec le back-end de l’application grâce à une API ;
            </li>
            <li>
              Mettre en œuvre des test unitaires et d’intégration et débugger le
              code ;
            </li>
            <li>
              Résoudre des problèmes techniques avec un langage de programmation
              et des algorithmes ;
            </li>
            <li>
              Refactoriser du code pour qu’il soit plus moderne et optimisé.
            </li>
            <li>HTML/ CSS/ SASS</li>
            <li>JavaScript ES6</li>
            <li>ReactJS / Redux</li>
            <li>Responsive Design / W3C / Accessibilité </li>
          </ul>
          <p>
            Aujourd'hui, je souhaite mettre toutes mes compétences à profit en
            collaborant, en toute confiance, sur des projets web. Sérieux et
            autonome, je suis à l'écoute de vos besoins et je serais heureux de
            vous aider.
          </p>
        </section>
        <section className={styles.section2}>
          <Timeline items={timelineArray} />
        </section>
        <section className={styles.section3}>
          <h2 className={styles.title2}>
            Mes <span>Soft Skills</span>
          </h2>
          <div className={styles.grid}>
            <div className={styles.card}>
              <h2>Confiance</h2>
              <p>
                J'aime travailler dans un climat de bienveillance, de confiance
                et d'honnêteté.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Adaptabilité</h2>
              <p>
                Je suis humble, capable de m'adapter et de me remettre en
                question.
              </p>
            </div>

            <div className={styles.card}>
              <h2>Responsable</h2>
              <p>
                J'ai une intelligence émotionnelle qui me donne un sens des
                responsabilités.{" "}
              </p>
            </div>

            <div className={styles.card}>
              <h2>Collaboration</h2>
              <p>
                Je souhaite faire partie d'une équipe de travail pour de riches
                échanges.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
