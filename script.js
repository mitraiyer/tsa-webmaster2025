// script.js
// menu
// menu
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});
// User review
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

document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('.section');

  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
  };

  const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('active');
          } else {
              entry.target.classList.remove('active');
          }
      });
  }, observerOptions);

  sections.forEach(section => {
      observer.observe(section);
  });

  // Subtle parallax scrolling effect
  window.addEventListener('scroll', () => {
      sections.forEach(section => {
          const backgroundImage = section.querySelector('.background-image');
          const sectionRect = section.getBoundingClientRect();

          // More subtle parallax effect
          if (sectionRect.top < window.innerHeight && sectionRect.bottom > 0) {
              const scrollProgress = 1 - (sectionRect.top / window.innerHeight);
              backgroundImage.style.transform = `translateY(${scrollProgress * 10}%)`;
          }
      });
  });
});