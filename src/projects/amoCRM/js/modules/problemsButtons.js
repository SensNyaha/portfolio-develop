function bindProblemButtons() {
    let buttons = document.querySelectorAll('.problems__before-elem-title');
    let topics = document.querySelectorAll('.problems__before-list');
    let width = document.body.offsetWidth;



        buttons.forEach(item => item.addEventListener('click', (e) => {
            if (width <= 1050) {
                if (e.target.classList.contains('chosen')) {
                    e.target.classList.remove('chosen');
                } else {
                    buttons.forEach(item => {
                        item.classList.remove('chosen')
                    })
                    e.target.classList.add('chosen');
                }    
            }
        }))

}

export {bindProblemButtons};