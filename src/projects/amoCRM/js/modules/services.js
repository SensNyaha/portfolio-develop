function bindServiceCards() {
    let cards = document.querySelectorAll('.services__card');
    cards.forEach(card => {
        card.addEventListener('click', (e) => {
            if (document.documentElement.offsetWidth <= 800) {
                if (card.classList.contains('opened')) {
                    card.classList.remove('opened')
                }
                else {
                    cards.forEach(card => card.classList.remove('opened'));
                    card.classList.add('opened')
                }
                
            }
        })
    })

}

export {bindServiceCards}