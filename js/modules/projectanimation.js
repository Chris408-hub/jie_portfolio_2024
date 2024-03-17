export function projectAnimation() {



    gsap.registerPlugin(ScrollTrigger);


    gsap.utils.toArray('.gallery-image').forEach(image => {
        gsap.from(image, {
            scrollTrigger: {
                trigger: image,
                toggleActions: 'play none none none',
                start: 'top 90%', 
            },
            opacity: 0, 
            scale: 0.8, 
            duration: 1, 
            ease: 'power1.out', 
        });
    });
}



