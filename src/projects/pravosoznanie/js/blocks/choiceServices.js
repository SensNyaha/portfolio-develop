function choiceServices() {
    let bigButtons = document.querySelectorAll('[data-service-type]');

    bigButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelector(`[data-service=${btn.getAttribute('data-service-type')}]`).click();

            let wrapper = document.querySelector('.serv-list');
            let header = document.querySelector('header');

            document.querySelectorAll('body>*').forEach(elem => {
                if (elem.tagName !== 'SCRIPT' && elem.tagName !== 'HEADER' &&elem.tagName !== 'FOOTER' && elem !== wrapper) {
                    elem.style.opacity = '0';
                    elem.addEventListener('transitionend', () => {
                        elem.remove();
                        wrapper.classList.add('active');
                    })
                }
                else if (elem.tagName === 'HEADER') {
                    elem.style.opacity = '0';
                }
            })

            document.body.prepend(wrapper);
            setTimeout(() => {
                wrapper.querySelector('.container').prepend(header);
                header.style.opacity = '1';
                window.scrollTo({top: 0});
            }, 1000)
        })
    })
}

export default choiceServices;