function resetCalculator() {
    let calculatorQuestions = document.querySelectorAll('.calculator__calc-block');

    calculatorQuestions.forEach(block => {
        let blockAnswers = block.querySelectorAll('button');
        blockAnswers.forEach(item => item.classList.remove('active'));
        blockAnswers[0].classList.add('active');
    })
}

export {resetCalculator}