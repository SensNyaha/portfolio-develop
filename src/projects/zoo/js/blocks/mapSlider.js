function mapSlider() {
    const swiper = new Swiper('.swiper-map', {
        slidesPerView: 3,
        spaceBetween: 10,
        loop: true,
        centeredSlide: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets'
        },
        breakpoints: {
            530: {
                slidesPerView: 4,
                spaceBetween: 20,
            },
            760: {
                slidesPerView: 6,
                spaceBetween: 10,
            },
            1040: {
                slidesPerView: 6,
                spaceBetween: 30,
            },
            1350: {
                slidesPerView: 8,
            },

        }
    })

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


    document.querySelector('.map__slider').addEventListener('click', (e) => {
        let avatar = e.target.closest('.avatar');
        let country;

        if (avatar) {
            avatar.classList.forEach(className => {
                if (className.includes('avatar-country')) {
                    country = className.slice(-2);
                }
            })

            
            avatar.closest('.map__slider').querySelectorAll('.avatar').forEach(av => av.classList.remove('chosen'));
            avatar.classList.add('chosen');
        }

        if (country) {
            let pin = document.querySelector(`.map__pin_${country}`);
            
            if (pin) {
                pin.classList.add('active');
                setTimeout(()=>pin.classList.remove('active'), 2000);
            }
        }
    })
}

export default mapSlider;