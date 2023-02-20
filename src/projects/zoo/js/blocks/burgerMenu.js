function burgerMenu() {
    let burger = document.querySelector('.burger');
    let menu = document.querySelector('.header__nav');

    burger.addEventListener('click', () => {
        menu.classList.toggle('active');
        burger.classList.toggle('active')
    })
}

export default burgerMenu;