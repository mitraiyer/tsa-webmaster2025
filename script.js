document.addEventListener("DOMContentLoaded", function () {
    const sentence = "Welcome to Noorani";
    let index = 0;

    function typeSentence() {
        if (index < sentence.length) {
            document.getElementById("sentence").textContent += sentence[index];
            index++;
            setTimeout(typeSentence, 100); // Adjust typing speed here
        }
    }

    typeSentence(); // Starts typing effect

    // Navbar menu toggle functionality
        const menuBtn = document.querySelector(".menu-btn");
        const navLinks = document.querySelector(".nav-links");
      
        menuBtn.addEventListener("click", function () {
          navLinks.classList.toggle("active");
        });
      });
