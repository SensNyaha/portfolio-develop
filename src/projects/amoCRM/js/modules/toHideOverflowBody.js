import {returnScrollWidth} from './returnScrollWidth.js';

function hideOrNotBodyScroll(bool) {
    if (bool) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = returnScrollWidth() + 'px';
    }
    else {
        document.body.style.overflow = 'auto';
        document.body.style.paddingRight = '0px';
    }
}
export {hideOrNotBodyScroll}