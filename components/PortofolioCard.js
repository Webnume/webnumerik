import React, { useState, useRef } from "react";
import styles from "../styles/Portofolio.module.scss";
import Modal from "./Modal";
import Image from "next/image";
import { nanoid } from "nanoid";
import Skills from "./Skills";

function PortofolioCard({
  projectTitle,
  demoLink,
  repoGitLink,
  technos,
  mission,
  skills,
  imgSrc,
  imgAlt,
  backgroundImg,
  flipvertical,
}) {
  const container = useRef();
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div
        className={
          flipvertical ? `${styles.flip} ${styles.flipvertical}` : styles.flip
        }
      >
        <div
          className={styles.front}
          style={{
            backgroundImage: " url(" + backgroundImg + ")",
          }}
        >
          <h2>{projectTitle}</h2>
          <ul className={styles.customlist2}>
            {technos.map((techno) => {
              return <li key={nanoid(10)}>{techno}</li>;
            })}
          </ul>
        </div>
        <div className={styles.back} onClick={() => setShowModal(true)}>
          <h2>{projectTitle}</h2>
          <p>{mission}</p>
          <div className={styles.openModal} onClick={() => setShowModal(true)}>
            <span></span>
          </div>
          <Modal
            onClose={() => setShowModal(false)}
            onTouchEnd={(e) => {
              setShowModal(false);
              e.preventDefault();
            }}
            show={showModal}
            backgroundImg={backgroundImg}
          >
            <div>
              <div style={{ position: "absolute", top: "0", left: "0" }}></div>
              <div className={styles.container} ref={container}>
                <div className={styles.content}>
                  <div className={`${styles.left}`} data-left>
                    <h1 className={styles.projecttitle} data-title>
                      {projectTitle}
                    </h1>
                    <span className={styles.siteImg}>
                      <a
                        href={demoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Image
                          src={`/${imgSrc}`}
                          alt={imgAlt}
                          width={200}
                          height={120}
                        />
                      </a>
                    </span>

                    <div className={styles.inner}>
                      {demoLink && (
                        <a
                          href={demoLink}
                          target="blank"
                          rel="noopener noreferrer"
                          className="hover-shadow hover-color"
                        >
                          <span>Live</span>
                          <span>D</span>
                          <span>e</span>
                          <span>m</span>
                          <span>o</span>
                        </a>
                      )}
                      {demoLink && repoGitLink && <span> / </span>}
                      {repoGitLink && (
                        <a
                          href={repoGitLink}
                          target="blank"
                          rel="noopener noreferrer"
                          className="hover-shadow hover-color"
                        >
                          <span>Git</span>
                          <span>H</span>
                          <span>u</span>
                          <span>b</span>
                        </a>
                      )}
                    </div>
                    <div className={styles.underThumb}>
                      <Skills technos={technos} />
                    </div>
                  </div>
                  <div className={styles.right} data-right>
                    <h2
                      className={`${styles.right} ${styles.descriptiontitle}`}
                    >
                      Description
                    </h2>
                    <p>{mission}</p>
                    <ul className={styles.customlist}>
                      {skills.map((skill) => {
                        return <li key={nanoid(10)}>{skill}</li>;
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
}

export default PortofolioCard;
