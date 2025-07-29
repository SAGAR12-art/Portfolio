
    // Smooth centering scroll
    document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      });
    });

    document.addEventListener("DOMContentLoaded", function () {
      AOS.init({
        duration: 1000,
        once: true
      });
    });

    // Typewriter effect
    const phrases = ["Tech passionate", "Web developer", "Software engineer"];
    let current = 0, charIndex = 0, isDeleting = false;
    const typeEl = document.getElementById('typewriter');
    const speed = 150;

    function type() {
      const fullText = phrases[current];
      if (isDeleting) {
        typeEl.textContent = fullText.substring(0, charIndex--);
      } else {
        typeEl.textContent = fullText.substring(0, charIndex++);
      }
      if (!isDeleting && charIndex === fullText.length + 1) {
        isDeleting = true;
        setTimeout(type, 1000);
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        current = (current + 1) % phrases.length;
        setTimeout(type, 500);
      } else {
        setTimeout(type, isDeleting ? speed/2 : speed);
      }
    }
    type();