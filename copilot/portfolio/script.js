// Tab navigation for smooth scrolling and active state
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});

// Particles.js config
window.onload = function() {
    if (window.particlesJS) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60 },
                color: { value: '#00e6d0' },
                shape: { type: 'circle' },
                opacity: { value: 0.3 },
                size: { value: 4 },
                line_linked: {
                    enable: true,
                    distance: 150,
                    color: '#00e6d0',
                    opacity: 0.2,
                    width: 1
                },
                move: {
                    enable: true,
                    speed: 2
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: {
                    onhover: { enable: true, mode: 'repulse' },
                    onclick: { enable: true, mode: 'push' }
                },
                modes: {
                    repulse: { distance: 100 },
                    push: { particles_nb: 4 }
                }
            },
            retina_detect: true
        });
    }
};

// Contact form dummy handler
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! (Demo only)');
        contactForm.reset();
    });
}
