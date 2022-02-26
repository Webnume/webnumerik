import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function portofolioGsapAnimations() {
  const panel = (panelRef) => {
    // console.log(panelRef);
    return panelRef.forEach((panel, i) => {
      console.log(panel, i);
      ScrollTrigger.create({
        trigger: panel,
        start: "top top",
        pin: i === panelRef.length - 1 ? false : true,
        //end:"bottom 100",
        pinSpacing: false,
      });
    });
  };
  // const panelContent = (projectTitleRef) => {
  //   const tl = gsap.timeline({
  //     ScrollTrigger: {
  //       trigger: projectTitleRef,
  //       markers: true,
  //       start: "top 80%",
  //       end: "top 30%",
  //       scrub: 1,
  //     },
  //   });

  //   tl.from(projectTitleRef, { x: -1000, duration: 2, ease: "elastic" });
  //   // .to(".class2", { rotation: -360, duration: 1, ease: "elastic" })
  //   // .to(".class3", { rotation: -180, duration: 1, ease: "elastic" });
  // };
  return { panel };
}
export default portofolioGsapAnimations;
