function thanksGrid() {
    let letters = document.querySelectorAll('.thanks__letter');
    let logos = document.querySelectorAll('.thanks__logo');
    let logosWrapper = document.querySelector('.thanks__grid');

    logosWrapper.addEventListener('mouseover', (e) => {
        let closestLogo = e.target.closest('.thanks__logo');
        if (closestLogo && !closestLogo.classList.contains('hovering')) {
            closestLogo.classList.add('hovering');
            closestLogo.addEventListener('mouseout', (e) => {
                closestLogo.classList.remove('hovering');
            })
        }
    })

    logosWrapper.addEventListener('click', (e) => {
        let closestLogo = e.target.closest('.thanks__logo');
        if (closestLogo) {
            let index = Array.from(logos).indexOf(closestLogo);
            resetAllThanksBoard();
            letters[index].classList.add('showing');
            logos[index].classList.add('showing');
        }
    })

    function resetAllThanksBoard() {
        letters.forEach(letter => letter.classList.remove('showing'));
        logos.forEach(logo => logo.classList.remove('showing'));
    }

    logos[0].click();
}

function openLetterFully() {
    let letters = document.querySelectorAll('.thanks__text');
    let links = document.querySelectorAll('.thanks__link');

    let fullyTextAside = document.createElement('aside');
    fullyTextAside.classList.add('thanks__fulltext-box');
    document.querySelector('.thanks').append(fullyTextAside)

    links.forEach(link => link.addEventListener('click', (e) => {
        fullyTextAside.innerHTML = e.target.closest('.thanks__letter').querySelector('.thanks__from').outerHTML;
        fullyTextAside.innerHTML += e.target.closest('.thanks__letter').querySelector('.thanks__text').outerHTML;
        fullyTextAside.innerHTML += `
            <div class='close'><span></span><span></span></div>
        `
        fullyTextAside.classList.add('showing')

        fullyTextAside.querySelector('.close').addEventListener('click', () => {
            fullyTextAside.classList.remove('showing')
        })
    }))
}

export {thanksGrid, openLetterFully}