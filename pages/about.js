import React, { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/About.module.scss";
import Header from "../components/Header";
import Timeline from "../components/Timeline";
import { gsap } from "gsap";

export default function About() {
  const timelineArray = [
    {
      title: "Développeur Frontend JavaScript React/ NextJS (Freelance)",
      description:
        "Développement Frontend JavaScript React - NextJS. Création de sites internet et d'applications web.",
      date: "2021 - aujourd'hui",
    },
    {
      title: "Formation de Développeur d'application - JavaScript React",
      description:
        "Diplôme et titre RNCP de niveau 6 (BAC +3/4). Formation à plein temps de 12 mois.",
      date: "2020 - 2021",
    },
    // {
    //   title: "Technicien informatique (Indépendant)",
    //   description:
    //     "Réalisation, sécurisation et installation des nouveaux équipements ou logiciels de parc informatique d’entreprise ou de particuliers, ensuite l’entretien et la réparation des différents matériels.",
    //   date: "2013 - 2020",
    // },
    {
      title: "Webmaster (Freelance)",
      description:
        "Conception, développement et entretien de sites internets. Mise en forme et en ligne des contenus, maintien de plateforme technique et référencement.",
      date: "1999 - 2020",
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

  const mainRef = useRef(null);
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
            Je me suis lancé dès 1999, en autodidacte, dans la création et la
            maintenance de sites internet puis me suis spécialisé dans le
            développement front-end depuis 2019. Pour valider mes acquis, j'ai
            obtenu un diplôme d'État de développeur d'applications front-end
            ReactJS en 2021. En parallèle, je m'intéresse aussi au backend avec
            NodeJS.
            <br />
            <br />
            Dans mon quotidien, je crée des applications web frontend avec
            Javascript et ReactJS que j'alimente par le back-end grâce à une
            API. Je mets en œuvre des tests unitaires et d’intégration et je
            débugge le code au besoin. Je refactorise le code pour qu’il soit
            plus moderne et optimisé ou encore documente le code, si nécessaire,
            pour qu’il soit maintenable. Je code selon les standards du web :
            Sonar/ Responsive Design/ W3C/ Accessibilité.
            <br />
            <br />
            Voici une liste non exhaustive de mes compétences :
          </p>

          <ul className={styles.customlist}>
            <li> Coding : HTML/ CSS/ JavaScript </li>
            <li>Frontend : React/ NextJS/ TypeScript/ Redux</li>
            <li>Backend : NodeJS / Express</li>
            <li>API : REST/ GraphQL, React-Query, Swagger…</li>
            <li>Tests : Jest, React Testing Library, Cypress…</li>
            <li>
              Outils : VSCode, ESLint, Prettier, Git/Github, Figma, Suite Adobe,
              Agile…
            </li>
            <li>
              Librairies : SASS, TailwindCSS, Styled-components, JWT, Redux,
              GSAP, Webpack, Recharts, D3.js, MaterialUI, BootStrap...
            </li>
            <li>Data : MongoDB, MySQL…</li>
          </ul>
          <p>
            Curieux, motivé et autonome, je suis à l'écoute de vos besoins et je
            serai très heureux de contribuer à leur réussite. Aujourd'hui, je
            souhaite collaborer, en toute confiance, sur des projets ambitieux.
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
