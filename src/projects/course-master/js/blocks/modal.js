function bindModal() {
    let modal = document.querySelector('.modal');
    let modalTrigger = document.querySelectorAll('[data-modal]');
    let closeModal = document.querySelector('.modal__close');

    modalTrigger.forEach(trig => {
        trig.addEventListener('click', () => {
            modal.classList.add('showing')
        })
    }) 
    closeModal.addEventListener('click', () => {
        modal.classList.remove('showing')
    })
}

export default bindModal;