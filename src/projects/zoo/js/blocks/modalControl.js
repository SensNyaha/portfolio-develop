import getScroll from './getScroll.js';

function modalControl() {
    let modalTriggers = document.querySelectorAll('.popup__donate');
    let modal = document.querySelector('.modal');

    modalTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
            document.body.style.paddingRight = getScroll() + 'px';
        })
    })

    document.querySelector('.modal__close').addEventListener('click', () => {
        modal.style.display = '';
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '';
    })
}

export default modalControl;