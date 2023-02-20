import getScrollWidth from "./getScroll.js";

function bindMenu() {
    let burger = document.querySelector('.header__burger'),
        menu = document.querySelector('.menu__wrapper'),
        logo = document.querySelector('.header__logo');

    burger.addEventListener('click', () => {
        if (burger.classList.contains('opened')) {
            menu.classList.remove('opened');
            burger.classList.remove('opened');
            logo.classList.remove('opened');
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '0px'
        }
        else {
            menu.classList.add('opened');
            burger.classList.add('opened');
            logo.classList.add('opened');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = getScrollWidth() + 'px';
        }
    })
}

export default bindMenu;