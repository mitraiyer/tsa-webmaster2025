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

window.onload = typeSentence; // Starts typing when the page loads

// Toggle Mobile Menu
document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-links').classList.toggle('active');
});

// Change navbar background based on scroll position
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  const heroSection = document.querySelector('.hero-section');
  const quoteSection = document.querySelector('.quote-video-section');

  const scrollY = window.scrollY;
  const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
  const quoteTop = quoteSection.offsetTop;
  const quoteBottom = quoteTop + quoteSection.offsetHeight;

  // Reset navbar state classes
  navbar.classList.remove('scrolled', 'blurred', 'at-top', 'quote-section');

  // Case 1: At the very top of the page
  if (scrollY === 0) {
    navbar.classList.add('at-top');
  }
  // Case 2: Over the video section
  else if (scrollY < heroBottom) {
    navbar.classList.add('blurred');
  }
  // Case 3: Over the quote section
  else if (scrollY >= quoteTop && scrollY <= quoteBottom) {
    navbar.classList.add('quote-section');
  }
  // Case 4: Over text/content sections
  else {
    navbar.classList.add('scrolled');
  }
});

//user review
document.addEventListener("DOMContentLoaded", () => {
    const track = document.getElementById("carousel-track");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const dotsContainer = document.getElementById("carousel-dots");
    const reviews = track.children;
  
    let currentSlide = 0;
    const totalSlides = Math.ceil(reviews.length / 3);
  
    // Dots setup
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement("span");
      dot.className = "dot h-3 w-3 rounded-full bg-gray-300 inline-block cursor-pointer";
      if (i === 0) dot.classList.add("bg-[#093C34]");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  
    const updateDots = () => {
      dotsContainer.querySelectorAll(".dot").forEach((dot, i) => {
        dot.classList.toggle("bg-[#093C34]", i === currentSlide);
        dot.classList.toggle("bg-gray-300", i !== currentSlide);
      });
    };
  
    const goToSlide = (index) => {
      currentSlide = index;
      const slideWidth = track.offsetWidth / 3;
      track.style.transform = `translateX(-${index * slideWidth * 3}px)`;
      updateDots();
    };
  
    const nextSlide = () => {
      currentSlide = (currentSlide + 1) % totalSlides;
      goToSlide(currentSlide);
    };
  
    const prevSlide = () => {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      goToSlide(currentSlide);
    };
  
    // Arrow events
    nextBtn.addEventListener("click", nextSlide);
    prevBtn.addEventListener("click", prevSlide);
  
    // Auto-scroll
    setInterval(nextSlide, 5000);
  
    // Swipe support
    let startX = 0;
    let endX = 0;
  
    track.addEventListener("touchstart", (e) => {
      startX = e.touches[0].clientX;
    });
  
    track.addEventListener("touchend", (e) => {
      endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) nextSlide();
      else if (endX - startX > 50) prevSlide();
    });
});
// script.js
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const logo = document.querySelector('.logo');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
            navbar.classList.remove('at-top');
        } else {
            navbar.classList.remove('scrolled');
            navbar.classList.add('at-top');
        }
    });
});
