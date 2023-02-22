export default function mainContentSlider() {
    let currentSlide = 4;
    // const slidesCount = document.querySelectorAll('.wrapper .content > *').length;
    const slidesCount = 5;
    const contentBlock = document.querySelector('.content');
    changeContentBlockTranslate(contentBlock, currentSlide)

    const controlLeft = document.querySelector('.controls__button--left');
    if (currentSlide === 1) {
        controlLeft.style.opacity = '0.3';
        controlLeft.style.pointerEvents = 'none';
    }

    const controlRight = document.querySelector('.controls__button--right');

    function changeContentBlockTranslate(contentBlock, currentSlide) {
        contentBlock.style.transform = `translateX(-${100 / slidesCount * (currentSlide - 1)}%)`;
    }

    controlLeft.addEventListener('click', () => {
        if (currentSlide !== 1) {
            currentSlide--;
            changeContentBlockTranslate(contentBlock, currentSlide);  
        }

        if (currentSlide === 1) {
            controlLeft.style.opacity = '0.3';
            controlLeft.style.pointerEvents = 'none';
        } else {
            controlRight.style.opacity = '';
            controlRight.style.pointerEvents = '';

        }
    })
    controlRight.addEventListener('click', () => {
        if (currentSlide !== slidesCount) {
            currentSlide++;
            changeContentBlockTranslate(contentBlock, currentSlide);
        }

        if (currentSlide === slidesCount) {
            controlRight.style.opacity = '0.3';
            controlRight.style.pointerEvents = 'none';
        } else {
            controlLeft.style.opacity = '';
            controlLeft.style.pointerEvents = '';
        }
    })
}