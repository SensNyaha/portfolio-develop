function removeElement(target) {
    if (typeof target === 'string') {
        document.querySelector(target).remove();
    }
    else {
        target.remove();
    }
}

export default removeElement;