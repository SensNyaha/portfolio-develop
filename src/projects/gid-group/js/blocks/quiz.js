import getScrollWidth from './getScroll.js';

function quiz() {
    let quizTriggers = document.querySelectorAll('[data-to="quiz"]');

    let quiz = document.querySelector('.quiz');

    let quizSlides = quiz.querySelectorAll('.quiz__slide');

    let quizControls = quiz.querySelectorAll('[data-quiz-to]');

    let closers = quiz.querySelectorAll('.quiz__close');

    quizTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            quiz.classList.add('opened');

            showQuizSlide(1);
        })
    })

    quizControls.forEach(control => {
        control.addEventListener('click', () => {
            showQuizSlide(control.getAttribute('data-quiz-to'));
        })
    })

    closers.forEach(close => {
        close.addEventListener('click', () => {
            quiz.classList.remove('opened')
        })
    })

    function showQuizSlide(index) {
        quizSlides.forEach(slide => 
            slide.classList.add('dn')
        );

        quizSlides[index-1].classList.remove('dn');
    }
}


export default quiz;