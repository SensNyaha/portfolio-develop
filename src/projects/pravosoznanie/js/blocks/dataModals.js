import bindClose from "./bindClose.js";
import createModal from "./createModal.js";


function dataModals() {
    let triggers = document.querySelectorAll('[data-modal]');

    triggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            createModal(trigger.getAttribute('data-modal'), trigger);
            bindClose();
        })
    })    
}

export default dataModals;