// JavaScript to toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the class 'nav-active' to show/hide menu
    navLinks.classList.toggle('nav-active');
    // Toggle 'open' class for hamburger animation (optional)
    hamburger.classList.toggle('open');
});

