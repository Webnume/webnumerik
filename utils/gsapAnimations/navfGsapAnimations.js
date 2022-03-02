import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
function navGsapAnimations() {
  const navAnimation = () => {
    // const q = gsap.utils.selector(panelsRef);
    const tl = gsap.timeline();const showAnim = gsap.from("[data-nav]", { 
        yPercent: -100,
        paused: true,
        duration: 0.2
      }).progress(1);
    return ScrollTrigger.create({
        start: "top top",
        end: 99999,
        onUpdate: (self) => {
          self.direction === -1 ? showAnim.play() : showAnim.reverse();
        },
      });
  };
  return { navAnimation };
}
export default navGsapAnimations;
