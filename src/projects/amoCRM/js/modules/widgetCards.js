function bindingWidgetCards() {
    let widgetCards = document.querySelectorAll('.widgets__info');
    let widgetMenuButtons = document.querySelectorAll('.widgets__item');

    function markOffButtons() {
        widgetMenuButtons.forEach(btn => {
            btn.classList.remove('showing')
        })
    }

    function hideAllCards() {
        widgetCards.forEach(card => {
            card.classList.remove('showing')
        })
    }

    function findMyInfocard(trigger) {
        let seek;
        widgetCards.forEach(card => {
            if (card.dataset.what === trigger.dataset.to) {
                seek = card;
            }
        })
        return seek;
    }

    widgetMenuButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            markOffButtons();
            btn.classList.add('showing');
            hideAllCards()
            findMyInfocard(btn).classList.add('showing');
        })

    })

    let widgetList = document.querySelector('.widgets__list-wrapper');
    let list = document.querySelector('.widgets__list');


    widgetList.addEventListener('click', (e) => {
        if (document.body.offsetWidth < 990) {
            widgetList.classList.toggle('opened');
            if (widgetList.classList.contains('opened')) {
                widgetList.scrollTop = 0;
                list.style.top = '';
            } else {
                let newOffsetTop = - (e.target.closest('.widgets__item').offsetTop - widgetList.scrollTop);
                list.style.top = `${newOffsetTop}px`;
            }
        }
    })

    window.addEventListener('resize', () => {
        if (document.body.offsetWidth > 990) {
            list.style.top = '';
        } else {
            list.style.top = `-${document.querySelector('.widgets__item.showing').offsetTop - widgetList.scrollTop}px`;
        }
    })
    

    widgetMenuButtons[0].click();
}

export {bindingWidgetCards};