var globalMap;

function GoogleMap(){
 
this.initialize = function(){
globalMap = showMap();
addMarkersToMap(map, '59.91737', '10.71394');
}
 
 var showMap = function(){
var mapOptions = {
zoom: 9,
center: new google.maps.LatLng(59.5, 11),
mapTypeId: google.maps.MapTypeId.ROADMAP
}
 
var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
 
return map;
}




}

var addMarkersToMap = function(map, lat, lng){
	var latitudeAndLongitudeOne = new google.maps.LatLng(lat,lng);
	var markerOne = new google.maps.Marker({
		position: latitudeAndLongitudeOne,
		map: map
	});
 
}