function bindAnchors() {
    let anchors = document.querySelectorAll('a[data-anchor]');

    anchors.forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            document.querySelector(`.${e.target.getAttribute('data-anchor')}`).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            console.log(`.${e.target.getAttribute('data-anchor')}`)
        })
    })
}

export {bindAnchors}