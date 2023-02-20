

function bindCalculator() {
    let calculatorQuestions = document.querySelectorAll('.calculator__calc-block');

    calculatorQuestions.forEach(block => {
        let blockAnswers = block.querySelectorAll('button');

        blockAnswers[0].classList.add('active');

        blockAnswers.forEach(answer => {
            answer.addEventListener('click', (e) => {
                e.preventDefault();
                blockAnswers.forEach(item => item.classList.remove('active'));
                e.target.classList.add('active');
            })
        })
    })
}

export {bindCalculator}