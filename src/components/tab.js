import { tabsButton, tabsMenu } from '../utils/constants.js';

export function handleSwitchTab(item) {
    item.addEventListener('click', () => {
        let currentButton = item;
        let tabId = currentButton.getAttribute('name');
        let currentTab = document.querySelector(tabId);
    
        tabsButton.forEach(removeClassActiveMenu);  
        tabsMenu.forEach(removeClassActiveMenuDishs);   
        addClassActiveMenu(currentButton);
        addClassActiveMenuDishs(currentTab);
    })     
}

function removeClassActiveMenu(item) {
    item.classList.remove('menu__button_active');
}

function removeClassActiveMenuDishs(item) {
    item.classList.remove('menu__dishs_active');
}

function addClassActiveMenu(currentButton) {
    currentButton.classList.add('menu__button_active');
}

function addClassActiveMenuDishs(currentTab) {
    currentTab.classList.add('menu__dishs_active');
}

function generatePoint(data) {
    const point = document
    .querySelector('.template')
    .content
    .querySelector('.menu__item')
    .cloneNode(true);

    const title = point.querySelector('.menu__title');
    const description = point.querySelector('.menu__description');
    const cost = point.querySelector('.menu__cost');
    const currency = point.querySelector('.menu__currency');

    title.textContent =  data.title;
    description.textContent =  data.description;
    cost.textContent =  data.cost;
    currency.textContent =  data.currency;
   
    return point;
}

export function createMenu(menu, menuContainer) {
    menu.forEach((data)=>{
        const pointMenu = generatePoint(data);
        menuContainer.prepend(pointMenu);
    })   
}