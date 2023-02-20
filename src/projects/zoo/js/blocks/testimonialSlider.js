function testimonialSlider() {
    const swiper = new Swiper('.swiper-testimonial', {
        slidesPerView: 1,
        spaceBetween: 30,
        autoplay: {
            delay: 6000,
        },
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next_testimonial',
            prevEl: '.swiper-button-prev_testimonial',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        breakpoints: {
            1040: {
                slidesPerView: 2
            }
        }
    });
    
    swiper.on('slideChange', () => {
        let counterDiv = swiper.$el[0].querySelector('.swiper-counter');
         
        if (counterDiv) {
            if (swiper.realIndex < 10) {
                counterDiv.querySelector('.swiper-counter__current').textContent = '0' + (+swiper.realIndex + 1);
            }
            else {
                counterDiv.querySelector('.swiper-counter__current').textContent = +swiper.realIndex + 1;
            }
        }
    })

    function startIndexes() {
        let counterDiv = swiper.$el[0].querySelector('.swiper-counter');
        let slides = swiper.$el[0].querySelectorAll('.swiper-slide');
        let slidesDup = swiper.$el[0].querySelectorAll('.swiper-slide-duplicate');
        
        if (counterDiv) {
            if (swiper.activeIndex < 10) {
                counterDiv.querySelector('.swiper-counter__current').textContent = '0' + (+swiper.realIndex + 1);
            }
            else {
                counterDiv.querySelector('.swiper-counter__current').textContent = +swiper.realIndex + 1;
            }
            if (slides.length - slidesDup.length < 10) {
                counterDiv.querySelector('.swiper-counter__total').textContent = '0' + (slides.length - slidesDup.length);
            } else {
                counterDiv.querySelector('.swiper-counter__total').textContent = slides.length - slidesDup.length;
            }
        }
    }
    startIndexes();
}

export default testimonialSlider;