ymaps.ready(init);
function init(){
    const myMap = new ymaps.Map("contacts__map", {
        center: [55.715489, 37.573627],
        controls: [],
        zoom: 16
    });
    myMap.behaviors.disable('scrollZoom')

    const myPlacemark = new ymaps.Placemark([55.715489, 37.573627], {}, {
        iconLayout: 'default#image',
        iconImageHref: '../images/contacts/mark.svg',
        iconImageSize: [48, 48],
        iconImageOffset: [-10, -45]
    });
    myMap.geoObjects.add(myPlacemark);  
}