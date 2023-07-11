const hamburgerMenu = document.querySelector('.hamburger-menu');
const navList = document.querySelector('.nav-list');

hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  navList.classList.toggle('show');
});



const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
  header.addEventListener('click', event => {
    const parent = event.target.closest('.accordion-item');
    parent.classList.toggle('active');
  });
});

const carousel = document.querySelector(".carousel");
const slides = Array.from(carousel.getElementsByClassName("slide"));
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let slideWidth = slides[0].offsetWidth;
let currentIndex = 0;

// Update slide width on window resize
window.addEventListener("resize", () => {
  slideWidth = slides[0].offsetWidth;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Handle next button click
nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % slides.length;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});

// Handle previous button click
prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  carousel.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
});








