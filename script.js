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

window.onload = typeSentence;  // Starts typing when the page loads
     // Toggle Mobile Menu
     document.querySelector('.menu-btn').addEventListener('click', () => {
        document.querySelector('.nav-links').classList.toggle('active');
    });

    // Change navbar background color on scroll
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navbar.style.backgroundColor = 'var(--dark-green)'; // solid color when scrolled
        } else {
            navbar.style.backgroundColor = 'transparent'; // transparent when at top
        }
    });