import $ from 'jquery';
import 'slick-carousel';

function slider() {
    
$(document).ready(function () {
    $('.promo__slider').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      nextArrow: document.querySelector('.arrow-next'),
      prevArrow: document.querySelector('.arrow-prev'),
      appendDots: document.querySelector('.dots'),
    });
  });
}

export default slider;