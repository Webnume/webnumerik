import React, { useState, useEffect, useRef } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHtml5, faCss3 } from "@fortawesome/free-brands-svg-icons";

export default function Home() {
  const navRef = useRef();
  useEffect(() => {
    gsap.from(navRef.current, {
      duration: 1,
      ease: "back.out(1.7)",
      y: -100,
      opacity: 0,
      repeat: 0,
    });
    gsap.registerPlugin(TextPlugin);
    gsap.to("#reactText", { duration: 2, text: "ReactJS!", delay: 1 });
  }, []);
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main} ref={navRef}>
        <h2 className={styles.description}>
          Je suis Yves, freelance Front-end{" "}
        </h2>
        <h1 className={styles.title}>
          Développeur Web{" "}
          <a href="https://nextjs.org" id="reactText">
            !RJeSact
          </a>
        </h1>
        <div className={styles.icons}>
          {/* <FontAwesomeIcon icon={faHtml5} />
          <FontAwesomeIcon icon={faCss3} />
          <FontAwesomeIcon icon={faHtml5} /> */}
          
        </div>
      </main>

      <Footer />
    </div>
  );
}
