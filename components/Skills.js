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
import Image from "next/image";
import { nanoid } from "nanoid";

const logos = [
  {
    id: "html",
    fontAwesome: faHtml5,
    image: "",
    classname: styles.logoHtml5,
    hoverDescription: "Html",
    href: "https://developer.mozilla.org/fr/docs/Web/HTML",
  },
  {
    id: "css",
    fontAwesome: faCss3Alt,
    image: "",
    classname: styles.logoCss3,
    hoverDescription: "Css",
    href: "https://developer.mozilla.org/fr/docs/Web/CSS",
  },
  {
    id: "sass",
    fontAwesome: faSass,
    image: "",
    classname: styles.logoSass,
    hoverDescription: "Préprocesseur Sass",
    href: "https://sass-lang.com/",
  },
  {
    id: "js",
    fontAwesome: faJsSquare,
    image: "",
    classname: styles.logoJs,
    hoverDescription: "Javascript",
    href: "https://developer.mozilla.org/fr/docs/Web/JavaScript",
  },
  {
    id: "react",
    fontAwesome: faReact,
    image: "",
    classname: styles.logoReact,
    hoverDescription: "React",
    href: "https://reactjs.org/",
  },
  {
    id: "git",
    fontAwesome: faGitSquare,
    image: "",
    classname: styles.logoGit,
    hoverDescription: "Git versionning",
    href: "https://git-scm.com/",
  },
  {
    id: "jest",
    fontAwesome: null,
    image: "jest-icon.svg",
    classname: styles.logoJest,
    hoverDescription: "Jest/ React Testing Library",
    href: "https://jestjs.io/",
  },
  {
    id: "cypress",
    fontAwesome: null,
    image: "cypress-io.png",
    classname: styles.logoJest,
    hoverDescription: "E2E tests with Cypress",
    href: "https://www.cypress.io/",
  },
  {
    id: "typeScript",
    fontAwesome: null,
    image: "typescript-original.svg",
    classname: styles.logoJest,
    hoverDescription: "TypeScript",
    href: "https://www.typescriptlang.org/",
  },
  {
    id: "styledComponents",
    fontAwesome: null,
    image: "styled-components.svg",
    classname: styles.styledcomponents,
    hoverDescription: "Styled Components",
    href: "https://www.styled-components.com/",
  },
  {
    id: "redux",
    fontAwesome: null,
    image: "redux-logo-vector.svg",
    classname: styles.logoJest,
    hoverDescription: "Redux",
    href: "https://redux.js.org/",
  },
  {
    id: "nextjs",
    fontAwesome: null,
    image: "nextjs-logo.svg",
    classname: styles.logoJest,
    hoverDescription: "NextJs",
    href: "https://nextjs.org/",
  },
  {
    id: "react-query",
    fontAwesome: null,
    image: "react-query.svg",
    classname: styles.logoJest,
    hoverDescription: "React Query",
    href: "https://tanstack.com/",
  },
];

const Skills = ({ technos }) => {
  const [inHover, setHover] = useState("");

  const skillSelector = (tech) => {
    const logo = logos.find((logo) => logo.id === tech);
    return (
      logo && (
        <div key={logo.id}>
          <a href={logo.href} target="_blank" rel="noopener noreferrer">
            <span
              className={logo.classname}
              onMouseEnter={() => setHover(logo.hoverDescription)}
              onMouseLeave={() => setHover("")}
            >
              {logo.fontAwesome ? (
                <FontAwesomeIcon icon={logo.fontAwesome} />
              ) : (
                <Image
                  src={`/${logo.image}`}
                  alt={logo.id}
                  width={30}
                  height={30}
                />
              )}
            </span>
          </a>
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
