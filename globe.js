console.log("globe loaded");

const globe = Globe()
(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// DATA + INTERACTION (ALL IN ONE CHAIN)
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "#ff3b3b")
  .pointRadius(0.7)
  .pointAltitude(0.02)
  .onPointClick(d => {
    console.log("clicked:", d);
    window.location.href = `org.html?id=${d.id}`;
  })
  .onPointHover(d => {
    console.log("hover:", d);
  });
