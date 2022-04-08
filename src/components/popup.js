import { popup } from '../utils/constants.js';

export function openPopup() {
    popup.classList.add('popup_opened');
    document.addEventListener('keydown', closePopupEscape);
}

export function closePopup() {
    popup.classList.remove('popup_opened');
    document.removeEventListener('keydown', closePopupEscape);
}

export function closePopupOverlays(event) {
    if(event.target.classList.contains('popup')) {
        closePopup(event.target);
    }
}

function closePopupEscape(event){
    if (event.key === "Escape") {
        const openPopup = document.querySelector('.popup_opened');
        closePopup(openPopup);
    }
}