function petsSlider() {
    const swiper = new Swiper('.swiper-pets', {
        slidesPerView: 2,
        spaceBetween: 10,
        loop: true,
        slideToClickedSlide: true,
        navigation: {
            nextEl: '.swiper-button-next_pets',
            prevEl: '.swiper-button-prev_pets',
          },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        breakpoints: {
            1040: {
                slidesPerView: 4
            },
            530: {
                slidesPerView: 3,
                spaceBetween: 30
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

export default petsSlider;