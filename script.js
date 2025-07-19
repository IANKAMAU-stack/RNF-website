// Hide loading screen and fade in body on page load
window.addEventListener('load', () => {
  const loadingScreen = document.querySelector('.loading-screen');
  if (loadingScreen) loadingScreen.style.display = 'none';
  document.body.style.opacity = '1';
});

// Set initial body opacity for fade-in effect
document.body.style.opacity = '0';
document.body.style.transition = 'opacity 0.5s ease';

// Hamburger menu toggle for mobile
function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  if (navLinks) navLinks.classList.toggle('show');
}

// Navbar scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
    // Close mobile menu if open
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) navLinks.classList.remove('show');
  });
});

document.querySelectorAll('a[href="#home"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

// Intersection Observer for fade-in
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(el => observer.observe(el));

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const hero = document.querySelector('.hero');
  if (hero) {
    hero.style.transform = `translateY(${scrolled * 0.5}px)`;
  }
});