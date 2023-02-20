import removeElement from "./removeElement.js";
import returnScrollWidth from './returnScrollWidth.js';

function photoReviews() {
    let photoPreviews = document.querySelectorAll('.reviews__slider_photo .reviews__item');
    photoPreviews.forEach(prev => {
        prev.addEventListener('click', (e) => {
            let target = e.target;
            let innerImg = target.matches('img') ? target : target.querySelector('img');
            
            let modal = document.createElement('div');
            modal.classList.add('modal');

            let content = document.createElement('div');
            content.classList.add('modal__photo');
            modal.append(content);

            let cloneImg = innerImg?.cloneNode(true);
            if (cloneImg && cloneImg.matches('img')) {
                content.append(cloneImg);

                document.body.append(modal);
                document.body.style.overflow = 'hidden';
                document.body.style.marginRight = returnScrollWidth() + 'px';

                setTimeout(() => cloneImg.classList.add('opened'), 100)
                modal.addEventListener('click', function() {
                    cloneImg.classList.remove('opened'),
                    document.body.style.margin = '0';
                    // setTimeout(() => removeElement(this), 300);
                    modal.addEventListener('transitionend', () => removeElement(this))
                    document.body.style.overflow = 'auto';
                });
            }
        })
    })

}

export default photoReviews