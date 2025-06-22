// Typing animation text
const typingElement = document.getElementById("typing");
const typingTexts = [
  "Future University Student",
  "Creative Thinker",
  "Dream Chaser",
];
let typingIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentText = typingTexts[typingIndex];
  if (isDeleting) {
    charIndex--;
    typingElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === 0) {
      isDeleting = false;
      typingIndex = (typingIndex + 1) % typingTexts.length;
      setTimeout(type, 500);
    } else {
      setTimeout(type, 50);
    }
  } else {
    charIndex++;
    typingElement.textContent = currentText.substring(0, charIndex);
    if (charIndex === currentText.length) {
      isDeleting = true;
      setTimeout(type, 1500);
    } else {
      setTimeout(type, 100);
    }
  }
}
document.addEventListener("DOMContentLoaded", type);

// Contact form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  this.reset();
});

// Theme toggle
document.getElementById("toggleTheme").addEventListener("click", function () {
  document.body.classList.toggle("dark");
});

// Preloader
window.addEventListener("load", function () {
  document.getElementById("preloader").style.display = "none";
});

// Highlight nav link on scroll
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop - 60) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});
// Show scroll to top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollBtn.style.display = "block";
  } else {
    scrollBtn.style.display = "none";
  }
});
scrollBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

