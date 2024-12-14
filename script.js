document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector('.menu-toggle'); // Hamburger icon
  const navItems = document.querySelector('.nav-items'); // Navigation menu

  // Toggle the menu on click
  menuToggle.addEventListener('click', () => {
      navItems.classList.toggle('active');
  });
});