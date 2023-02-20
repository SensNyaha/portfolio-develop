function map() {
    jQuery(document).ready(function() {
        jQuery('.map__map').vectorMap({
            map: 'world_en',
            backgroundColor: 'transparent',
            color: '#333333',
            colors: {
                us: '#dadada',
                cn: '#dadada',
                gb: '#dadada',
                ng: '#dadada',
                do: '#dadada',
            },
            enableZoom: false,
            hoverOpacity: .6,
            selectedColor: '#333333',
            onRegionClick: undefined,
            onRegionSelect: undefined,
            pins: {
                "us": `
                    <div class="map__pin map__pin_us" data-name="West End Bald Eagle" data-region='on an island near Los Angeles' data-population='more than 270 pairs in 2013'>
                        <img src="images/map/marker.svg" alt="" class="map__pin-marker">
                        <img src="images/animals-slider/eagle.jpg" alt="" class="map__pin-pet">
                    </div>
                `,
                "cn": `
                    <div class="map__pin map__pin_cn" data-name="Giant Panda" data-region='in a few mountain ranges in central China' data-population='had increased to 1,864 individuals'>
                        <img src="images/map/marker.svg" alt="" class="map__pin-marker">
                        <img src="images/animals-slider/panda.jpg" alt="" class="map__pin-pet">
                    </div>
                `,
                "gb": `
                    <div class="map__pin map__pin_gb" data-name="Bengal Fox" data-region='big platos of Great Britain' data-population='had increased to 231 animals'>
                        <img src="images/map/marker.svg" alt="" class="map__pin-marker">
                        <img src="images/animals-slider/fox.jpg" alt="" class="map__pin-pet">
                    </div>
                `,
                "cm": `
                    <div class="map__pin map__pin_cm" data-name="Gorilla Beringei" data-region='are restricted to the mountain rainforest and subalpine forest of eastern Democratic Republic of the Congo' data-population='more than 120 pairs in 2019'>
                        <img src="images/map/marker.svg" alt="" class="map__pin-marker">
                        <img src="images/animals-slider/gorilla.webp" alt="" class="map__pin-pet">
                    </div>
                `,
                "do": `
                    <div class="map__pin map__pin_do" data-name="Leucistic Alligator" data-region='are restricted to the mountain rainforest and subalpine forest of eastern Dominicana Republic' data-population='had increased to 1,831 animals'>
                        <img src="images/map/marker.svg" alt="" class="map__pin-marker">
                        <img src="images/animals-slider/alligator.jpg" alt="" class="map__pin-pet">
                    </div>
                `,  
            },
            pinMode: 'content'
        });
    });

    document.querySelector('.map__map').addEventListener('mouseenter', (e) => {
        e.target.querySelectorAll('.map__pin').forEach(pin => {
            pin.addEventListener('mouseover', createHint);
            pin.addEventListener('mousemove', moveHint);
            pin.addEventListener('mouseout', () => {
                let hints = document.body.querySelectorAll('.map__hint');
                if (hints) {
                    
                    hints.forEach(hint => {
                        // hint.classList.add('fadingOut')
                        // hint.addEventListener('transitionend', () => hint.remove())
                        hint.remove();
                    })
                }
            })
        })
    })

    function createHint(e) {
        let hint = document.createElement('div');
        hint.classList.add('map__hint');

        let src = e.target.closest('.map__pin').querySelector('.map__pin-pet').getAttribute('src');
        let name = e.target.closest('.map__pin').dataset.name;
        let region = e.target.closest('.map__pin').dataset.region;
        let population = e.target.closest('.map__pin').dataset.population;

        hint.innerHTML = `
            <div class="map__hint-left">
                <img src="${src}" alt="" class="map__hint-img">
            </div>
            <div class="map__hint-right">
                <h5 class="map__hint-title">
                    ${name}
                </h5>
                <div class="map__hint-region">
                    <span>Region: </span>
                    ${region}
                </div>
                <div class="map__hint-population">
                    <span>Population: </span>
                    ${population}
                </div>
            </div>
        `

        document.body.append(hint);
        hint.style.top = e.pageY + 30 + 'px';
        if (window.innerWidth * 0.65 > e.pageX) {
            hint.style.left = e.pageX + 30 + 'px';
        }
        else {
            hint.style.left = e.pageX - hint.offsetWidth - 30 + 'px';
        }
    }
    function moveHint(e) {
        let hint = document.body.querySelector('.map__hint');

        if (hint) {
            hint.style.top = e.pageY + 30 + 'px';
            if (window.innerWidth * 0.65 > e.pageX) {
                hint.style.left = e.pageX + 30 + 'px';
            }
            else {
                hint.style.left = e.pageX - hint.offsetWidth - 30 + 'px';
            }
        }
    }
}
export default map