import projects from "../../projects/projects.js";

export default function projectsSlider() {
    const projectsObj = projects();

    const slider = document.querySelector('.projects-slider');
    const sliderWrapper = slider.querySelector('.projects-slider__wrapper')

    Object.keys(projectsObj).forEach(key => {
        const sliderItemWrappper = document.createElement('div');
        sliderItemWrappper.classList.add('projects-slider__slide-wrapper', 'swiper-slide', key);

        const sliderItem = document.createElement('a');
        sliderItem.classList.add('projects-slider__slide');
        sliderItem.setAttribute('href', projectsObj[key].path)

        const previewImage = document.createElement('img');
        previewImage.setAttribute('src', projectsObj[key].previewImage);


        sliderItem.appendChild(previewImage);
        sliderItemWrappper.appendChild(sliderItem)
        sliderWrapper.appendChild(sliderItemWrappper);
    })

    const swiper = new Swiper('.swiper', {
        spaceBetween: 50,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}
