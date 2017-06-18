$(document).ready(function() {

var map;

function initMap() {
      map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 40.7127, lng: -74.0059},
        zoom: 10
      });
    }

initMap()

  var marker = new google.maps.Marker({
  position: {lat: 40.688544, lng: -73.979324},
  map: map,
  title: 'Home'
  });

})



