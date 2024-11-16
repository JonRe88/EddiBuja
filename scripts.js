// Función para activar las animaciones de fade-in cuando aparecen en pantalla
function fadeInOnScroll() {
    const fadeInElements = document.querySelectorAll('.fade-in');
    fadeInElements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
            element.classList.add('show');
        }
    });
}

// Agregar evento de scroll para activar el fade-in
window.addEventListener('scroll', fadeInOnScroll);

// Función para hacer scroll al hacer clic en la flecha
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({
        behavior: 'smooth'
    });
}

// Inicializar animación de fade-in al cargar la página
document.addEventListener('DOMContentLoaded', fadeInOnScroll);
var elem = document.querySelector('.main-carousel');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    contain: true
});
// external js: flickity.pkgd.js
// external js: flickity.pkgd.js

var carousel = document.querySelector('.carousel');
var flkty = new Flickity(carousel, {
    imagesLoaded: true,
    percentPosition: false,
});

var imgs = carousel.querySelectorAll('.carousel-cell img');
// get transform property
var docStyle = document.documentElement.style;
var transformProp = typeof docStyle.transform == 'string' ?
    'transform' : 'WebkitTransform';

flkty.on('scroll', function() {
    flkty.slides.forEach(function(slide, i) {
        var img = imgs[i];
        var x = (slide.target + flkty.x) * -1 / 4;
        img.style[transformProp] = 'translateX(' + x + 'px)';
    });
});