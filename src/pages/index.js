import './index.css';

import { handleSwitchTab } from '../components/tab.js';
import { createMenu } from '../components/tab.js';
import { enableValidation } from '../components/validate.js';
import { closePopup, closePopupOverlays } from '../components/popup.js';
import { scroll, goUp } from '../components/goUp.js';
import {
    tabsButton,
    buttonUp,
    popup,
    popupCloseButton,
    menuSoupeContainer,
    menuPizzaContainer,
    menuPastaContainer,
    menuDesertContainer,
    menuWineContainer,
    menuBeerContainer,
    menuDrinksContainer
} from '../utils/constants.js';
import {
    menuSoupe,
    menuPizza,
    menuPasta,
    menuDesert,
    menuWine,
    menuBeer,
    menuDrinks
} from '../utils/menu.js';

function date() {
    const date = new Date().getFullYear();
    const dateFooter = document.querySelector('.footer__text') ;   
    dateFooter.textContent = `Copyright Mindblister ${date}`;
}

date();
enableValidation();

tabsButton.forEach(handleSwitchTab);
createMenu(menuSoupe, menuSoupeContainer);
createMenu(menuPizza, menuPizzaContainer);
createMenu(menuPasta, menuPastaContainer);
createMenu(menuDesert, menuDesertContainer);
createMenu(menuWine, menuWineContainer);
createMenu(menuBeer, menuBeerContainer);
createMenu(menuDrinks, menuDrinksContainer);

buttonUp.addEventListener('click', goUp);
document.addEventListener('scroll', scroll);
popupCloseButton.addEventListener('click', closePopup);
popup.addEventListener('mouseup', closePopupOverlays);

