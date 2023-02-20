import removeElement from "./removeElement.js";
import returnScrollWidth from './returnScrollWidth.js';

function photoPride() {
    let photoPreviews = document.querySelectorAll('.pride__grid .pride__photo');
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
                cloneImg.style.cssText = 'width: auto; height: auto;position: static'
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

export default photoPride