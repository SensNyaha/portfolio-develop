function closeAllModals() {
    document.querySelectorAll('.modal').forEach(modal => {
        modal.remove();
        document.body.style.overflow = 'auto';
        document.body.style.margin = '0';
    })
}

export default closeAllModals