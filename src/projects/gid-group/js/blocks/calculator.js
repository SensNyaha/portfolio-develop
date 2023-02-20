import getScrollWidth from './getScroll.js';

function calcControllers() {
    let calcTriggers = document.querySelectorAll('[data-to="calc"]');

    let calc = document.querySelector('.calc');
    let slides = calc.querySelectorAll('.slide');

    let slideSkippers = document.querySelectorAll('[data-to-slide]');

    calcTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            calc.classList.add('opened');

            document.body.style.marginRight = getScrollWidth() + 'px';
            document.body.style.overflow = 'hidden';

            showSlide(1);
        })
    })

    slideSkippers.forEach(skipper => {
        skipper.addEventListener('click', () => {
            showSlide(skipper.getAttribute('data-to-slide'));
        })
    })


    function showSlide(index) {
        if (index === undefined) {
            calc.classList.remove('opened');

            document.body.style.marginRight = 0 + 'px';
            document.body.style.overflow = 'auto';

            return;
        }

        slides.forEach(slide => {
            slide.classList.add('dn')
        })

        slides[index - 1].classList.remove('dn')
    }
}

function calcInnerLogic() {
    let priceObject = {};

    let choices = document.querySelectorAll('[data-choice]');

    choices.forEach(choice => {
        choice.addEventListener('click', (e) => {
            let currentType = choice.dataset.choice;
            let typedChoices = document.querySelectorAll(`[data-choice="${currentType}"]`);

            if (!choice.classList.contains('chosen')) {
                typedChoices.forEach(choice => {
                    if (choice.closest('.form-wrap__card')) {
                        choice.closest('.form-wrap__card').classList.remove('chosen');
                    }
                    choice.classList.remove('chosen');
                });

                if (choice.closest('.form-wrap__card')) {
                    choice.closest('.form-wrap__card').classList.add('chosen');
                }
                choice.classList.add('chosen');

                priceObject[currentType] = +choice.getAttribute('data-cost');
            } else {
                if (choice.closest('.form-wrap__card')) {
                    choice.closest('.form-wrap__card').classList.remove('chosen');
                }
                choice.classList.remove('chosen');

                priceObject[currentType] = 0;
            }

            refreshPriceSpan(priceObject);
        })
    })

    let inputs = document.querySelectorAll('.slide__form-input input');

    inputs.forEach(input => {
        input.addEventListener('change', () => {
            let parentElem = input.closest('.slide__form-input');
            let inputType = parentElem.dataset.input;

            priceObject[inputType] = parentElem.getAttribute('data-ratio') * input.value;

            refreshPriceSpan(priceObject);
        })
    })


    let resetButtons = document.querySelectorAll('.slide__reset');

    resetButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            resetAllChoices(priceObject);
            refreshPriceSpan(priceObject);
        })
    })
}

function resetAllChoices(priceObject) {
    let choices = document.querySelectorAll('[data-choice]');
    let inputs = document.querySelectorAll('.slide__form-input input');

    choices.forEach(choice => {
        if (choice.closest('.form-wrap__card')) {
            choice.closest('.form-wrap__card').classList.remove('chosen');
        }
        choice.classList.remove('chosen');
    });

    inputs.forEach(input => input.value = '');

    for (let prop of Object.keys(priceObject)) {
        delete priceObject[prop];
    }
}

function refreshPriceSpan(priceObject) {
    let priceSpans = document.querySelectorAll('.slide__cost span');

    if (Object.keys(priceObject).length) {
        priceSpans.forEach(span => {
            span.innerHTML = Object.values(priceObject).reduce((sum, item) => sum + item);
        })
    }
    else {
        priceSpans.forEach(span => {
            span.innerHTML = 0;
        })
    }
    
}


export {calcControllers, calcInnerLogic};
