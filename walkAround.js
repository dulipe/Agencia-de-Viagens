const KEY = 'AIzaSyBfEuUOVFAzuG3WAFZlOvs5dPXXpjiO33o';

let map;

function initMap(primeiroParametro, segundoParametro){
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: primeiroParametro, lng: segundoParametro },
        zoom: 20,
        mapTypeId: 'satellite'
    });
    map.setTilt(45);
}