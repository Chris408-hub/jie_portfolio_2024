export function imgAnimation() {
    
    gsap.registerPlugin(ScrollTrigger);



// self img animation
gsap.from(".self img", {
  scrollTrigger: {
    trigger: ".self img",
    toggleActions: "play none none none",
    start: "top 80%", 
  },
  opacity: 0, 
  y: 50, 
  duration: 1.5 
});




}
