// Hamburger-Menu
const hamburger = document.getElementById('hamburger');
const nav = document.getElementById('nav');

function toggleMenu() {
  nav.classList.toggle('open');
}

hamburger.addEventListener('click', toggleMenu);
hamburger.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault();
    toggleMenu();
  }
});

// Closing menu if nav item is clicked
const navLinks = nav.querySelectorAll('a');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
  });
});