function allBlockControls() {
    let blockControls = document.querySelectorAll('.block-control');

    blockControls.forEach(blockControl => {
        blockControl.addEventListener('click', (e) => {
            let circle = blockControl.querySelector('.block-control__circle');
            let leftTrigger = blockControl.querySelector('.block-control__left');
            let rightTrigger = blockControl.querySelector('.block-control__right');
            
            let content = e.target.closest('.block-control').parentElement.querySelector('.block-control__content');
            let grids = content?.querySelectorAll('.block-control__element');

            if (e.target.matches('.block-control__left')) {
                if (content) {
                    content.style.left = '0%';
                    grids.forEach(grid => grid.classList.remove('block-control__element_active'));
                    grids[0].classList.add('block-control__element_active');
                }

                rightTrigger.classList.remove('active');
                leftTrigger.classList.add('active');


                circle.classList.remove('right');
                circle.classList.add('left')
            }
            else if (e.target.matches('.block-control__right')) {
                if (content) {
                    content.style.left = '-100%';
                    grids.forEach(grid => grid.classList.remove('block-control__element_active'));
                    grids[1]?.classList?.add('block-control__element_active');
                }

                rightTrigger.classList.add('active');
                leftTrigger.classList.remove('active');


                circle.classList.remove('left');
                circle.classList.add('right')
            }
        })
    })
}

export default allBlockControls;