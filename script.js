// JavaScript to toggle navigation menu
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    // Toggle the class 'nav-active' to show/hide menu
    navLinks.classList.toggle('nav-active');
    // Toggle 'open' class for hamburger animation (optional)
    hamburger.classList.toggle('open');
});

// Function to open the lightbox
function openLightbox(imgElement) {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    // Set the source of the lightbox image to the clicked image's source
    lightboxImg.src = imgElement.src;
    
    // Show the lightbox
    lightbox.style.display = "flex";

    // Add a small animation to zoom in the image slightly
    setTimeout(() => {
        lightboxImg.style.transform = "scale(1)";
    }, 10);
}

// Function to close the lightbox
function closeLightbox() {
    var lightbox = document.getElementById("lightbox");
    var lightboxImg = document.getElementById("lightbox-img");
    
    // Zoom out the image before closing the lightbox
    lightboxImg.style.transform = "scale(0.8)";
    
    // After the zoom-out animation, hide the lightbox
    setTimeout(() => {
        lightbox.style.display = "none";
    }, 200);
}

    // Smooth scrolling for internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

