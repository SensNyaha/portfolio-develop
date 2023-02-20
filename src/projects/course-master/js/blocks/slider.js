function slider() {
    let slider = document.querySelector('.slider');
    let sliderInner = document.querySelector('.slider__inner');
    let sliderItems = sliderInner.querySelectorAll('img');

    let firstWidth = sliderItems[0].naturalWidth / (sliderItems[0].naturalHeight / sliderInner.offsetHeight);
    sliderInner.style.width = firstWidth + 'px';
    
    let pagBlock = document.querySelector('.slider__pags');
    for (let i = 0; i < sliderItems.length; i++) {
        let pag = document.createElement('div');
        pag.classList.add('slider__dot');
        if (i === 0) {
            pag.classList.add('active')
        }
        pagBlock.append(pag);
    }
    

    let slideIndex = 0;
    let currentOffset = 0;

    let next = document.querySelector('.slider__next');
    let prev = document.querySelector('.slider__prev');
    next.addEventListener('click', () => {
        slideIndex++;
        if (slideIndex >= sliderItems.length) {
            sliderItems[slideIndex - 1].style.width = '';//сброс инлайновой ширины

            slideIndex = 0;
            currentOffset = 0;
            sliderInner.style.transition = 'all 0.3s';
            sliderInner.style.left = -currentOffset + 'px';
            let windowWidth = slider.offsetWidth - next.offsetWidth - prev.offsetWidth - 2 * parseFloat(getComputedStyle(slider).gap);

            if (sliderItems[slideIndex].clientWidth > windowWidth) {
                sliderInner.style.width = windowWidth + 'px';
                sliderItems[slideIndex].style.width = windowWidth + 'px';
            } else {
                sliderInner.style.width = sliderItems[slideIndex].offsetWidth + 'px';
            }
            sliderInner.style.transition = 'all 0.5s';
        }
        else {
            sliderItems[slideIndex - 1].style.width = '';//сброс инлайновой ширины

            currentOffset += sliderItems[slideIndex - 1].offsetWidth;
    
            let windowWidth = slider.offsetWidth - next.offsetWidth - prev.offsetWidth - 2 * parseFloat(getComputedStyle(slider).gap);

            if (sliderItems[slideIndex].clientWidth > windowWidth) {
                sliderInner.style.width = windowWidth + 'px';
                sliderItems[slideIndex].style.width = windowWidth + 'px';
            } else {
                sliderInner.style.width = sliderItems[slideIndex].offsetWidth + 'px';
            }
            sliderInner.style.left = -(currentOffset) + 'px';
        }
        togglePags();
    })


    prev.addEventListener('click', () => {
        slideIndex--;
        if (slideIndex < 0) {
            sliderItems[slideIndex + 1].style.width = '';//сброс инлайновой ширины

            slideIndex = sliderItems.length - 1;
            for (let i = 0; i < sliderItems.length - 1; i++) {
                currentOffset += sliderItems[i].offsetWidth;
            }
            sliderInner.style.transition = 'all 0.3s';
            sliderInner.style.left = -(currentOffset) + 'px';

            let windowWidth = slider.offsetWidth - next.offsetWidth - prev.offsetWidth - 2 * parseFloat(getComputedStyle(slider).gap);

            if (sliderItems[slideIndex].clientWidth > windowWidth) {
                sliderItems[slideIndex].style.width = sliderInner.style.width = windowWidth + 'px';
            } else {
                sliderInner.style.width = sliderItems[slideIndex].offsetWidth + 'px';
            }
            sliderInner.style.transition = 'all 0.4s';
        }
        else {
            sliderItems[slideIndex + 1].style.width = ''; //сброс инлайновой ширины
            currentOffset -= sliderItems[slideIndex].offsetWidth;
    
            let windowWidth = slider.offsetWidth - next.offsetWidth - prev.offsetWidth - 2 * parseFloat(getComputedStyle(slider).gap);

            if (sliderItems[slideIndex].clientWidth > windowWidth) {
                sliderItems[slideIndex].style.width = sliderInner.style.width = windowWidth + 'px';
            } else {
                sliderInner.style.width = sliderItems[slideIndex].offsetWidth + 'px';
            }
            sliderInner.style.left = -(currentOffset) + 'px';
        }
        togglePags();
    })

    function togglePags() {
        let dots = document.querySelectorAll('.slider__dot');
        dots.forEach(item => {
            item.classList.remove('active')
        })
        dots[slideIndex].classList.add('active');
    }

    function bindPags() {
        let dots = document.querySelectorAll('.slider__dot');
        dots.forEach((item, index) => {
            item.addEventListener('click', () => {
                let dif = slideIndex - index;
                if (dif > 0) {
                    for (let i = 0; i < dif; i++) {
                        prev.click();
                    }
                } else if (dif < 0) {
                    for (let i = 0; i < -dif; i++) {
                        next.click();
                    }
                }
            })
        })
    }
    
    bindPags();

    window.addEventListener('resize', () => {
        slideIndex = 0;
        currentOffset = 0;

        sliderInner.style.left = -currentOffset + 'px';
        let windowWidth = slider.offsetWidth - next.offsetWidth - prev.offsetWidth - 2 * parseFloat(getComputedStyle(slider).gap);

        if (sliderItems[slideIndex].clientWidth > windowWidth) {
            sliderInner.style.width = windowWidth + 'px';
            sliderItems[slideIndex].style.width = windowWidth + 'px';
        } else {
            sliderInner.style.width = sliderItems[slideIndex].offsetWidth + 'px';
        }
        togglePags();
    })
}



export default slider;