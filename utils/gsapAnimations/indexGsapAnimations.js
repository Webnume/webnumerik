import { gsap } from "gsap";
import { TextPlugin } from "gsap/dist/TextPlugin";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(TextPlugin, ScrollTrigger);

let tl = gsap.timeline({ repeat: 0, repeatDelay: 1 });


/**
 * This is a function that returns an object. The object contains functions that return a timeline.
 * 
*/
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

/**
 * It moves the logos from the left to the right.
 * @param {HTMLElement} logosRef
 * @returns A TimelineMax instance.
 */
  const logos = (logosRef) => {
    return tl.from(logosRef, { x: -2000, duration: 1 });
  };

/**
 * It changes the text of the div with the id of "reactText" to "ReactJS!" after a delay of 1 second.
 */
  const typingEffect = () => {
    tl.to("#reactText", { duration: 2, text: "ReactJS!", delay:1 });
  };

  const button = (buttonRef) => {
    return tl.from(buttonRef, {
      bottom: "-3rem",
      // duration:.5,
      ease: "power4.out(1.7)",
      opacity: 0,
    });
  };

  return { welcome1, typingEffect, logos, button };
}

export default indexGsapAnimations;
