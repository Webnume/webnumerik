import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});

function portofolioGsapAnimations() {
  // console.log("portofolioGsapAnimations");
  const panel = (panelsRef) => {
    // const q = gsap.utils.selector(panelsRef);
    return panelsRef.forEach((panel, i) => {
      const q = gsap.utils.selector(panel);
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: panel,
          start: "-20% 20%",
          end: "+=500px",
          scrub: true,
          // markers: true,
        },
      });
      // console.log(panel);
      // console.log(panel.querySelector("[data-title],[data-left]"));
      tl.add("start")
        .from(
          q("[data-title],[data-left]"),
          {
            x: -100,
            opacity: 0,
            duration: 1.5,
            ease: "elastic",
            // scrollTrigger: {
            //   trigger: panel,
            //   start: "-10% 10%",
            //   end:"+=1000px",
            //   scrub: true,
            //   markers: true,
            // },
          },
          "start"
        )
        .from(
          q("[data-right]"),
          {
            x: 100,
            opacity: 0,
            duration: 1.5,
            ease: "elastic",
            // scrollTrigger: {
            //   trigger: panel,
            //   start: "top 10%",
            //   end: "top top",
            //   scrub: true,
            //   // markers: true,
            //   // snap: 5,
            // },
          },
          "start"
        );

      ScrollTrigger.create({
        // animation: tl,
        trigger: panel,
        start: "top top",
        // end: "top 60%",
        //   // pin: i === panelsRef.length - 1 ? false : true,
        //   // pinSpacing: false,
        snap: 1,
        scrub: 1,
        // markers: true,
      });
    });
  };
  return { panel };
}
export default portofolioGsapAnimations;
