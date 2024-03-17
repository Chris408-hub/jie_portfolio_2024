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

// tool icon animation
document.querySelectorAll(".tool-icon").forEach((icon, index) => {
  gsap.from(icon, {
    scrollTrigger: {
      trigger: icon,
      toggleActions: "play none none none",
      start: "top 90%", 
    },
    opacity: 0,
    rotation: 180,
    duration: 1 + index * 0.2, 
  });
});




}