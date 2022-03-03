import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
gsap.config({
  nullTargetWarn: false,
});
function navGsapAnimations() {
  const navAnimation = () => {   
    const tl = gsap.timeline();
    const showAnim = gsap.from("[data-nav]", { 
        yPercent: -150,
        paused: true,
        duration: 0.5,
        opacity:.5,
        ease: "elastic"
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
