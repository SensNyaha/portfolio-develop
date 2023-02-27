export default function technologies() {
    const techDivs = document.querySelectorAll('.tchngs__item');
    const positions = {};

    let timer;

    const step = .4;

    function takeDirection() {
        techDivs.forEach(div => {
            let angle = Math.random() * 360 - 180;

            div.dataset.angle = angle;
            
            div.style.position = 'absolute'
        })
    }
    takeDirection();

    function placeDivByState(div, positions) {
        if (!div.classList.contains('opened')) {
            div.style.left = positions[div.dataset.tchn].left;
            div.style.top = positions[div.dataset.tchn].top;
        }
    }

    function randomStartPosition() {
        const parent = document.querySelector('.tchngs__content');
        const parentWidth = parent.offsetWidth;
        const parentHeight = parent.offsetHeight;

        const itemWidth = techDivs[0].offsetWidth;
        const itemHeight = techDivs[0].offsetHeight;

        for (let i = 0; i < techDivs.length; i++) {
            
            const randomedX = Math.random() * parentWidth;
            const randomedY = Math.random() * parentHeight;

            const x = randomedX - itemWidth > 0 ? randomedX - itemWidth : randomedX;
            const y = randomedY - itemHeight > 0 ? randomedY - itemHeight : randomedY;

            positions[techDivs[i].dataset.tchn] = {...positions[techDivs[i].dataset.tchn], left: x + 'px', top: y + 'px'};

            let collision = false;
            techDivs.forEach(outer => {
                if (outer === techDivs[i]) return;

                if (x + itemWidth >= parseFloat(outer.style.left) && x + itemWidth <= parseFloat(outer.style.left) + outer.offsetWidth || x >= parseFloat(outer.style.left) && x <= parseFloat(outer.style.left) + outer.offsetWidth) {
                    collision = true;
                    return;
                }
            })
            if (collision) {
                i--;
                continue;
            }
            placeDivByState(techDivs[i], positions)

        }
    }
    randomStartPosition();

    function changeStateAndPlace(positions, div, step, mltplr) {
        positions[div.dataset.tchn] = {
            ...positions[div.dataset.tchn], 
            left: parseFloat(div.style.left) + Math.cos(div.dataset.angle * (Math.PI / 180)) * step * mltplr + 'px', 
            top: parseFloat(div.style.top) - Math.sin(div.dataset.angle * (Math.PI / 180)) * step * mltplr + 'px'
        }
        placeDivByState(div, positions)
    }

    function moveItems() {
        techDivs.forEach(div => {
            const left = parseFloat(div.style.left);
            const top = parseFloat(div.style.top);

            const centerX = left + div.offsetWidth / 2;
            const centerY = top + div.offsetHeight / 2;
            const radius = div.offsetWidth / 2;

            if (left <= 0 || left >= div.parentElement.offsetWidth - div.offsetWidth - 4) {
                const newAngle = 180 - +div.dataset.angle;
                div.dataset.angle = newAngle >= -180 && newAngle <= 180 ? newAngle : newAngle % 180 - 180;

                if (left <= 0) {
                    div.style.left = '1px';
                }
                else {
                    div.style.left = div.parentElement.offsetWidth - div.offsetWidth - 4 + 'px';
                }
            }
            
            if (top < 0 || top > div.parentElement.offsetHeight - div.offsetHeight - 4) {
                const newAngle = -div.dataset.angle;
                div.dataset.angle = newAngle >= -180 && newAngle <= 180 ? newAngle : newAngle % 180 - 180;

                if (top <= 0) {
                    div.style.top = '1px';
                }
                else {
                    div.style.top = div.parentElement.offsetHeight - div.offsetHeight - 4 + 'px';
                }
            }

            techDivs.forEach(outerDiv => {
                if (outerDiv === div) return;

                const outerLeft = parseFloat(outerDiv.style.left);
                const outerTop = parseFloat(outerDiv.style.top);

                const outerCenterX = outerLeft + outerDiv.offsetWidth / 2;
                const outerCenterY = outerTop + outerDiv.offsetHeight / 2;
                const outerRadius = outerDiv.offsetWidth / 2;

                const deltaX = outerCenterX - centerX;
                const deltaY = outerCenterY - centerY;

                if (deltaX ** 2 + deltaY ** 2 - (radius + outerRadius) ** 2 < step * 20) {

                    const angle = Math.atan2(deltaX, deltaY);
                    const sin = Math.sin(angle);
                    const cos = Math.cos(angle);

                    const vx1 = step * Math.cos(div.dataset.angle * Math.PI / 180) * cos + step * Math.sin(div.dataset.angle * Math.PI / 180) * sin;
                    const vy1 = step * Math.sin(div.dataset.angle * Math.PI / 180) * cos - step * Math.cos(div.dataset.angle * Math.PI / 180) * sin;
                    const vx2 = step * Math.cos(outerDiv.dataset.angle * Math.PI / 180) * cos + step * Math.sin(outerDiv.dataset.angle * Math.PI / 180) * sin;
                    const vy2 = step * Math.sin(outerDiv.dataset.angle * Math.PI / 180) * cos - step * Math.cos(outerDiv.dataset.angle * Math.PI / 180) * sin;

                    const vx1Final = ((radius - outerRadius) * vx1 + 2 * outerRadius * vx2) / (radius + outerRadius);
                    const vx2Final = ((outerRadius - radius) * vx2 + 2 * radius * vx1) / (radius + outerRadius);
                    const vy1Final = vy1;
                    const vy2Final = vy2;

                    div.dataset.angle = Math.atan2(vx1Final, vy1Final) * 180 / Math.PI;
                    outerDiv.dataset.angle = Math.atan2(vx2Final, vy2Final) * 180 / Math.PI;

                    function checkCollision(div, outerDiv, step) {
                        const left = parseFloat(div.style.left);
                        const top = parseFloat(div.style.top);

                        const centerX = left + div.offsetWidth / 2;
                        const centerY = top + div.offsetHeight / 2;
                        const radius = div.offsetWidth / 2;

                        const outerLeft = parseFloat(outerDiv.style.left);
                        const outerTop = parseFloat(outerDiv.style.top);

                        const outerCenterX = outerLeft + outerDiv.offsetWidth / 2;
                        const outerCenterY = outerTop + outerDiv.offsetHeight / 2;
                        const outerRadius = outerDiv.offsetWidth / 2;

                        const deltaX = outerCenterX - centerX;
                        const deltaY = outerCenterY - centerY;

                        return deltaX ** 2 + deltaY ** 2 - (radius + outerRadius) ** 2 < step;
                    }
                    function checkContaining(div) {
                        const left = parseFloat(div.style.left);
                        const top = parseFloat(div.style.top);

                        return left >= 0 && left <= div.parentElement.offsetWidth - div.offsetWidth - 4 && top >= 0 && top <= div.parentElement.offsetWidth - div.offsetHeight - 4
                    }

                    let multiplier = 1;

                    if (!div.classList.contains('opened')) {
                        while (checkCollision(div, outerDiv, step) && checkContaining(div) && checkContaining(outerDiv)) {                            
                            div.dataset.angle = +div.dataset.angle + 30;
                            outerDiv.dataset.angle = +outerDiv.dataset.angle - 30;
                            changeStateAndPlace(positions, div, step, multiplier);
                            changeStateAndPlace(positions, outerDiv, step, multiplier);
                            multiplier += 0.2;
                        }
                    }
                }
            })
            changeStateAndPlace(positions, div, step, 1);
        })
    }
    moveItems();
    timer = setInterval(moveItems, 0)

    let currentOpenedDiv, prevOpenedDiv, infoShowTimer;

    function changeInfoBlocksPos(techDivs) {
        techDivs.forEach(div => {
            const infoElem = div.querySelector('.tchngs__item-info') ;
            const rects = infoElem.getBoundingClientRect();
            if (!rects.width && !rects.height) {
                rects = window.getComputedStyle(infoElem)
            }
    
            if (rects.width > rects.height) {
                infoElem.style.height = rects.width + 'px';
                infoElem.style.width = rects.width + 'px';
            }
            else {
                infoElem.style.width = rects.height + 'px'
                infoElem.style.height = rects.height + 'px';
            }
            
            const deltaDest = Math.sqrt(2 * ((infoElem.offsetWidth/2) ** 2)) - infoElem.offsetWidth/2 + Math.sqrt(2 * ((div.offsetWidth/2) ** 2)) - div.offsetWidth/2;
    
            infoElem.style.left = -parseFloat(infoElem.style.width) + deltaDest + 'px';
            infoElem.style.top = -parseFloat(infoElem.style.height) + deltaDest + 'px';
        })
    }
    changeInfoBlocksPos(techDivs)
    window.addEventListener('resize', () => {
        changeInfoBlocksPos(techDivs)
    })

    techDivs.forEach(div => {           
        div.addEventListener('mouseenter', (e) => {
            if (e.target.closest('.tchngs__item') === prevOpenedDiv) {
                clearTimeout(infoShowTimer);
            } else {
                document.querySelectorAll('.tchngs__item').forEach(item => {
                    item.classList.remove('opened');
                    item.querySelector('.tchngs__item-info').classList.remove('opened')
                })
            }
            if (!currentOpenedDiv || prevOpenedDiv && prevOpenedDiv !== e.target.closest('.thcngs__item')) {
                currentOpenedDiv = e.target.closest('.tchngs__item');
            }

            currentOpenedDiv.classList.add('opened')
            
            const infoElem = currentOpenedDiv.querySelector('.tchngs__item-info');
            infoElem.classList.add('opened')

            if (currentOpenedDiv !== prevOpenedDiv || currentOpenedDiv.style.top !== prevOpenedDiv.style.top && currentOpenedDiv.style.left !== prevOpenedDiv.style.left) {
                const rects = infoElem.getBoundingClientRect();
                if (!rects.width && !rects.height) {
                    rects = window.getComputedStyle(infoElem)
                }
                if (rects.width >= parseFloat(rects.left)) {
                    infoElem.style.left = Math.abs(parseFloat(infoElem.style.left)) + 'px';
                }
                else if (rects.width >= div.closest('.tchngs__content').offsetWidth - parseFloat(rects.left) - rects.width){
                    infoElem.style.left = -Math.abs(parseFloat(infoElem.style.left)) + 'px';
                }
                if (rects.height >= parseFloat(rects.top)) {
                    infoElem.style.top = Math.abs(parseFloat(infoElem.style.top)) + 'px';
                }
                else if (rects.height >= div.closest('.tchngs__content').offsetHeight - parseFloat(rects.top) - rects.height){
                    infoElem.style.top = -Math.abs(parseFloat(infoElem.style.top)) + 'px';
                }
            }
            
        })
        div.addEventListener('mouseleave', (e) => {
            const divElem = e.target.closest('.tchngs__item') 
            prevOpenedDiv = divElem;

            infoShowTimer = setTimeout(() => {

                if (currentOpenedDiv && currentOpenedDiv === divElem) {
                    const infoElem = divElem.querySelector('.tchngs__item-info');
                    infoElem.classList.remove('opened')

                    divElem.classList.remove('opened');
                }
            }, 600)
        })}

    )
}