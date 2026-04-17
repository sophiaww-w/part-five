console.log("globe loaded");

const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// DATA
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "rgba(255, 60, 60, 0.9)")
  .pointAltitude(0.02);

// ─────────────────────────────
// PULSE + GLOW EFFECT
// ─────────────────────────────

let t = 0;

function animate() {
  t += 0.03;

  globe
    .pointRadius(d => {
      // pulsing size
      return 0.6 + Math.sin(t) * 0.15;
    })
    .pointColor(d => {
      // glowing red (pulsing brightness)
      const pulse = 0.5 + Math.sin(t) * 0.5;
      return `rgba(255, 60, 60, ${0.5 + pulse * 0.5})`;
    });

  requestAnimationFrame(animate);
}

animate();
