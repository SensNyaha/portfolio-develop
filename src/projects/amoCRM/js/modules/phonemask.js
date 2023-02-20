function bindMask() {
    function maskingTel(e) {
        let matrix = '+7 (___) ___-__-__',
            iterator = 0,
            def = matrix.replace(/\D/g, ''),
            value = e.target.value.replace(/\D/g, '');
        
        if (def.length >= value.length) {
            value = def;
        }
        
        e.target.classList.remove('wrong')
        e.target.nextElementSibling.classList.remove('wrong');
    
        e.target.value = matrix.replace(/./g, (a) => {
            return /[_\d]/.test(a) && iterator < value.length ? value.charAt(iterator++) : iterator >= value.length ? '' : a;
        })
    }

    function bluringTel(e) {
        let matrix = '+7 (___) ___-__-__',
            def = matrix.replace(/\D/g, ''),
            value = e.target.value.replace(/\D/g, '');
        
        if (value == def) {
            e.target.value = '';
        }
        if (value.length < 11) {
            e.target.classList.add('wrong')
            e.target.nextElementSibling.classList.add('wrong');
        }
    }

    let inputs = document.querySelectorAll('.phone-form__input');

    inputs.forEach(item => {
        item.addEventListener('click', maskingTel)
    })

    inputs.forEach(item => {
        item.addEventListener('input', maskingTel)
    })

    inputs.forEach(item => {
        item.addEventListener('blur', bluringTel)
    })
}

export {bindMask}