let currentIndex = 0;
const slides = document.getElementsByClassName("slide");

setInterval(() => {
  slides[currentIndex].style.display = "none";

  currentIndex = (currentIndex + 1) % slides.length;

  slides[currentIndex].style.display = "block";}, 3000); 
