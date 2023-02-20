import returnScrollWidth from "./returnScrollWidth.js";

function burger() {
    let burger = document.querySelector('.header__burger')
    burger.addEventListener('click', () => {
        if (document.querySelector('header').classList.contains('menuOpened')) {
            burger.closest('header').classList.remove('menuOpened');
            document.body.style.overflow = 'auto';
            document.body.style.marginRight = '0';
        }
        else {
            burger.closest('header').classList.toggle('menuOpened');
            document.body.style.overflow = 'hidden';
            document.body.style.marginRight = returnScrollWidth() + 'px';
        }        
    })
}

export default burger