function reviewsSliders() {
    const swiperPhoto = new Swiper('.reviews__slider_photo', {
        loop: true,
        slidesPerView: 1,

        navigation: {
          nextEl: '.reviews__button-next',
          prevEl: '.reviews__button-prev',
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 77,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          }
        }
    });

    const swiperVideo = new Swiper('.reviews__slider_video', {
        loop: true,
        slidesPerView: 1,

        navigation: {
          nextEl: '.reviews__button-next',
          prevEl: '.reviews__button-prev',
        },
        breakpoints: {
          992: {
            slidesPerView: 3,
            spaceBetween: 77,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 25,
          }
        }
    });
}

export default reviewsSliders;