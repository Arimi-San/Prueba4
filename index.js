const slides1 = document.querySelectorAll('.slide');
const delay = 3000; // Cambiar el tiempo de transición aquí
let currentSlide1 = 0;


// Función para mostrar el siguiente slide del primer selector
function nextSlide1() {
  slides1[currentSlide1].classList.remove('active');
  currentSlide1 = (currentSlide1 + 1) % slides1.length;
  slides1[currentSlide1].classList.add('active');
}


// Iniciar el primer slider
setInterval(nextSlide1, delay);
