// Neuseelandreise Skript

var map = L.map('map').setView([-39.195, 175.620], 5);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-39.195, 175.620]).addTo(map)
    .bindPopup('Tongariro Nationalpark')
    .openPopup();
