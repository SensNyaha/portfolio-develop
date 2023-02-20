function inputFile(wrapperElement) {
    let inputs = wrapperElement.querySelectorAll('input[type="file"]');

    inputs.forEach(input => {
        let label = input.parentElement.querySelector(`[for="${input.getAttribute('id')}"]`);


        input.addEventListener('change', () => {
            label.textContent = input.files[0].name
        })
    })
}

export default inputFile;