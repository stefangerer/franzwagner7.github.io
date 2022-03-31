// Neuseelandreise Skript

var map = L.map('map').setView([47.271620080336895, 11.382055502245557], 15);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([47.271620080336895, 11.382055502245557]).addTo(map)
    .bindPopup('Burenwirt')
    .openPopup();
