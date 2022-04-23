import React, { useEffect, useRef } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus, faEquals } from "@fortawesome/free-solid-svg-icons";
import indexGsapAnimations from "../utils/gsapAnimations/indexGsapAnimations";
import Link from "next/link";

export default function Home() {
  const logosRef = useRef();
  const welcome1Ref = useRef();
  const buttonRef = useRef();

  useEffect(() => {
    //Icons Timelines
    indexGsapAnimations().welcome1(welcome1Ref.current);
    indexGsapAnimations().logos(logosRef.current);
    indexGsapAnimations().button(buttonRef.current);
    indexGsapAnimations().typingEffect();
  }, []);
  return (
    <div className="container">
      <Head>
        <title>WebNumerik - Développement Web React</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <div className={styles.welcome1} ref={welcome1Ref}>
          <section className={styles.video}>
            <video loop autoPlay muted>
              <source src="./Thunderstorm.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </section>
          <h2 className={styles.description}>
            Je suis <span className={styles.myName}>Yves</span>{" "}
          </h2>
          <h1 className={styles.title}>
            Développeur Web{" "}
            <span id="reactText" className={styles.reactText}>
              !RJeSact
            </span>
          </h1>
          <div className={styles.icons} ref={logosRef}>
            <span className={styles.logoHtml5}>
              <FontAwesomeIcon icon={faHtml5} />
            </span>
            <span className={styles.operators}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className={styles.logoCss3}>
              <FontAwesomeIcon icon={faCss3Alt} />
            </span>
            <span className={styles.operators}>
              <FontAwesomeIcon icon={faPlus} />
            </span>
            <span className={styles.logoJs}>
              <FontAwesomeIcon icon={faJsSquare} />
            </span>
            <span className={styles.operators}>
              <FontAwesomeIcon icon={faEquals} />
            </span>
            <span className={styles.logoReact}>
              <FontAwesomeIcon icon={faReact} />
            </span>
          </div>
          <Link href="/contact">
            <a>
              <button className={styles.buttonContact} ref={buttonRef}>
                CONTACTEZ-MOI
              </button>
            </a>
          </Link>
        </div>
      </main>
    </div>
  );
}
