const slides1 = document.querySelectorAll('.slide');
const slides2 = document.querySelectorAll('.slide2');
const delay = 3000; // Cambiar el tiempo de transición aquí
let currentSlide1 = 0;
let currentSlide2 = 0;

// Función para mostrar el siguiente slide del primer selector
function nextSlide1() {
  slides1[currentSlide1].classList.remove('active');
  currentSlide1 = (currentSlide1 + 1) % slides1.length;
  slides1[currentSlide1].classList.add('active');
}

// Función para mostrar el siguiente slide del segundo selector
function nextSlide2() {
  slides2[currentSlide2].classList.remove('active2');
  currentSlide2 = (currentSlide2 + 1) % slides2.length;
  slides2[currentSlide2].classList.add('active2');
}

// Iniciar el primer slider
setInterval(nextSlide1, delay);

// Iniciar el segundo slider
setInterval(nextSlide2, delay);