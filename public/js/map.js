export const createMap = (loca) => {
  const map = L.map('map', {
    scrollWheelZoom: false,
  }).setView([loca[0].coordinates[1], loca[0].coordinates[0]], 13);
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 5,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  }).addTo(map);

  //looping locations
  loca.forEach((val) => {
    const marker = L.marker([val.coordinates[1], val.coordinates[0]]).addTo(
      map,
    );
    marker.bindPopup(val.description).openPopup();
  });
};
