import React, { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/About.module.scss";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { gsap } from "gsap";

export default function About() {
  const timelineArray = [
    {
      title: "Développeur Frontend ReactJS - Freelance",
      description:
        "Développement d'application web à partir de ReactJS et de son environnement.",
      date: "2021 - 2022",
    },
    {
      title: "Formation de Développeur d'application - JavaScript React",
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
        <title>About WebNumerik - Développement Web React</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} ref={mainRef}>
        <h1 className={styles.title}>
          A Propos de <span>Moi</span>
        </h1>
        <section className={styles.section1}>
          <p>
            Issu d'un cursus scientifique, je me suis d'abord lancé, par passion
            et en autodidacte, dans la création et la maintenance de sites internet
            dès 1999. <br />
            Pour valider mes compétences, j'ai obtenu un diplôme reconnu par
            l'État de développeur d'applications front-end ReactJS chez
            OpenClassRooms. <br />
            <br />
            Un petit résumé  de mes compétences :
          </p>

          <ul className={styles.customlist}>
            <li>Je code en HTML/ CSS (SASS)/ JavaScript/ ReactJS/ Redux.</li>
            <li>Je teste mon code avec : Jest/ Testing library/ Cypress. </li>
            <li>
              Je choisis la solution technique la plus adaptée et je
              travaille en mode Agile.
            </li>
            <li>
              Je crée des applications web dynamiques avec Javascript et ReactJS.
            </li>
            <li>
              J'alimente le front-end par le back-end grâce à une API.
            </li>
            <li>
              Je mets en œuvre des tests unitaires et d’intégration et je débugge le
              code.
            </li>
            <li>
              Je résous des problèmes techniques avec un langage de programmation
              et des algorithmes.
            </li>
            <li>
              Je refactorise le code pour qu’il soit plus moderne et optimisé.
            </li>
            <li>
              Je documente le code pour qu’il soit maintenable.
            </li>
            <li>Je produis un code de qualité : Sonar/ Responsive Design/ W3C/ Accessibilité. </li>
          </ul>
          <p>
            Aujourd'hui, je souhaite collaborer, en toute confiance, sur des projets web. <br />Sérieux et
            autonome, je suis à l'écoute de vos besoins et je serais heureux de
            vous aider.
          </p>
        </section>
        <h2 className={styles.title2}>
          Mon <span>Parcours</span>
        </h2>
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
    </div>
  );
}
