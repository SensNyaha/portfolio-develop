function prideSliders() {
    const swiperPhoto = new Swiper('.pride__slider-photo', {
        // loop: true,
        slidesPerView: 1,

        breakpoints: {
          1230: {
            slidesPerView: 6,
            spaceBetween: 34,
          },
          992: {
            slidesPerView: 4,
            spaceBetween: 25,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 15,
          }
        }
    });

    const swiperVideo = new Swiper('.pride__slider-video', {
        loop: true,
        slidesPerView:1,
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 77,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          450: {
            slidesPerView: 2,
            spaceBetween: 25,
          }
        }
    });
}

export default prideSliders;