console.log("globe loaded");

const globe = Globe()
(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

globe.pointsData(orgData);

globe.pointLat(d => d.lat);
globe.pointLng(d => d.lng);
globe.pointColor(() => "#ff3b3b");
globe.pointRadius(0.7);
globe.pointAltitude(0.02);

// CLICK (FORCED SIMPLE VERSION)
globe.onPointClick(function(d) {
  console.log("CLICKED:", d);
  window.location.href = "org.html?id=" + d.id;
});
