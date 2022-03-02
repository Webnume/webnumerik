import React, { useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Portofolio.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import portofolioGsapAnimations from "../utils/gsapAnimations/portofolioGsapAnimations";
import PortofolioCard from "../components/PortofolioCard";

export default function Home() {
  const panelsRef = useRef([]);
  panelsRef.current = [];
  const addToPanelsRef = (el) => {
    if (el && !panelsRef.current.includes(el)) {
      panelsRef.current.push(el);
    }
  };
  console.log()
  useEffect(() => {
    portofolioGsapAnimations().panel(panelsRef.current);
    // return () => {};
    console.log("render");
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>WebNumerik Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div
          className={`${styles.description} ${styles.panel} ${styles.panelBackground}`}
          ref={addToPanelsRef}
        >
          <div style={{ position: "absolute", top: "0", left: "0" }}>
            <div
              style={{ position: "relative", width: "100vw", height: "100vh" }}
            >
              <Image
                src="/pexels-karolina-grabowska-8947463.jpg"
                alt="portfolio"
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                priority
              />
            </div>
          </div>
          <div className={styles.Portofoliofirst}>
            <h1>Mon portfolio</h1>
            <p>Ici découvrez mon portfolio ...</p>
            <div className={styles.scrollDown}>
              Scroll<div className={styles.arrow}></div>
            </div>
          </div>
        </div>

        <section
          className={`${styles.panel} ${styles.red212}`}
          ref={addToPanelsRef}
        >
          <PortofolioCard
            projectTitle="Faire Passer une librairie Jquery vers React"
            demoLink="https://optimistic-shockley-a18fe4.netlify.app/"
            repoGitLink="https://github.com/Webnume/Y.GABA_14_18032021"
            technos={["html", "css", "js", "react"]}
            mission="Convertir une application entière et ses plugins de Jquery vers
            React en ajoutant un système de gestion d'état Redux. Déployer un
            composant en librairie sur NPM."
            skills={[
              "Refondre une application pour réduire la dette technique",
              "Analyser la performance d'une application web",
              "Déployer une application front-end",
              "Programmer en JavaScript avec la programmation fonctionnelle",
            ]}
            imgSrc="webnume_projet_14.png"
            imgAlt="projet 14"
            backgroundImg="pexels-picjumbocom-196645.jpg"
          />
        </section>
        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Utiliser une API pour un compte utilisateur bancaire avec React"
            demoLink="https://github.com/Webnume/Y.GABA_13_18032021"
            repoGitLink="https://github.com/Webnume/Y.GABA_13_18032021"
            technos={["html", "css", "js", "react"]}
            mission="Compléter le code du site en mettant en place une authentification via JWT (JSON Web Tokens). Ecrire des appels à l'API REST pour connecter le front au back et modéliser une API."
            skills={[
              "Implémenter un gestionnaire d'état dans une application React avec Redux",
              "Interagir avec une API",
              "Modéliser une API",
              "S'authentifier à une API",
            ]}
            imgSrc="webnume_projet_13.png"
            imgAlt="projet 13"
            backgroundImg="pexels-rodnae-productions-7821706.jpg"
          />
        </section>
        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Développer un tableau de bord d'analytics avec React"
            demoLink="https://gallant-kare-abce48.netlify.app/"
            repoGitLink="https://github.com/Webnume/Y.GABA_12_Netlify_18032021"
            technos={["html", "css", "js", "react"]}
            mission="Intégrer des graphiques et des diagrammes avec React pour SportSee, un tableau de bord d'analytics de sport. Une API est utilisée pour récupérer les données."
            skills={[
              "Assurer la qualité des données d'une application",
              "Interagir avec un service Web",
              "Développer des éléments graphiques avancés à l'aide de bibliothèques JavaScript",
              "Produire de la documentation technique pour une application",
            ]}
            imgSrc="webnume_projet_12.png"
            imgAlt="projet 12"
            backgroundImg="pexels-anna-nekrashevich-6802042.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Développer une application Web avec React et React Router"
            demoLink="https://kasa-oc.netlify.app/"
            repoGitLink="https://github.com/Webnume/Y.GABA_11_18032021"
            technos={["html", "css", "js", "react", "git"]}
            mission="Implémenter le front-end de Kasa, une application de location de logements. Mettre en place des composants avec React et les routes de l'application avec React Router.
"
            skills={[
              "Développer les routes d'une application web avec React Router",
              "Initialiser une application web avec un framework",
              "Créer des composants avec React",
            ]}
            imgSrc="webnume_projet_11.png"
            imgAlt="projet 11"
            backgroundImg="pexels-dom-j-310435.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Définir les besoins pour une app de soutien scolaire"
            demoLink="https://public.zenkit.com/i/u7x1VngwAd/F-ZRpoF0X/page-connexion?v=nwuwn4JCAC"
            repoGitLink="https://public.zenkit.com/i/u7x1VngwAd/F-ZRpoF0X/page-connexion?v=nwuwn4JCAC"
            technos={["html", "css", "js", "react"]}
            mission="Définir les besoins d'une association de soutien scolaire avec les outils agiles comme les User Stories. Disponibles sur la plateforme Zenkit "
            skills={[
              "Les diagrammes de cas d’usage.",
              "Les user stories avec critère(s) d’acceptation.",
              "Les maquettes du site.",
              "Le tableau Kanban.",
            ]}
            imgSrc="webnume_projet_10.png"
            imgAlt="projet 10"
            backgroundImg="pexels-george-becker-374918.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Débugger et tester un SaaS RH"
            demoLink="https://webnume.github.io/Y.GABA_9_18032021/"
            repoGitLink="https://github.com/Webnume/Y.GABA_9_18032021"
            technos={["html", "css", "js", "react", "git", "jest"]}
            mission="L'application de gestion de notes de frais Billed est pleine de bugs. Correction du code et implémentation des tests unitaires et d'intégration pour que ce ne soit plus le cas."
            skills={[
              "Ecrire des tests unitaires avec JavaScript",
              "Débugger une application web avec le Chrome Debugger",
              "Rédiger un plan de test end-to-end manuel",
              "Ecrire des tests d'intégration avec JavaScript",
            ]}
            imgSrc="webnume_projet_9.png"
            imgAlt="projet 9"
            backgroundImg="pexels-kindel-media-8325709.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Développer un algorithme de recherche en JavaScript"
            demoLink="https://webnume.github.io/Y.GABA_7_18032021/"
            repoGitLink="https://github.com/Webnume/Y.GABA_7_18032021/tree/Algorithme-2"
            technos={["html", "css", "js", "git"]}
            mission="Implémenter un algorithme de recherche de recettes de cuisines pour le site Les Petits Plats grâce à des outils et méthodes avancées de Javascript ainsi que Bootstrap pour l'interface."
            skills={[
              "Analyser un problème informatique",
              "Développer un algorithme pour résoudre un problème",
            ]}
            imgSrc="webnume_projet_7.png"
            imgAlt="projet 7"
            backgroundImg="pexels-jakson-martins-3503098.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Créer un site accessible pour une plateforme de photographes"
            demoLink="https://webnume.github.io/Y.GABA_6_18032021/index.html"
            repoGitLink="https://github.com/Webnume/Y.GABA_6_18032021"
            technos={["html", "css", "js", "git"]}
            mission="Construire un prototype fonctionnel en fournissant tout le HTML, le CSS et le JavaScript nécessaires pour l'équipe de back-end qui l'intégrera une fois terminé."
            skills={[
              "Gérer les évènements d'un site avec JavaScript",
              "Développer une application web modulaire avec des design patterns",
              "Ecrire du code JavaScript maintenable",
              "Assurer l'accessibilité d'un site web",
            ]}
            imgSrc="webnume_projet_6.png"
            imgAlt="projet 6"
            backgroundImg="pexels-produtora-midtrack-7130236.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Créez une landing page avec Javascript"
            demoLink="https://webnume.github.io/Y.GABA_4_18032021/index.html"
            repoGitLink="https://github.com/Webnume/Y.GABA_4_18032021"
            technos={["html", "css", "js", "git"]}
            mission="Construire un prototype fonctionnel en fournissant tout le HTML, le CSS et le JavaScript nécessaires pour l'équipe de back-end qui l'intégrera une fois terminé."
            skills={[
              "travailler sur un repo GitHub forké",
              "refactoriser et utiliser des fichiers séparés pour le HTML, le CSS et le JavaScript",
              "tester manuellement les fonctionnalités, les entrées de formulaire et l'affichage responsive.",
            ]}
            imgSrc="webnume_projet_4.png"
            imgAlt="projet 4"
            backgroundImg="pexels-francesco-ungaro-1670977.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Dynamiser une page web avec des animations CSS"
            demoLink="https://webnume.github.io/Y.GABA_3_18032021/"
            repoGitLink="https://github.com/Webnume/Y.GABA_3_18032021"
            technos={["html", "css", "js", "sass", "git"]}
            mission="Développer un site à partir d'une maquette et l'animer avec du CSS."
            skills={[
              "Assurer la cohérence graphique d'un site web",
              "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
              "Mettre en œuvre des effets CSS graphiques avancés",
              "Mettre en place une structure de navigation pour un site web",
            ]}
            imgSrc="webnume_projet_3.png"
            imgAlt="projet 3"
            backgroundImg="pexels-emre-can-acer-2449364.jpg"
          />
        </section>

        <section className={`${styles.panel} `} ref={addToPanelsRef}>
          <PortofolioCard
            projectTitle="Transformer une maquette en site web avec HTML & CSS"
            demoLink="https://webnume.github.io/Y.GABA_2_18032021/"
            repoGitLink="https://github.com/Webnume/Y.GABA_2_18032021"
            technos={["html", "css", "js", "sass", "git"]}
            mission="Développer un site à partir d'une maquette Figma"
            skills={[
              "Utiliser un système de gestion de versions pour le suivi du projet",
              "Implémenter une interface responsive",
              "Intégrer du contenu conformément à une maquette",
            ]}
            imgSrc="webnume_projet_2.png"
            imgAlt="projet 2"
            backgroundImg="pexels-life-of-pix-4703.jpg"
          />
        </section>

        {/* <section className={`${styles.static} `} ref={addToPanelsRef}>
          static content
        </section> */}
      </main>

      {/* <Footer /> */}
    </div>
  );
}
