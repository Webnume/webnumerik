import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Portofolio.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { skillsLogosData as logos } from "../utils/data/skillsLogosData";
import { useMousePosition } from "../hooks/useMousePosition";

const Skills = ({ technos }) => {
  const [inHover, setHover] = useState("");
  const position = useMousePosition();

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
              <Image src={`/${logo.image}`} alt={logo.id} width={35} height={35} />
            )}
          </span>
        </div>
      )
    );
  };

  return (
    <>
      <span
        className={styles.infos}
        style={{
          left: position.x > 200 ? position.x - 150 : position.x,
          top: 15,
        }}
      >
        {" "}
        {inHover}
      </span>
      <div className={styles.skills}>
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
            case "nodejs":
              return skillSelector("nodejs");
            case "circleCI":
              return skillSelector("circleCI");
            case "axios":
              return skillSelector("axios");
            case "vitest":
              return skillSelector("vitest");
            default:
              return null;
          }
        })}
      </div>
    </>
  );
};

export default Skills;
