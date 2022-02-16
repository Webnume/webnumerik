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

// const indexGaspAnimation = {
//   welcome2(welcome2Ref) {
//     let tl2 = gsap.timeline({
//       repeat: 0,
//       repeatDelay: 1,
//       scrollTrigger: {
//         trigger: welcome2Ref,
//         start: "top bottom",
//         end: "+=400",
//         scrub: true,
//         // markers: true,
//       },
//     });
//     return tl2.from(welcome2Ref, {
//       height: 0,
//       backgroundColor: "#fff",
//       opacity: 0,
//       x: -2000,
//       width: 0,
//       filter: "blur(4px)",
//       ease: "Power1.out",
//       // ease: "back.out(1.7)"
//     });
//   },
// };

export default indexGsapAnimations;
