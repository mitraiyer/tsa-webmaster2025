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


document.addEventListener('DOMContentLoaded', function() {
  // Create an intersection observer
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // When the element is in view, add the 'visible' class
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Stop observing the element once it's in view
      }
    });
  }, { threshold: 0.5 }); // Trigger when 50% of the element is visible

  // Select all elements with the 'fade-in-element' class
  const fadeInElements = document.querySelectorAll('.fade-in-element');

  // Observe each element
  fadeInElements.forEach(element => {
    observer.observe(element);
  });
});

