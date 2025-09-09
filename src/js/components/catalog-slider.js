import Swiper from '../vendor/swiper.min.js';
import vars from '../_vars';

document.addEventListener('DOMContentLoaded', () => {
  const catalogSlider = new Swiper('.hero-catalog__slider', {
    loop: true,
    slidesPerView: 1,
    navigation: {
      nextEl: '.hero-next-btn',
      prevEl: '.hero-prev-btn',
    },
    pagination: {
      el: '.hero-pag',
      type: 'bullets',
      clickable: true,
    },
  });
});
