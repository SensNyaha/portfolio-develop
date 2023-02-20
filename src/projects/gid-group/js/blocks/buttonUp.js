function buttonUp() {
    let up = document.querySelector('.footer__up');

    up.addEventListener('click', () => {
        document.querySelector('header').scrollIntoView({behavior: 'smooth'})
    })
}

export default buttonUp;