function repairSliders() {
    let worksSliderElem = document.querySelector('.works-slider__container');

    let worksSlider = new Swiper(worksSliderElem, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next_works',
            prevEl: '.swiper-button-prev_works',
        },
        loop: true,
        autoHeight: true,

        breakpoints: {
            520: {
                slidesPerView: 2,
            },
            1300: {
                slidesPerView: 3,
            }
        }
    });

    let reviewsSliderElem = document.querySelector('.reviews-slider__container');

    let reviewsSlider = new Swiper(reviewsSliderElem, {
        slidesPerView: 1,
        navigation: {
            nextEl: '.swiper-button-next_reviews',
            prevEl: '.swiper-button-prev_reviews',
        },
    });

}

export default repairSliders;