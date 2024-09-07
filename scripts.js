// scripts.js

// Initialize AOS (Animate On Scroll)
document.addEventListener("DOMContentLoaded", function() {
    AOS.init({
        duration: 1000, // Animation duration
        easing: 'ease-in-out', // Animation easing
        once: true // Whether animation should happen only once or every time you scroll up/down
    });
});

// Optional: Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
