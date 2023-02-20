function howSlider() {
    const swiper = new Swiper('.swiper-how', {
        slidesPerView: 1,
        autoplay: {
            delay: 4000,
          },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
    });
    
    swiper.on('slideChange', () => {
        let counterDiv = swiper.$el[0].querySelector('.swiper-counter');
         
        if (counterDiv) {
            if (swiper.activeIndex < 10) {
                counterDiv.querySelector('.swiper-counter__current').textContent = '0' + (swiper.activeIndex + 1);
            }
            else {
                counterDiv.querySelector('.swiper-counter__current').textContent = swiper.activeIndex + 1;
            }
        }
    })

    function startIndexes() {
        let counterDiv = swiper.$el[0].querySelector('.swiper-counter');
        
        if (counterDiv) {
            if (swiper.activeIndex < 10) {
                counterDiv.querySelector('.swiper-counter__current').textContent = '0' + (swiper.activeIndex + 1);
            }
            else {
                counterDiv.querySelector('.swiper-counter__current').textContent = swiper.activeIndex + 1;
            }
            if (swiper.slides.length < 10) {
                counterDiv.querySelector('.swiper-counter__total').textContent = '0' + swiper.slides.length;
            } else {
                counterDiv.querySelector('.swiper-counter__total').textContent = swiper.slides.length;
            }
        }
    }
    startIndexes();
}

export default howSlider;