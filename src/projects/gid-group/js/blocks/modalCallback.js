import getScrollWidth from "./getScroll.js";

function modalCallback() {
    let modal = document.querySelector('.modal_callback');

    let modalTriggers = document.querySelectorAll('[data-to="modal"]');
    let closeButton = document.querySelector('.modal__close');

    modalTriggers.forEach(trig => {
        trig.addEventListener('click', () => {
            modal.classList.add('opened');
            document.body.style.marginRight = getScrollWidth() + 'px';
            document.body.style.overflow = 'hidden';
        })
    })

    closeButton.addEventListener('click', () => {
        modal.classList.remove('opened');
        document.body.style.marginRight = 0 + 'px';
        document.body.style.overflow = 'auto';
    })
}

export default modalCallback;