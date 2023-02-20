function changeTheme() {
    let trigger = document.querySelector('.header__theme');
    trigger.addEventListener('click', (e) => {
        trigger.classList.toggle('active');
        document.body.classList.toggle('dark');

        if (trigger.classList.contains('active')) {
            localStorage.setItem('theme', 'dark');
        } else {
            localStorage.setItem('theme', 'light');
        }
    })

}

export default changeTheme;