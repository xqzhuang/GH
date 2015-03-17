var map = L.map('map').setView([51.103635, 17.085203], 18);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var lat = 51.103635;
var lng = 17.085203;

// add a marker in the given location, attach some popup content to it and open the popup
L.marker([lat, lng]).addTo(map)
    .bindPopup('A pretty CSS3 popup. <br> Easily customizable.');