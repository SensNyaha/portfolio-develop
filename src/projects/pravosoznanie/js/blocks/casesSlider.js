function casesSlider() {
    const swiperPhoto = new Swiper('.cases-slider__slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.cases-slider__next',
            prevEl: '.cases-slider__prev',
          },
        breakpoints: {
          1230: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 25,
          },
        //   450: {
        //     slidesPerView: 2,
        //     spaceBetween: 15,
        //   }
        }
    });
}

export default casesSlider;