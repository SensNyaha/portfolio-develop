import returnScrollWidth from './returnScrollWidth.js'

function modalTriggers() {
    let modal = document.querySelector('.modal')
    document.querySelectorAll('[data-modal]').forEach(btn => btn.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        document.body.style.marginRight = returnScrollWidth() + 'px';
    }))

    let close = modal.querySelector('.modal__close');
    close.addEventListener('click', () => {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
        document.body.style.marginRight = 0;
    })
}

export default modalTriggers;