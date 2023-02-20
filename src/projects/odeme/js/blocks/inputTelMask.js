function inputTelMask() {
    let matrix = "+7 (___) ___-__-__";
    const eventCallback = function (e) {
        let i = 0,
        def = matrix.replace(/\D/g, ""),
        val = e.target.value.replace(/\D/g, "");
        if (e.type === 'blur') {
            if (val.length < matrix.match(/([\_\d])/g).length) {
                e.target.value = '';
                return;
            }
        }
        if (def.length >= val.length) val = def;
        e.target.value = matrix.replace(/./g, function (a) {
            return /[_\d]/.test(a) && i < val.length ? val.charAt(i++) : i >= val.length ? "" : a
        });
    }
    const phone_inputs = document.querySelectorAll('[data-input="tel"]');
    for (let elem of phone_inputs) {
        elem.value = matrix;
        for (let ev of ['input', 'focus']) {
            elem.addEventListener(ev, eventCallback);
        }
        elem.addEventListener('blur', () => {
            if (elem.value.length <= 2) {
                inputTelMask();
                elem.classList.add('wrong')
            }
        })
    }
}

export default inputTelMask;