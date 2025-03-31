// script.js
const sentence = "Welcome to Noorani";
let index = 0;

function typeSentence() {
    if (index < sentence.length) {
        document.getElementById("sentence").textContent += sentence[index];
        index++;
        setTimeout(typeSentence, 100); // Adjust typing speed here
    }
}

window.onload = typeSentence; // Starts typing when the page loads

// Toggle Mobile Menu
document.querySelector('.menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// Change navbar background color based on scroll position
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const ourRootsSection = document.querySelector('#our-roots'); // Get the Our Roots section
    const quoteSection = document.querySelector('.quote-video-section');

    const scrollY = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const ourRootsTop = ourRootsSection.offsetTop;
    const quoteTop = quoteSection.offsetTop;

    // Clear all navbar state classes
    navbar.classList.remove('scrolled', 'at-top', 'blurred');

    // Case 1: At top of page (completely transparent)
    if (scrollY === 0) {
        navbar.classList.add('at-top');
    }
    // Case 2: Over the hero section (transparent)
    else if (scrollY < heroBottom) {
        navbar.classList.remove('scrolled'); // Keep it transparent
    }
    // Case 3: Over the Our Roots section (solid background)
    else if (scrollY >= ourRootsTop) {
        navbar.classList.add('scrolled'); // Add class for solid background
    }
    // Case 4: Over the Quote Over Video section (transparent blurred background)
    else if (scrollY >= quoteTop) {
        navbar.classList.add('blurred'); // Add class for blurred background
    }
});