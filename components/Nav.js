import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "../styles/Nav.module.css";
import Image from "next/image";

function Nav() {
  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  const [showLinks, setShowLinks] = useState(false);

  const handleShowLinks = () => {
    setShowLinks(!showLinks);
  };

  const [logoDimensions, setLogoDimensions] = useState({
    width: 272,
    height: 160,
  });

  const listenScrollEvent = () => {
    if (window.scrollY < 73) {
      return setLogoDimensions({ width: 272, height: 160 });
    } else if (window.scrollY > 70) {
      return setLogoDimensions({ width: 150, height: 100 });
    }
  };

  return (
    <nav
      className={`${styles.navbar} ${showLinks ? styles.shownav : "hide-nav"}`}
    >
      <div className={styles.navbar__logo}>
        <Image
          src="/logo.svg"
          alt="Webnumerik Logo"
          width={logoDimensions.width}
          height={logoDimensions.height}
        />
      </div>
      <ul className={styles.navbar__links}>
        <li className={`${styles.navbar__item} ${styles.slideInDown1}`}>
          <Link href="/">
            <a className={styles.navbar__link}>HOME</a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown2}`}>
          <Link href="/about">
            <a className={styles.navbar__link}>ABOUT</a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown3}`}>
          <Link href="/portfolio">
            <a className={styles.navbar__link}>PORTFOLIO</a>
          </Link>
        </li>
        <li className={`${styles.navbar__item} ${styles.slideInDown4}`}>
          <Link href="/contact">
            <a className={styles.navbar__link}>CONTACT</a>
          </Link>
        </li>
      </ul>
      <button className={styles.navbar__burger} onClick={handleShowLinks}>
        <span className={styles.burgerbar}></span>
      </button>
    </nav>
  );
}

export default Nav;
