import getScrollWidth from "./getScroll.js";

function bindConstruction() {
    let constrNavs = document.querySelectorAll('.construction__nav-item');
    let contents = document.querySelectorAll('.construction__content');

    constrNavs.forEach(item => {
        item.addEventListener('click', () => {

            constrNavs.forEach(nav => nav.classList.remove('chosen'));

            item.classList.add('chosen');

            contents.forEach(content => {
                content.classList.add('dn');

                if (content.classList.contains(item.getAttribute('data-construction'))) {
                    content.classList.remove('dn')
                }
            });

        })
    })


    let repairTriggers = document.querySelectorAll('.construction-repair__trigger');
    repairTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            trigger.closest('.construction-repair__item').classList.toggle('opened')
        })
    })

    let repairImgs = document.querySelectorAll('.construction-repair__img');
    repairImgs.forEach(img => {
        img.addEventListener('click', () => {
            let name = img.nextElementSibling.textContent.trim();
            let imgSrc = img.querySelector('img').getAttribute('src');
            
            let modal = document.createElement('div');
            modal.classList.add('modal','opened');

            modal.innerHTML = `
                <div class="modal__img">
                    <img src="${imgSrc}" alt="img">
                    <div class='modal__img-text'>
                        <h2 class="modal__img-title">${name}</h2>
                        <div class="modal__img-descr">
                            Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации, и необходимые спецификации. Переносим утвержденный дизайн интерьера на бумагу. В результате вы получаете комплект дизайнерских документов: строительные чертежи, фотореалистичные визуализации и необходимые спецификации.
                        </div>
                    </div>
                </div>
            `;

            let close = document.createElement('div')
            close.innerHTML = `<span></span><span></span>`
            close.classList.add('modal__close', 'modal__close_white');
            modal.append(close);

            document.body.style.marginRight = getScrollWidth() + 'px';
            document.body.style.overflow = 'hidden';

            document.body.append(modal);

            close.addEventListener('click', () => {
                modal.remove();
                
                document.body.style.marginRight = 0 + 'px';
                document.body.style.overflow = 'auto';
            })
        })
    })
}

export default bindConstruction;