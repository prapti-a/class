function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
}

// Contact form handling
function handleSubmit(event) {
  event.preventDefault();
  
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  
  // For now, we'll just show an alert. In a real application, 
  // you would send this data to a server
  alert('Thank you for your message! I will get back to you soon.');
  event.target.reset();
}
