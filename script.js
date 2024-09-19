document.addEventListener('DOMContentLoaded', function() {
    const bars = document.querySelectorAll('.bar');

    gsap.set(bars, {height: 0});  
    
    bars.forEach((bar, index) => {
        
        gsap.to(bar, {
            height: bar.getAttribute('style').match(/height:\s?(\d+%)/)[1], 
            duration: 1,  
            delay: index * 0.3,  
            ease: "bounce.out"  
        });
    });
});
