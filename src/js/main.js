import mainContentSlider from "./blocks/mainContentSlider.js";
import projectsSlider from "./blocks/projectsSlider.js";
import technologies from "./blocks/technologies.js";

document.addEventListener('DOMContentLoaded', () => {
    try {
        technologies();
    } catch(e) {console.log(e)}
    try {
        mainContentSlider();
    } catch(e) {console.log(e)}
    try {
        projectsSlider();
    } catch(e) {console.log(e)}


})