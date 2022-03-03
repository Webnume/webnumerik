import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faJsSquare,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { faPlus, faEquals } from "@fortawesome/free-solid-svg-icons";
import indexGsapAnimations from "../utils/gsapAnimations/indexGsapAnimations";

export default function Home() {
  const logosRef = useRef();
  const welcome1Ref = useRef();

  useEffect(() => {
    //Icons Timelines
    indexGsapAnimations().welcome1(welcome1Ref.current);
    indexGsapAnimations().logos(logosRef.current);
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
          <h2 className={styles.description}>
            Je suis Yves, freelance Front-end{" "}
          </h2>
          <h1 className={styles.title}>
            Développeur Web{" "}
            <a href="https://nextjs.org" id="reactText"
            className={styles.reactText}
            >
              !RJeSact
            </a>
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
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
}
