function videoTriggersHoverEffect() {
    let playTriggers = Array.from(document.querySelectorAll('[data-action="openVideo"]'));

    playTriggers.forEach(item => {
        item.addEventListener('mouseover', (e) => {
            if (playTriggers.includes(e.target)) {
                e.target.parentElement.parentElement.querySelectorAll('[data-action="openVideo"]').forEach(item => {
                    item.classList.add('hovered')
                })
            }
        })
        item.addEventListener('mouseout', (e) => {
            if (playTriggers.includes(e.target)) {
                e.target.parentElement.parentElement.querySelectorAll('[data-action="openVideo"]').forEach(item => {
                    item.classList.remove('hovered')
                })
            }
        })
    })
}

export {videoTriggersHoverEffect};