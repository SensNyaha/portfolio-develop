import projects from "../../projects/projects.js";

export default function projectsSlider() {
    const projectsObj = projects();

    const slider = document.querySelector('.projects-slider');
    const sliderWrapper = slider.querySelector('.projects-slider__wrapper')

    Object.keys(projectsObj).forEach(key => {
        const sliderItem = document.createElement('a');
        sliderItem.classList.add('projects-slider__slide', 'swiper-slide', key);
        sliderItem.setAttribute('href', projectsObj[key].path)

        const previewImage = document.createElement('img');
        previewImage.setAttribute('src', projectsObj[key].previewImage);

        sliderItem.appendChild(previewImage);
        sliderWrapper.appendChild(sliderItem);
    })

    const swiper = new Swiper('.swiper', {
        spaceBetween: 50,
    });
}
