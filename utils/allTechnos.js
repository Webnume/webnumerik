import Skills from "../components/Skills";
import { portfolioData } from "./data/portfolioData";

export const allTechnos = () => {
  const allTechs = portfolioData.map(({ technos }) => technos).flat();
  return [...new Set(allTechs)];
};
