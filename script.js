// script.js

// Menu loaded event
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

// User review carousel
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

// Fade-in animations
document.addEventListener('DOMContentLoaded', function() {
  const fadeInElements = document.querySelectorAll('.fade-in-element');
  if (fadeInElements.length > 0) {
      const observer = new IntersectionObserver((entries) => {
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

// Toggle Mobile Menu
document.addEventListener('DOMContentLoaded', function() {
  const menuBtn = document.querySelector('.menu-btn');
  const navLinks = document.querySelector('.nav-links');

  menuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');

      // Add body overflow to prevent scrolling when menu is open
      document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
  });

  // Close menu when clicking on a link
  const navLinksItems = document.querySelectorAll('.nav-links a');
  navLinksItems.forEach(item => {
      item.addEventListener('click', function() {
          navLinks.classList.remove('active');
          document.body.style.overflow = '';
      });
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(event) {
      if (!event.target.closest('.nav-links') && !event.target.closest('.menu-btn')) {
          if (navLinks.classList.contains('active')) {
              navLinks.classList.remove('active');
              document.body.style.overflow = '';
          }
      }
  });
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

// Intersection Observer for sections
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
              if (backgroundImage) {
                  backgroundImage.style.transform = `translateY(${scrollProgress * 10}%)`;
              }
          }
      });
      
      // Privacy Policy and Terms modals
      document.addEventListener('DOMContentLoaded', () => {
        const openPrivacy = document.getElementById('open-privacy');
        const openTerms = document.getElementById('open-terms');
        const closePrivacy = document.getElementById('close-privacy');
        const closeTerms = document.getElementById('close-terms');
        const privacyModal = document.getElementById('privacy-modal');
        const termsModal = document.getElementById('terms-modal');
      
        openPrivacy.addEventListener('click', (e) => {
          e.preventDefault();
          privacyModal.classList.remove('hidden');
        });
      
        openTerms.addEventListener('click', (e) => {
          e.preventDefault();
          termsModal.classList.remove('hidden');
        });
      
        closePrivacy.addEventListener('click', () => {
          privacyModal.classList.add('hidden');
        });
      
        closeTerms.addEventListener('click', () => {
          termsModal.classList.add('hidden');
        });
      
        window.addEventListener('click', (e) => {
          if (e.target === privacyModal) privacyModal.classList.add('hidden');
          if (e.target === termsModal) termsModal.classList.add('hidden');
        });
      });
      
  });
});