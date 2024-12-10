// Funcionalidad de abrir y cerrar el menú
document.querySelector('.nav__hamburguer').addEventListener('click', () => {
    document.body.classList.add('menu-active');
});

document.querySelector('.nav__close').addEventListener('click', () => {
    document.body.classList.remove('menu-active');
});

// Quitar el efecto 'menu-active' cuando la pantalla vuelve a tamaño grande
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        document.body.classList.remove('menu-active');
    }
});

var slides = document.querySelectorAll('.slide');

var btns = document.querySelectorAll('.btn');

let currentSlide = 1;

var manualNav = function(manual){

    slides.forEach((slide) => {
        slide.classList.remove('remove');

        btns.forEach((btn) => {
            btn.classList.remove('active')
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
    });
});

var repeat = function(activeClass){
    let active = document.getElementsByClassName('active');
    let i = 1;

    var repeater = () => {
        setTimeout(function(){

            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });

            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;

            if(slides.length == i){
                i = 0;
            }
            if(i >= slides.length){
                return;
            }
            repeater();
        }, 3000);
    }
    repeater();
}
repeat();
