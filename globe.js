console.log("globe loaded");

const globeEl = document.getElementById('globe');

const globe = Globe()
  (globeEl)
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// Tooltip element
const tooltip = document.createElement("div");
tooltip.style.position = "absolute";
tooltip.style.background = "rgba(255,255,255,0.95)";
tooltip.style.color = "#000";
tooltip.style.padding = "8px 10px";
tooltip.style.borderRadius = "8px";
tooltip.style.fontSize = "12px";
tooltip.style.pointerEvents = "none";
tooltip.style.display = "none";
tooltip.style.zIndex = "9999";
document.body.appendChild(tooltip);

// DATA
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "#ff3b3b")
  .pointAltitude(0.02)

// CLICK → org page
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  })

// HOVER → tooltip
  .onPointHover(d => {
    if (d) {
      const percent = Math.round((d.raised / d.goal) * 100);

      tooltip.innerHTML = `
        <b>${d.name}</b><br>
        ${d.city}, ${d.country}<br>
        $${d.raised} / $${d.goal} (${percent}%)
      `;

      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  });

// move tooltip with mouse
document.addEventListener("mousemove", (e) => {
  tooltip.style.left = (e.clientX + 12) + "px";
  tooltip.style.top = (e.clientY + 12) + "px";
});


// 🌟 PULSING EFFECT
function animatePulse() {
  globe.pointRadius(d => 0.6 + 0.15 * Math.sin(Date.now() * 0.003));
  requestAnimationFrame(animatePulse);
}

animatePulse();
