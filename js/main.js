var map, places;
var markers = [];

var countries = {
  'al': {
    center: {lat: 41.153332, lng: 20.168331},
    zoom: 4
  },
  'ad': {
    center: {lat: 42.546245, lng: 1.601554},
    zoom: 4
  },
  'am': {
    center: {lat: 40.069099, lng: 45.038189},
    zoom: 4
  },
  'at': {
    center: {lat: 47.516231, lng: 14.550072},
    zoom: 4
  },
  'by': {
    center: {lat: 53.709807, lng: 27.953389},
    zoom: 4
  },
  'be': {
    center: {lat: 50.503887, lng: 4.469936},
    zoom: 4
  },
  'ba': {
    center: {lat: 43.915886, lng: 15.4302572},
    zoom: 4
  },
  'bg': {
    center: {lat: 42.7219285, lng: 24.4222369},
    zoom: 4
  },
  'hr': {
    center: {lat: 44.3666757, lng: 11.9189727},
    zoom: 4
  },
  'cy': {
    center: {lat: 35.1658817, lng: 32.3040897},
    zoom: 4
  },
  'cz': {
    center: {lat: 49.7242027, lng: 10.9892731},
    zoom: 4
  },
  'ee': {
    center: {lat: 58.5480634, lng: 20.4495586},
    zoom: 4
  },
  'dk': {
    center: {lat: 56.1550234, lng: 7.0591129},
    zoom: 7
  },
  'fi': {
    center: {lat: 64.6163086, lng: 17.1156501},
    zoom: 5
  },
  'fr': {
    center: {lat: 45.8821186, lng: -6.9209124},
    zoom: 5
  },
  'ge': {
    center: {lat: 42.2413429, lng: 38.8694316},
    zoom: 6
  },
  'de': {
    center: {lat: 51.0968558, lng: 5.9689618},
    zoom: 6
  },
  'gr': {
    center: {lat: 37.8196596, lng: 15.4900546},
    zoom: 6
  },
  'hu': {
    center: {lat: 47.080974, lng: 15.0183618},
    zoom: 6
  },
  'is': {
    center: {lat: 64.6039087, lng: -28.1787741},
    zoom: 5
  },
  'ie': {
    center: {lat: 53.3058362, lng: -12.7021322},
    zoom: 6
  },
  'it': {
    center: {lat: 40.9571138, lng: 3.7280602},
    zoom: 5
  },
  'kz': {
    center: {lat: 47.1536622, lng: -48.5063717},
    zoom: 4
  },
  'lv': {
    center: {lat: 48.5063717, lng: 20.06084},
    zoom: 6
  },
  'li': {
    center: {lat: 47.1595664, lng: 9.4135527},
    zoom: 11
  },
  'lt': {
    center: {lat: 55.2411479, lng: 20.8669519},
    zoom: 5
  },
  'lu': {
    center: {lat: 49.8148348, lng: 5.5729203},
    zoom: 5
  },
  'mk': {
    center: {lat: 41.1023887, lng: 19.9930707},
    zoom: 5
  },
  'mt': {
    center: {lat: 35.9426804, lng: 14.0981674},
    zoom: 5
  },
  'md': {
    center: {lat: 46.9615872, lng: 26.1474026},
    zoom: 5
  },
  'mc': {
    center: {lat: 43.7378811, lng: 7.4083429},
    zoom: 5
  },
  'me': {
    center: {lat: 42.6907751, lng: 18.2723185},
    zoom: 5
  },
  'nl': {
    center: {lat: 52.1951072, lng: 3.0370689},
    zoom: 5
  },
  'no': {
    center: {lat: 63.4971509, lng: 0.112149},
    zoom: 5
  },
  'pl': {
    center: {lat: 51.6255786, lng: 10.175228},
    zoom: 5
  },
  'pt': {
    center: {lat: 35.8770445, lng: -36.8632116},
    zoom: 5
  },
  'ro': {
    center: {lat: 45.8616688, lng: 20.5330919},
    zoom: 5
  },
  'sm': {
    center: {lat: 43.9429802, lng: 12.3900536},
    zoom: 5
  },
  'rs': {
    center: {lat: 44.1927648, lng: 18.6796552},
    zoom: 5
  },
  'sk': {
    center: {lat: 48.5925641, lng: 15.2134851},
    zoom: 5
  },
  'si': {
    center: {lat: 46.1311236, lng: 12.7503678},
    zoom: 5
  },
  'es': {
    center: {lat: 39.87689457, lng: -12.6995808},
    zoom: 5
  },
  'se': {
    center: {lat: 61.7525658, lng: 8.4419886},
    zoom: 5
  },
  'ch': {
    center: {lat: 46.7950442, lng: 5.9815959},
    zoom: 5
  },
  'tr': {
    center: {lat: 38.7587676, lng: 26.1886457},
    zoom: 5
  },
  'ua': {
    center: {lat: 48.0004439, lng: 22.2111863},
    zoom: 5
  },
  'gb': {
    center: {lat: 54.2386664, lng: -6.7199338},
    zoom: 5
  },
}

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 48.220778, lng: 16.3100205},
    zoom: 3
  });
}

function selectCountry() {
  var country = document.getElementById('country').value;
  if (country == 'value'){
    map.setCenter(countries[country].center);
    map.setZoom(countries[country].zoom);
  }
}