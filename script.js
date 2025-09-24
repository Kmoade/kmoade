document.addEventListener('DOMContentLoaded', function() {
    // Floating bubbles animation
    const bubblesContainer = document.querySelector('.bubbles');
    for (let i = 0; i < 20; i++) {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        // Random size between 10px and 60px
        const size = Math.random() * 50 + 10;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        // Random position
        bubble.style.left = `${Math.random() * 100}%`;
        // Random animation duration between 5s and 15s
        const duration = Math.random() * 10 + 5;
        bubble.style.animationDuration = `${duration}s`;
        // Random delay
        const delay = Math.random() * 5;
        bubble.style.animationDelay = `${delay}s`;
        bubblesContainer.appendChild(bubble);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });

    // Form submission animation
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.innerHTML = 'Sending <i class="fas fa-spinner fa-spin"></i>';
            submitButton.style.opacity = '0.8';
            setTimeout(() => {
                submitButton.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                submitButton.style.background = 'linear-gradient(to right, #4CAF50, #2E7D32)';
                setTimeout(() => {
                    contactForm.reset();
                    submitButton.innerHTML = 'Send Message <i class="fas fa-paper-plane"></i>';
                    submitButton.style.background = 'linear-gradient(to right, #b399d4, #e27396)';
                    submitButton.style.opacity = '1';
                }, 3000);
            }, 1500);
        });
    }
});