function highlightInput() {
    const inputs = document.querySelectorAll('input');

    inputs.forEach(item => {
        item.autocomplete = 'off';
        if (item.getAttribute('name') == 'name') {
            item.addEventListener('blur', () => {
                let regexp = /\d/g;
                if (item.value.length === 0 || item.value.match(regexp)) {
                    item.classList.add('wrong');
                }
            })
            item.addEventListener('focus', () => {
                item.classList.remove('wrong');
            })
        }
        else if (item.getAttribute('name') == 'mail') {
            item.addEventListener('blur', () => {
                let regexp = /.+@.+\..+/g;
                if (item.value.length === 0 || !item.value.match(regexp)) {
                    item.classList.add('wrong');
                }
            })
            item.addEventListener('focus', () => {
                item.classList.remove('wrong');
            })
        }
        else if (item.getAttribute('name') == 'tel') {
            item.addEventListener('blur', () => {
                if (item.value.length < 18) {
                    item.classList.add('wrong');
                }
            })
            item.addEventListener('focus', () => {
                item.classList.remove('wrong');
            })
        }
    })
}

export default highlightInput;