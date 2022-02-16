import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// let panels = gsap.utils.toArray(".panel")

// panels.forEach((panel, i) => {

//   ScrollTrigger.create({
//     trigger: panel,
//     start: "top top",
//     pin: i === panels.length -1 ? false : true,
//     //end:"bottom 100",
//     pinSpacing: false
//   });
// });

function portofolioGsapAnimations() {
  const panel = (panelRef) => {
    console.log(panelRef);
    return panelRef.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panelRef.length - 1 ? false : true,
        //end:"bottom 100",
        pinSpacing: false,
      });
    });
  };

  return { panel };
}
export default portofolioGsapAnimations;
