import React, { useState } from "react";
import styles from "../styles/Portofolio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faJsSquare,
  faReact,
  faGitSquare,
} from "@fortawesome/free-brands-svg-icons";

const logos = [
  {
    id: "html",
    fontAwesome: faHtml5,
    image: "",
    classname: styles.logoHtml5,
    hoverDescription: "Html",
  },
  {
    id: "css",
    fontAwesome: faCss3Alt,
    image: "",
    classname: styles.logoCss3,
    hoverDescription: "Css",
  },
  {
    id: "sass",
    fontAwesome: faSass,
    image: "",
    classname: styles.logoSass,
    hoverDescription: "Préprocesseur Sass",
  },
  {
    id: "js",
    fontAwesome: faJsSquare,
    image: "",
    classname: styles.logoJs,
    hoverDescription: "Javascript",
  },
  {
    id: "react",
    fontAwesome: faReact,
    image: "",
    classname: styles.logoReact,
    hoverDescription: "React",
  },
  {
    id: "git",
    fontAwesome: faGitSquare,
    image: "",
    classname: styles.logoGit,
    hoverDescription: "Git versionning",
  },
  {
    id: "jest",
    fontAwesome: null,
    image: "jest-icon.svg",
    classname: styles.logoJest,
    hoverDescription: "Jest/ React Testing Library",
  },
  {
    id: "cypress",
    fontAwesome: null,
    image: "cypress-io.png",
    classname: styles.logoJest,
    hoverDescription: "E2E tests with Cypress",
  },
  {
    id: "typeScript",
    fontAwesome: null,
    image: "typescript-original.svg",
    classname: styles.logoJest,
    hoverDescription: "TypeScript",
  },
  {
    id: "styledComponents",
    fontAwesome: null,
    image: "styled-components.svg",
    classname: styles.styledcomponents,
    hoverDescription: "Styled Components",
  },
  {
    id: "redux",
    fontAwesome: null,
    image: "redux-logo-vector.svg",
    classname: styles.logoJest,
    hoverDescription: "Redux",
  },
  {
    id: "nextjs",
    fontAwesome: null,
    image: "nextjs-logo.svg",
    classname: styles.logoJest,
    hoverDescription: "NextJs",
  },
  {
    id: "react-query",
    fontAwesome: null,
    image: "react-query.svg",
    classname: styles.logoJest,
    hoverDescription: "React Query",
  },
];

const Skills = ({ technos }) => {
  const [inHover, setHover] = useState("");

  const skillSelector = (tech) => {
    const logo = logos.find((logo) => logo.id === tech);
    return (
      logo && (
        <div key={logo.id}>
            <span
              className={logo.classname}
              onMouseEnter={() => setHover(logo.hoverDescription)}
              onMouseLeave={() => setHover("")}
            >
              {logo.fontAwesome ? (
                <FontAwesomeIcon icon={logo.fontAwesome} />
              ) : (
                <img src={`/${logo.image}`} alt="" />
              )}
            </span>
        </div>
      )
    );
  };

  return (
    <div className={styles.skills}>
      <span className={styles.infos}> {inHover}</span>
      {/* <span className={styles.skilltitle}>Stack </span> */}
      {technos.map((techno) => {
        switch (techno) {
          case "html":
            return skillSelector("html");
          case "css":
            return skillSelector("css");
          case "sass":
            return skillSelector("sass");
          case "js":
            return skillSelector("js");
          case "react":
            return skillSelector("react");
          case "git":
            return skillSelector("git");
          case "jest":
            return skillSelector("jest");
          case "cypress":
            return skillSelector("cypress");
          case "typeScript":
            return skillSelector("typeScript");
          case "styledComponents":
            return skillSelector("styledComponents");
          case "redux":
            return skillSelector("redux");
          case "nextjs":
            return skillSelector("nextjs");
          case "react-query":
            return skillSelector("react-query");
          default:
            return null;
        }
      })}
    </div>
  );
};

export default Skills;
