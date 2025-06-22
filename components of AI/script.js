function navigate(section) {
  const content = document.getElementById('content');
  let html = '';

  switch (section) {
    case 'home':
      html = `
        <h1>Welcome to Home</h1>
        <p>This is the homepage content.</p>
      `;
      break;
    case 'projects':
      html = `
        <h1>Projects</h1>
        <p>Here are some cool projects listed here.</p>
      `;
      break;
    case 'contact':
      html = `
        <h1>Contact</h1>
        <p>Reach out via email or social media.</p>
      `;
      break;
  }

  content.innerHTML = html;
  window.scrollTo({ top: content.offsetTop, behavior: 'smooth' });
}

// Animate hero content on load
window.addEventListener('load', () => {
  document.querySelector('.hero-content').style.animationDelay = '0.3s';
});
