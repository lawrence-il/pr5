import $ from 'jquery';
import 'slick-carousel';

function slider() {
    
$(document).ready(function () {
    $('.promo__slider').slick({
      autoplay: true,
      autoplaySpeed: 2000,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      nextArrow: document.querySelector('.promo__arrow-next'),
      prevArrow: document.querySelector('.promo__arrow-prev'),
      appendDots: document.querySelector('.promo__dots'),
    });
  });
}

export default slider;