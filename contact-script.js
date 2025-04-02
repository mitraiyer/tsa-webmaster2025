// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // FAQ Accordion functionality
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq-question');
      question.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all FAQs
        faqItems.forEach(faq => {
          faq.classList.remove('active');
        });

        // If the clicked one wasn't active, open it
        if (!isActive) {
          item.classList.add('active');
        }
      });
    });

    // Form submission handling
    const contactForm = document.getElementById('contactForm');
    const formSuccess = document.getElementById('formSuccess');

    if (contactForm) {
      contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        // Here you would typically send the form data to your server
        // For demonstration, we'll just show the success message
        contactForm.style.display = 'none';
        formSuccess.classList.remove('hide');

        // Reset form
        contactForm.reset();

        // Optional: You could show the form again after a delay
        setTimeout(() => {
          formSuccess.classList.add('hide');
          contactForm.style.display = 'grid';
        }, 5000);
      });
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
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });

    // Fade-in animations for elements
    const fadeInElements = document.querySelectorAll('.fade-in-element');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    fadeInElements.forEach(element => {
      observer.observe(element);
    });
  });
  // Add to your contact-script.js
document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();

      // Basic validation
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();

      if (!name || !email || !message) {
        alert('Please fill in all required fields.');
        return;
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
      }

      // Here you would normally send the form data to your server
      // For now, we'll just simulate a successful submission

      // Show success message
      contactForm.reset();
      formSuccess.classList.remove('hide');

      // Hide success message after 5 seconds
      setTimeout(function() {
        formSuccess.classList.add('hide');
      }, 5000);
    });
  }
});