function initMap() {
  var barcelona = {lat: 41.378924, lng: 2.12082};
  var map1 = new google.maps.Map(
      document.getElementById('map1'), {zoom: 15, center: barcelona});
  var marker = new google.maps.Marker({position: barcelona, map: map1});

  var liverpool = {lat: 53.430855, lng: -2.960841};
  var map2 = new google.maps.Map(
      document.getElementById('map2'), {zoom: 15, center: liverpool});
  var marker2 = new google.maps.Marker({position: liverpool, map: map2});

  var tottenham = {lat: 51.604325, lng: -0.066368};
  var map3 = new google.maps.Map(
      document.getElementById('map3'), {zoom: 15, center: tottenham});
  var marker3 = new google.maps.Marker({position: tottenham, map: map3});

  var amsterdam = {lat: 52.314374, lng: 4.942007};
  var map4 = new google.maps.Map(
      document.getElementById('map4'), {zoom: 15, center: amsterdam});
  var marker4 = new google.maps.Marker({position: amsterdam, map: map4});
}