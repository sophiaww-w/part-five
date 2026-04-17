console.log("globe loaded");

const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// DATA
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng);

// ─────────────────────────────
// HOVER TOOLTIP (ONLY ONE SYSTEM)
// ─────────────────────────────

const tooltip = document.createElement("div");
tooltip.style.position = "absolute";
tooltip.style.background = "white";
tooltip.style.color = "black";
tooltip.style.padding = "8px 10px";
tooltip.style.borderRadius = "8px";
tooltip.style.fontSize = "12px";
tooltip.style.pointerEvents = "none";
tooltip.style.display = "none";
document.body.appendChild(tooltip);

globe.onPointHover(d => {
  if (!d) {
    tooltip.style.display = "none";
    return;
  }

  const percent = Math.round((d.raised / d.goal) * 100);

  tooltip.innerHTML = `
    <b>${d.name}</b><br>
    ${d.city}, ${d.country}<br>
    $${d.raised} / $${d.goal}
  `;

  tooltip.style.display = "block";
});

// move tooltip
document.addEventListener("mousemove", (e) => {
  tooltip.style.left = (e.clientX + 10) + "px";
  tooltip.style.top = (e.clientY + 10) + "px";
});

// CLICK → org page
globe.onPointClick(d => {
  window.location.href = `org.html?id=${d.id}`;
});

// ─────────────────────────────
// PULSING + GLOWING DOTS
// ─────────────────────────────

let t = 0;

function animate() {
  t += 0.03;

  globe
    .pointRadius(d => 0.6 + Math.sin(t) * 0.15)
    .pointColor(() => {
      const glow = 0.6 + Math.sin(t) * 0.4;
      return `rgba(255, 60, 60, ${glow})`;
    });

  requestAnimationFrame(animate);
}

animate();
