import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";
import Socialmedia from "./Socialmedia";

function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [showLinks, setShowLinks] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };
  const listenScrollEvent = (event) => {
    if (window.scrollY < 33) {
      return setScroll(false);
    } else if (window.scrollY > 30) {
      return setScroll(true);
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${showLinks ? styles.shownav : "hide-nav"} ${
        scroll ? styles.reduce : "extend-nav"
      }`}
    >
      <div className={styles.logo}>
        <Link href="/">
          <a rel="noopener noreferrer">
            <Image
              src="/logo.svg"
              alt="Webnumerik Logo"
              className=""
              width={272}
              height={160}
            />
          </a>
        </Link>
      </div>
      <ul className={styles.navbar__links}>
        <li className={`${styles.navbar__item} ${styles.slideInDown1}`}>
          <Link href="/">
            <a className={styles.navbar__link}>
              <span>HOME</span>
            </a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown2}`}>
          <Link href="/about">
            <a className={styles.navbar__link}>
              <span>ABOUT</span>
            </a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown3}`}>
          <Link href="/portfolio">
            <a className={styles.navbar__link}>
              <span>PORTFOLIO</span>
            </a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown4}`}>
          <Link href="/contact">
            <a className={styles.navbar__link}>
              <span>CONTACT</span>
            </a>
          </Link>
        </li>
      </ul>
      <Socialmedia />
      <button className={styles.navbar__burger} onClick={handleShowLinks}>
        <span className={styles.burgerbar}></span>
      </button>
    </nav>
  );
}

export default Nav;
