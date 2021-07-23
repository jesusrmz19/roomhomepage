'use strict';

/////////////////////////////////////////
// Nav Menu

const openMenu = document.querySelector('.nav--open');
const closeMenu = document.querySelector('.nav--close');
const menu = document.querySelector('.nav--menu');

const toggleMenu = function () {
  menu.classList.toggle('open');
};

openMenu.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

/////////////////////////////////////////
// Slider
const slider = function () {
  const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.5)';
  // slider.style.overflow = 'visible';

  const slides = document.querySelectorAll('.slide');
  const btnRight = document.querySelector('.slider__btn--right');
  const btnLeft = document.querySelector('.slider__btn--left');
  let curSlide = 0;
  let maxSlide = slides.length;

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };

  // Next Slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
  };

  // Prev Slide
  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
  };

  const init = function () {
    // Initialized Slides
    goToSlide(0);
  };
  init();

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  // Event Listener para las flechas
  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    else if (e.key == 'ArrowRight') nextSlide();
  });
};

slider();
