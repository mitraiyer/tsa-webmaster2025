// Wait for the page to load
document.addEventListener('DOMContentLoaded', function() {
    // Add 'loaded' class to body for fade-in effect
    document.body.classList.add('loaded');
    
    // FAQ accordion functionality
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', function() {
        // Toggle active class on question
        this.classList.toggle('active');
        
        // Toggle active class on answer
        const answer = this.nextElementSibling;
        answer.classList.toggle('active');
      });
    });
    

    // Form submission handling with validation
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Form fields
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Basic validation
        if (!name || !email || !message) {
          alert('Please fill in all required fields.');
          return;
        }

        // Email validation
        if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
        }

        // Simulating a successful submission
        contactForm.reset();
        contactForm.style.display = 'none';
        formSuccess.classList.remove('hide');

        // Show form again after 5 seconds
        setTimeout(() => {
          formSuccess.classList.add('hide');
          contactForm.style.display = 'grid';
        }, 5000);
      });
    }

    // Email validation helper function
    function validateEmail(email) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
    }

    // Back to top button functionality
    const backToTopBtn = document.getElementById('backToTop');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });

    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Fade-in animations
    const fadeInElements = document.querySelectorAll('.fade-in-element');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => observer.observe(element));
  });

  // Navbar functionality
  document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const aboutToggle = document.querySelector('.about-toggle');
    const dropdown = document.querySelector('.dropdown-content');

    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
    });

    aboutToggle.addEventListener('click', (e) => {
      e.preventDefault();
      dropdown.classList.toggle('show');
    });
  });