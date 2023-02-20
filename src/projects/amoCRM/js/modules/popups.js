import {returnScrollWidth} from './returnScrollWidth.js';
import {hideOrNotBodyScroll} from './toHideOverflowBody.js';

function resetPopup() {
    let popup = document.querySelector('.popup');
    let popupBlock = popup.querySelector('.popup__block');
    let title = popupBlock.querySelector('.popup__title span');
    let subtitle = popupBlock.querySelector('.popup__subtitle');
    let button = popupBlock.querySelector('.phone-form__submit');
    subtitle.textContent = 'Оставьте ваш номер телефона и мы свяжемся с вами.';
    popupBlock.querySelector('form').classList.remove('invisible');

    button.innerHTML = title.textContent;
}

function openAndFillPopup() {
    let popupTriggers = document.querySelectorAll('[data-popup]');
    let popup = document.querySelector('.popup');
    let popupBlock = popup.querySelector('.popup__block');
    let title = popupBlock.querySelector('.popup__title span');
    let button = popupBlock.querySelector('.phone-form__submit');
    let policySpan = popupBlock.querySelector('.phone-form__privacy span');
    let close = popupBlock.querySelector('.close');
    let alreadyHidden = document.body.style.overflow === 'hidden';

    popupTriggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            popup.style.display = 'block';
            if (!alreadyHidden) {
                hideOrNotBodyScroll(true);
            }
            title.textContent = trigger.getAttribute('data-popup');
            button.innerHTML = trigger.textContent;
            policySpan.textContent = trigger.textContent;
            button.setAttribute('data-theme', title.textContent);
        })
    })

    close.addEventListener('click', (e) => {
        popup.style.display = 'none';
        if (!alreadyHidden) {
            hideOrNotBodyScroll(false);
        }
    })

}


function thanksPopUp() {
    let popup = document.querySelector('.popup');
    let popupBlock = popup.querySelector('.popup__block');
    let title = popupBlock.querySelector('.popup__title span');
    let subtitle = popupBlock.querySelector('.popup__subtitle');
    let form = popupBlock.querySelector('form');

    title.textContent = 'Спасибо за вашу заявку!';
    subtitle.textContent = 'Наш менеджер свяжется с вами в ближайшее время и уточнит все детали.';

    form.classList.add('invisible');

    setTimeout(() => {
        popup.style.display = '';
        hideOrNotBodyScroll(false);
    }, 2000)
}

export {openAndFillPopup, thanksPopUp, resetPopup}