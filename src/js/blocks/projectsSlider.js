import projects from "../../projects/projects.js";

export default function projectsSlider() {
    const projectsObj = projects();

    const slider = document.querySelector('.projects-slider');
    const sliderWrapper = slider.querySelector('.projects-slider__wrapper')

    Object.keys(projectsObj).forEach(key => {
        const sliderItem = document.createElement('div');

        sliderItem.classList.add('projects-slider__slide', key);


        const previewImage = document.createElement('img');
        previewImage.setAttribute('src', projectsObj[key].previewImage);
        previewImage.style.width = '1000px';
        previewImage.style.height = '1000px';

        sliderItem.appendChild(previewImage);
        sliderWrapper.appendChild(sliderItem);
    })
}
