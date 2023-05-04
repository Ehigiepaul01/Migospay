const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('open');
  navList.classList.toggle('open');
});