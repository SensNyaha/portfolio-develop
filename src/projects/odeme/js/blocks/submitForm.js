import inputTelMask from "./inputTelMask.js";

function submitForm() {
    let forms = document.querySelectorAll('.contact-form'); 

    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            let inputs = Array.from(form.querySelectorAll('input:not([type="submit"])'));
            let someWrong = inputs.some(elem => elem.classList.contains('wrong') || elem.value.includes('__-__'));
            
            
            if (!someWrong) {
                let data = new FormData(e.target);
                for (let kkk of data.entries()) {
                    console.log(kkk)
                }

                
                inputs.forEach(input => input.disabled = true);
                let submitButton = form.querySelector('input[type="submit"]');
                let prevTextButton = submitButton.value;
                let textColorButton = getComputedStyle(submitButton).color;

                submitButton.style.color = 'transparent';
                setTimeout(() => {
                    submitButton.value = 'Отправляем данные...';
                    submitButton.style.color = textColorButton;
                }, 500)

                setTimeout(() => {
                    submitButton.style.color = 'transparent';
                }, 2500)

                setTimeout(() => {
                    submitButton.value = 'Данные приняты';
                    submitButton.style.color = textColorButton;
                }, 3000)
                setTimeout(() => {
                    submitButton.style.color = 'transparent';
                }, 5000)
                setTimeout(() => {
                    submitButton.value = prevTextButton;
                    submitButton.style.color = textColorButton;
                    form.reset();
                    inputTelMask();
                    inputs.forEach(input => input.disabled = false);
                }, 5500)

            }

        })
    })
}

export default submitForm;