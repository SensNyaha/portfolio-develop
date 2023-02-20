import bindClose from "./bindClose.js";
import createModal from "./createModal.js";

function casesPreview() {
    let triggers = document.querySelectorAll('[data-to-case]');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            if (document.body.offsetWidth > 992) {
                removeAllActiveClasses('.cases-preview');
                trigger.classList.add('active');
                document.querySelector(`[data-case="${trigger.dataset.toCase}"]`)?.classList.add('active');
            }
            else {
                let copy = document.querySelector(`[data-case="${trigger.dataset.toCase}"]`)?.cloneNode(true);
                createModal('cases', copy);
                bindClose();
            }
        })
    })


    function removeAllActiveClasses(rootSelector) {
        try {
            document.querySelector(rootSelector).querySelectorAll('.active').forEach(elem => elem.classList.remove('active'))
        } catch (e) {console.log}
    }
}

export default casesPreview;