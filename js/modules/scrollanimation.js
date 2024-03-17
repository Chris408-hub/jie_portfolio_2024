export function scrollForm() {
    
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);

  


    ScrollTrigger.create({
        trigger: "#send-message", 
        start: "top top", 
        end: "top top", 
        onEnter: () => gsap.to(window, { scrollTo: {y: "#send-message", offsetY: 25}, duration: 1.5 }) // 平滑滚动到表单，offsetY留出一些空间以确保表单完整显示
    });

    gsap.from("#send-message", {
        scrollTrigger: {
        trigger: "#send-message",
        start: "top 80%", 
        end: "bottom center", 
        toggleActions: "play none none none"
    },
        opacity: 0.5, 
        y: 50, 
        duration: 1.5 
    });
    



}