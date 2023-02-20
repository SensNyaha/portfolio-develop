function contactsDownMenu() {
    let trigger = document.querySelector('.contacts__form .contacts__title');

    trigger.addEventListener('click', slowOpen)

    function slowOpen() {
        if (window.innerWidth < 520) {
            trigger.classList.add('opened');
            trigger.closest('.contacts__form').querySelector('.contacts__form-form').classList.add('opened');
    
            trigger.removeEventListener('click', slowOpen)
        }
    }
}

export default contactsDownMenu;