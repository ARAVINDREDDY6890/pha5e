document.addEventListener('DOMContentLoaded', () => {
    // Initial animations using GSAP
    gsap.to('.title', { duration: 1, y: 0, opacity: 1, delay: 0.5 });
    gsap.to('.subtitle', { duration: 1, y: 0, opacity: 1, delay: 1 });
    gsap.to('.cta-button', { duration: 1, y: 0, opacity: 1, delay: 1.5 });

    // Mouse movement effect
    document.querySelector('.hero').addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (centerX - clientX) * 0.05;
        const moveY = (centerY - clientY) * 0.05;

        document.querySelector('.background').style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
});