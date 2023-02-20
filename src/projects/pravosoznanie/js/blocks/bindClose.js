import closeAllModals from "./closeAllModals.js";

function bindClose() {
    document.querySelectorAll('.close').forEach(close => {
        close.addEventListener('click', closeAllModals)
    })
    document.querySelector('.modal').addEventListener('click', (e) => {
        if (e.target.matches('.modal')) {
            closeAllModals();
        }
    })
}

export default bindClose;