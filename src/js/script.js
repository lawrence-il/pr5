'use strict';

const humburger = document.querySelector('.promo__wrapper-humburger'),
          humburgerMenu = document.querySelector('.promo__links');

import slider from './modules/slider';
import toggleMenu from './modules/toggleMenu';

document.addEventListener('DOMContentLoaded', () => {
    
    slider();
    toggleMenu(humburger, 'promo__active', humburgerMenu);


});
