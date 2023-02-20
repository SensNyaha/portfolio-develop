function zoosAside() {
    const swiper = new Swiper('.zoos__aside-slider', {
        slidesPerView: 4,
        direction: 'vertical',
        initialSlide: -1,
        spaceBetween: 10,
        // loop: true,
        freeMode: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            760: {
                allowTouchMove: false,
            }
        }
    })

    let hash = location.hash.slice(1)
    let avatars = document.querySelectorAll(`.avatar-${hash}`);
    if (avatars.length) {
        avatars.forEach(avatar => avatar.classList.add('chosen'))
    }

    for (let i=0; i<swiper.slides.length; i++) {
        if (swiper.slides[i].classList.contains('chosen')) {
            swiper.slideTo(i-1);
            break;
        }
    }

    document.querySelector('.zoos__aside').addEventListener('click', (e) => {
        if (e.target.closest('.swiper-slide').classList.contains('avatar')) {
            let pet;
            e.target.closest('.swiper-slide').classList.forEach(className => {
                if (className.includes('avatar-')) {
                    pet = className.split('-')[1];
                }
            })
            location.hash = '#' + pet;
        }
    })

    document.querySelector('.zoos__open').addEventListener('click', (e) => {
        e.target.closest('.zoos__open').classList.toggle('active');
        document.querySelector('.zoos__aside').classList.toggle('active');
    })
}
export default zoosAside;