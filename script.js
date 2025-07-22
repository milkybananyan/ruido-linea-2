const map = L.map('map').setView([-33.45, -70.65], 13);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '© OpenStreetMap contributors'
}).addTo(map);

fetch('datos.json')
  .then(res => res.json())
  .then(data => {
    data.forEach(punto => {
      L.circleMarker([punto.lat, punto.lon], {
        radius: punto.porcentaje * 2,
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5
      }).addTo(map).bindPopup(`<strong>${punto.nombre}</strong><br>${punto.porcentaje}%`);
    });
  });
