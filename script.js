// script.js

// Typing Effect
const sentence = "Welcome to Noorani";
let index = 0;

function typeSentence() {
  const element = document.getElementById("sentence");
  if (element && index < sentence.length) {
    element.textContent += sentence[index];
    index++;
    setTimeout(typeSentence, 100); // Adjust typing speed here
  }
}

window.onload = typeSentence;  // Starts typing when the page loads
document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in-element');
  if (fadeInElements.length > 0) {
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target); // Stop observing once it's in view
              }
          });
      }, { threshold: 0.5 });

      fadeInElements.forEach(element => {
          observer.observe(element);
      });
  } else {
      console.warn('No elements with the "fade-in-element" class found!');
  }
});

//   Toggle Mobile Menu
  document.querySelector('.menu-btn').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('active');
  });
// Change navbar background based on scroll position
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const quoteSection = document.querySelector('.quote-video-section');
    const splitSection = document.querySelector('.split-section');
  
    const scrollY = window.scrollY;
    const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
    const quoteTop = quoteSection.offsetTop;
    const quoteBottom = quoteTop + quoteSection.offsetHeight;
    const splitTop = splitSection.offsetTop;
  
    // Reset navbar state classes
    navbar.classList.remove('scrolled', 'blurred', 'at-top');
  
    // Case 1: At the very top of the page
    if (scrollY === 0) {
      navbar.classList.add('at-top');
    }
    // Case 2: Over the header video section
    else if (scrollY < heroBottom) {
      navbar.classList.add('blurred');
      navbar.classList.remove('scrolled'); // Ensure scrolled class is removed
    }
    // Case 3: Over the quote section
    else if (scrollY >= quoteTop && scrollY <= quoteBottom) {
      navbar.classList.add('blurred'); // Keep it blurred for the quote section
    }
    // Case 4: Over the split section
    else if (scrollY >= splitTop) {
      navbar.classList.add('scrolled');
    }
  });
  window.addEventListener('load', function() {
  document.body.classList.add('loaded');
});



document.querySelector(".scroll-down-btn").addEventListener("click", function() {
  const nextSection = document.querySelector(".farm-to-table"); // Replace with your actual section class
  if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
  }
});
document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".journey-step");

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add("visible");
              observer.unobserve(entry.target);
          }
      });
  }, { threshold: 0.3 });

  steps.forEach(step => {
      observer.observe(step);
  });
});




