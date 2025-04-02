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
    
    // Scroll reveal animation
    const fadeElements = document.querySelectorAll('.fade-in-element');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    fadeElements.forEach(element => {
      observer.observe(element);
    });
    
    // Back to top button
    const backToTopBtn = document.getElementById('backToTop');
    
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('visible');
      } else {
        backToTopBtn.classList.remove('visible');
      }
    });
    
    backToTopBtn.addEventListener('click', function() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
    
    // Form validation and submission
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');
    
    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Basic validation
        let valid = true;
        const requiredInputs = contactForm.querySelectorAll('[required]');
        
        requiredInputs.forEach(input => {
          if (!input.value.trim()) {
            valid = false;
            input.classList.add('error');
          } else {
            input.classList.remove('error');
          }
        });
        
        if (valid) {
          // Hide form and show success message
          contactForm.style.display = 'none';
          formSuccess.classList.remove('hide');
          
          // Optionally, reset the form for if they go back
          contactForm.reset();
          
          // In a real implementation, you would send the form data to your server here
          // Example:
          // const formData = new FormData(contactForm);
          // fetch('your-endpoint', {
          //   method: 'POST',
          //   body: formData
          // })
          // .then(response => response.json())
          // .then(data => {
          //   console.log('Success:', data);
          // })
          // .catch(error => {
          //   console.error('Error:', error);
          // });
        }
      });
      
      // Remove error class on input when user starts typing
      contactForm.querySelectorAll('.form-input, .form-textarea').forEach(input => {
        input.addEventListener('input', function() {
          this.classList.remove('error');
        });
      });
    }
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    
    if (newsletterForm) {
      newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const emailInput = this.querySelector('input[type="email"]');
        
        if (emailInput.value.trim()) {
          // Simple email validation
          if (validateEmail(emailInput.value)) {
            // Show a success message
            alert('Thank you for subscribing to our newsletter!');
            newsletterForm.reset();
          } else {
            alert('Please enter a valid email address.');
          }
        }
      });
    }
    
    // Email validation helper function
    function validateEmail(email) {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email.toLowerCase());
    }
  });
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