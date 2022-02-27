import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function portofolioGsapAnimations() {
  const panel = (panelRef) => {
    // console.log(panelRef);

    const q = gsap.utils.selector(panelRef);
    console.log(q);
    // const tl= gsap.from(q("[data-title],[data-left]"), {
    //   x: 500,
    //   opacity: 0,
    //   duration: 1.5,
    //   ease: "elastic",
    //   // scrollTrigger: {
    //   //   trigger: "[data-title]",
    //   //   markers: true,
    //   //   start: "top 80%",
    //   //   end: "top 30%",
    //   //   scrub: 1,
    //   // },
    // });

    return panelRef.forEach((panel, i) => {
      const tl = gsap.timeline();
      const q = gsap.utils.selector(panel);
      tl.from(q("[data-title],[data-left]"), {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: "elastic",
        scrollTrigger: {
          trigger: panel.querySelector("[data-title]"),
          start: "top 70%",
          // end: "top bottom",
          scrub: true,
          markers: true,
        }
      });
      // console.log(panel, i, q(panel));
      ScrollTrigger.create({
        animation: tl,
        trigger: panel,
        // start: "top top",
        // end: "top 60%",
        pin: i === panelRef.length - 1 ? false : true,
        pinSpacing: false,
        snap: 5,
        // scrub: 1,
        markers: true,
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
