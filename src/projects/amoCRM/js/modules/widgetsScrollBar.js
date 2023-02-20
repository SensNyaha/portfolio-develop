function widgetsScrollBar() {
    let listWrapper = document.querySelector('.widgets__list-wrapper'),
        list = document.querySelector('.widgets__list'),
        scrollbar = document.querySelector('.widgets__list-scrollbar'),
        thumb = document.querySelector('.widgets__list-thumb');
    
    let listWrapperHeight = listWrapper.offsetHeight,
        listHeight = list.offsetHeight,
        scrollbarHeight = scrollbar.offsetHeight,
        thumbHeight = thumb.offsetHeight;

    let fullyScrolledHeight = scrollbarHeight - thumbHeight;


    thumb.addEventListener('mousedown', (e) => {
        thumb.style.position = 'absolute';
        thumb.style.zIndex = 1000;

        scrollbar.classList.add('active');

        let startMouseY = e.clientY;
        let topOfScrollbar = scrollbar.getBoundingClientRect().top;
        let topOfThumb= thumb.getBoundingClientRect().top;
        let shiftY = startMouseY - topOfThumb;

        function moveAt(clientY) {
            if (clientY - shiftY < topOfScrollbar) {
                thumb.style.top = 0 + 'px';
            }
            else if (clientY - shiftY - topOfScrollbar >  scrollbarHeight - thumbHeight) {
                clientY = scrollbarHeight - thumbHeight + shiftY + topOfScrollbar;
            }
            else {
                thumb.style.top = clientY - shiftY - topOfScrollbar + 'px';
            }
        }


        function scrollList(topOffset) {
            let ratio = fullyScrolledHeight / (listHeight - listWrapperHeight);
            list.style.top = -topOffset / ratio + 'px';
        }


        function onMouseMove(e) {
            moveAt(e.clientY);
            scrollList(parseInt(thumb.style.top));
        }
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', (e) => {
            scrollbar.classList.remove('active');
            document.removeEventListener('mousemove', onMouseMove);
            thumb.addEventListener('mouseup', null)
        })
    })

}

export {widgetsScrollBar}