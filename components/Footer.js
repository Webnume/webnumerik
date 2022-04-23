import React from "react";
import styles from "../styles/Home.module.scss";

const Footer = () => {
    const year = new Date().getFullYear() ;
  return (
    <footer className={styles.footer}>
         <span>{`© ${year} by WebNumerik`}</span>
         <span>Developed with Next.js</span>
    </footer>
  );
};

export default Footer;
