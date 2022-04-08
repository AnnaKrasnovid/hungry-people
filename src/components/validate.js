import { openPopup } from '../components/popup.js';
import { forms } from '../utils/constants.js';
import IMask from 'imask';

export function enableValidation() {
    forms.forEach(addListenersToForm);
}

function addListenersToForm (form) {  
    const inputs = Array.from(form.querySelectorAll('.form__input'));
    inputs.forEach(addListenersToInputs);
    form.addEventListener('submit', handleFormSubmit);    
    form.addEventListener('input', handleFormInput);
    toggleButton(form);
}

function addListenersToInputs(input) {
    input.addEventListener('input', handleFieldValidation);
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    //собрать данные всех инпутов
    const form = evt.currentTarget;
    resetInputs(form) ;     
    toggleButton(form);      
}

function handleFieldValidation(evt) {
    const input = evt.target;  
    const errorInput = document.querySelector(`#${input.id}-error`);
    
    input.setCustomValidity('');
    
    validatePhone(input); 
    //validateDate(input, errorInput);

    errorInput.textContent = input.validationMessage;   
    toggleInputError(input);
}

function validatePhone(input) {
    if(input.validity.patternMismatch) {
        input.setCustomValidity('Используйте формат: +7 (777) 777-77-77');
    }
}

function toggleInputError(input) {
    if (!input.validity.valid) {
        showInputError(input); 
    } else {
        hideInputError(input);
    }
}

function hideInputError(input) {
    input.classList.remove('form__input_state_invalid');
}

function showInputError(input) {
    input.classList.add('form__input_state_invalid');
}

function handleFormInput(evt) {
    const form = evt.currentTarget;
    toggleButton(form);
}

function toggleButton(form) {
    const button = form.querySelector('.button');
    const isFormInvalid = !form.checkValidity();
    button.disadled = isFormInvalid;
    button.classList.toggle('button_disabled', isFormInvalid);
}

function resetInputs(form) {
    if(form.checkValidity()) {
        form.reset();
        openPopup();
    }
}

const phoneElement = document.querySelectorAll('.form__input_type_phone');
const maskOptions = {
    mask: '+{7} (000) 000-00-00'
};
phoneElement.forEach(e => IMask(e, maskOptions));

/*function validateDate(input, errorInput) {   
    let date = new Date();
    let currentDate = (date.getFullYear() + '-' + '0' + (date.getMonth() + 1) + '-' + date.getDate());

    if(input.value <= currentDate ) {      
        errorInput.textContent = 'Введите дату в формате dd/mm/yyyy'
    }
    
    console.log(currentDate)
    console.log(input.value)
}*/