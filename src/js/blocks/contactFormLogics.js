export default function contactFormLogics() {
    // radio switchers

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


            waysInputs.forEach(inp => inp.classList.remove('contactme__ways-input--avl'));

            e.target.closest('.contactme__ways').querySelector(`input[name=${e.target.dataset.way}]`).classList.add('contactme__ways-input--avl')
        })
    })
}