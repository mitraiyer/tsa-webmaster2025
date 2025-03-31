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

// Change navbar background color after passing hero section
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const scrollY = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;

    // Clear all navbar state classes
    navbar.classList.remove('scrolled', 'blurred', 'at-top');

    // Case 1: At top of page (completely transparent)
    if (scrollY === 0) {
        navbar.classList.add('at-top');
    }
    // Case 2: Over regular section
    else if (scrollY > heroBottom) {
        navbar.classList.add('scrolled'); // Cream background
    }
});