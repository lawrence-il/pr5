import $ from 'jquery';
import 'slick-carousel';

function slider({
  selector,
  prev,
  next,
  btns,
  play,
  speed,
  dotsStyleClass,
  brkpoint = 0,
  onDotsToText = false,
  arrayText = [],
  dotsContainer = 'slick-dots',
}) {

  $(document).ready(function () {



    $(selector).slick({
      lazyLoad: 'ondemand',
      autoplay: play,
      autoplaySpeed: speed,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
      nextArrow: document.querySelector(next),
      prevArrow: document.querySelector(prev),
      appendDots: document.querySelector(btns),
      dotsClass: dotsContainer,
      variableWidth: true,
      centerMode: true,
      adaptiveHeight: true,
      responsive : [ 
        {
        breakpoint: brkpoint,
        settings: {
          arrows: false,
        }
      }
    ]
      
    });
    if (onDotsToText) {
      const dotsToText = function (arrayText) {
        const dots = document.querySelectorAll(`.${dotsContainer} button`);

        dots.forEach((dot, i) => {

          dot.textContent = arrayText[i];
          dot.classList.add(dotsStyleClass);
          if (i == arrayText.length - 1) {
            dot.style.border = 'none';
          }

        });
      };
      dotsToText(arrayText);
    }
  });

}


export default slider;