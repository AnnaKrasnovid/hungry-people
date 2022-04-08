import { buttonUp } from '../utils/constants.js';

export function scroll() {
    let scrollY = window.pageYOffset;
    if (scrollY > 400) {
        buttonUp.classList.add('icon-up_active');
    } else {
        buttonUp.classList.remove('icon-up_active');
    }
}

export function goUp() {
    let scrollY = window.pageYOffset;
    let timeOut;
    if(scrollY > 0) {
        window.scrollBy(0, -200);
        timeOut = setTimeout(goUp, 20);
    } else {
        clearTimeout(timeOut);
    }
}