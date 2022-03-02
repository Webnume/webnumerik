import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });

function indexGsapAnimations() {
  const welcome1 = (welcome1Ref) => {
    return tl.from(welcome1Ref, {
      duration: 1,
      ease: "back.out(1.7)",
      y: -200,
      opacity: 0,
      repeat: 0,
    });
  };

  const logos = (logosRef) => {
    return tl.from(logosRef, { x: -2000, duration: 1 });
  };

  const typingEffect = () => {
    tl.to("#reactText", { duration: 2, text: "ReactJS!" });
  };

  return { welcome1, typingEffect, logos };
}

export default indexGsapAnimations;
