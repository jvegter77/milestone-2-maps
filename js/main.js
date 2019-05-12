var map, places, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 0.8072863, lng: -176.6264345},
    zoom: 2
  });
}

infoWindow = new google.maps.InfoWindow({
          content: document.getElementById('info-content')
        });
        
 var autocomplete = new google.maps.places.Autocomplete(input);
     autocomplete.bindTo('bounds', map);
