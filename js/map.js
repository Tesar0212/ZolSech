
ymaps.ready(init);

function init() {
    var map = new ymaps.Map('map', {
        center: [53.325159, 83.611755], // ваши данные
        zoom: 17
    });

    let placemark = new ymaps.Placemark([53.325659, 83.608440], {
        balloonContentHeader: '',
        balloonContentBody: '',
        balloonContentFooter: '',
        iconCaption: 'ул. Трактовая 21Е',
    },{
        iconColor: 'red'

    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('zoomControl'); // удаляем контрол зуммирования
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)
    map.geoObjects.add(placemark);

}