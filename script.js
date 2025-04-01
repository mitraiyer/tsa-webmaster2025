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

  // Change navbar background color after passing hero section
  window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('.hero-section');
    const quoteSection = document.querySelector('.quote-video-section');
  
    const scrollY = window.scrollY;
    const heroTop = heroSection.offsetTop;
    const heroBottom = heroTop + heroSection.offsetHeight;
    const quoteTop = quoteSection.offsetTop;
    const quoteBottom = quoteTop + quoteSection.offsetHeight;
  
    // Clear all navbar state classes
    navbar.classList.remove('scrolled', 'blurred', 'at-top');
  
    // Case 1: At top of page (completely transparent)
    if (scrollY === 0) {
      navbar.classList.add('at-top');
    }
  
    // Case 2: Over regular section between the videos
    else if (scrollY > heroBottom && scrollY < quoteTop) {
      navbar.classList.add('scrolled'); // Cream background
    }
  
    // Case 3: Over either video section
    else if (
      (scrollY > heroTop && scrollY < heroBottom) ||
      (scrollY > quoteTop && scrollY < quoteBottom)
    ) {
      navbar.classList.add('blurred'); // Blurred background
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




