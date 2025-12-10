// Theme Toggle Functionality
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
const navbar = document.querySelector('.navbar');

// Function to update navbar with theme
function updateNavbarTheme(theme) {
  if (navbar) {
    if (theme === 'light') {
      navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
      navbar.style.backgroundColor = 'rgba(19, 19, 31, 0.95)';
    }
  }
}

// Check saved theme in localStorage or use dark mode as default
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
updateNavbarTheme(savedTheme);

// Toggle theme
if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateNavbarTheme(newTheme);
  });
}

// Update navbar background on scroll considering the theme
window.addEventListener('scroll', () => {
  const currentScroll = window.pageYOffset;
  const currentTheme = html.getAttribute('data-theme');

  if (navbar) {
    if (currentScroll > 100) {
      if (currentTheme === 'light') {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
      } else {
        navbar.style.backgroundColor = 'rgba(19, 19, 31, 0.98)';
      }
      navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
    } else {
      if (currentTheme === 'light') {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
      } else {
        navbar.style.backgroundColor = 'rgba(19, 19, 31, 0.95)';
      }
      navbar.style.boxShadow = 'none';
    }
  }
});