import contactFormLogics from "./blocks/contactFormLogics.js";
import mainContentSlider from "./blocks/mainContentSlider.js";
import projectsSlider from "./blocks/projectsSlider.js";
import technologies from "./blocks/technologies.js";

document.addEventListener('DOMContentLoaded', () => {
    try {
        technologies();
    } catch(e) {console.error(e)}
    try {
        mainContentSlider();
    } catch(e) {console.error(e)}
    try {
        projectsSlider();
    } catch(e) {console.error(e)}
    try {
        contactFormLogics();
    } catch (e) {console.error(e)}

})