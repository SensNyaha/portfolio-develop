function bindAccordeon() {
    let accordeon = document.querySelector('.faq__accordeon');

    accordeon.addEventListener('click', (e) => {
        if (e.target.closest('.faq__card')) {
            e.target.closest('.faq__card').classList.toggle('showing')
        }
    })
}

export {bindAccordeon}