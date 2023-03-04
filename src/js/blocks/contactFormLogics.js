export default function contactFormLogics() {
    const SERVICE_ID = 'service_wd2g3gb';
    const TEMPLATE_ID = 'template_ia6tkoc';

    const waysSwitchers = document.querySelectorAll('.contactme__ways .contactme__radio');
    const waysInputs = document.querySelectorAll('.contactme__ways-input');

    function resetNPlaceLabelChosenClass(labels, chosenLabel) {
        labels.forEach(label => {
            if (label !== chosenLabel) {
                label.classList.remove('contactme__label--chosen');
            } else {
                label.classList.add('contactme__label--chosen');
            }
        })
    }

    waysSwitchers.forEach(switcher => {
        switcher.addEventListener('change', (e) => {
            resetNPlaceLabelChosenClass(document.querySelectorAll('.contactme__ways .contactme__label'), e.target.closest('.contactme__label'))


            waysInputs.forEach(inp => {
                inp.classList.remove('contactme__ways-input--avl');
                inp.removeAttribute('required');
                inp.value = '';
            });

            const input = e.target.closest('.contactme__ways').querySelector(`input[name=${e.target.dataset.way}]`);
            input.classList.add('contactme__ways-input--avl');
            input.setAttribute('required', true);
        })
    })

    document.querySelector('.contactme__form').addEventListener('submit', (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formArray = Array.from(formData);
        
        const objToSend = Object.fromEntries(formArray);

        const formInnerElem = e.target.querySelector('.contactme__form-inner');
        formInnerElem.classList.add('blocked');
        const statusElem = e.target.querySelector('.contactme__status');
        statusElem.classList.add('loading');
        
        emailjs.send(SERVICE_ID, TEMPLATE_ID, objToSend)
            .then(res => {
                e.target.reset();
                statusElem.classList.remove('loading');
                statusElem.classList.add('success');

                setTimeout(() => {
                    statusElem.classList.remove('success');
                    formInnerElem.classList.remove('blocked');
                }, 2000)
            })
            .catch(() => {
                statusElem.classList.remove('loading');
                statusElem.classList.add('fail');

                setTimeout(() => {
                    statusElem.classList.remove('fail');
                    formInnerElem.classList.remove('blocked');
                }, 2000);
            })
    })
}