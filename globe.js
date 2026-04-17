console.log("globe loaded");

const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// DATA
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "#ff3b3b")
  .pointRadius(0.7)
  .pointAltitude(0.02)

// CLICK → STRIPE (DIRECT DONATION)
  .onPointClick(d => {
    window.location.href = d.stripe;
  });

// OPTIONAL HOVER (simple, safe)
globe.onPointHover(d => {
  if (!d) return;
  console.log(d.name);
});
