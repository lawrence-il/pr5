'use strict';

const humburger = document.querySelector('.promo__wrapper-humburger'),
        humburgerMenu = document.querySelector('.promo__links');

import slider from './modules/slider';
import toggleMenu from './modules/toggleMenu';
import modal from './modules/modal';

document.addEventListener('DOMContentLoaded', () => {
    
    slider({
        selector: '.promo__slider',
        btns: '.promo__dots',
        prev: '.promo__arrow-prev',
        next: '.promo__arrow-next',
        play: 1,
        speed: 2000,    
    });
    toggleMenu('.promo__wrapper-humburger', 
                '.promo__links', '.promo__active', 
                '.promo__humburger' );
    modal({
        selectorButtons: "[data-modal='modal']",
        selectorOverlay:'.overlay',
        selectorModalWindow: '.overlay__modal',
    }
    );
    slider({
        selector: '.solutions__slider',
        btns: '.solutions__wrapper-dots',
        prev: '.solutions__arrow-prev',
        next: '.solutions__arrow-next',
        play: 0,
        speed: 2000,
        
        dotsContainer: 'solutions__dots',
        onDotsToText: true,
        arrayText: ['Prengi Production', 'Prengi FMC', 'Prengi Mallz Retail', 'Prengi Logistic', 
        'Prengi IT', 'Prengi HR'],
        dotsStyleClass: 'solutions__dot',
        brkpoint: 909,
    });


});
