const globe = Globe()
(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#070a12');

// create tooltip once
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

// DATA
globe
  .pointsData(orgData)
  .pointLat(d => d.lat)
  .pointLng(d => d.lng)
  .pointColor(() => "#ff3b3b")
  .pointRadius(0.7)
  .pointAltitude(0.02)

// CLICK → org page
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  })

// HOVER (WORKING VERSION)
  .onPointHover(d => {
    if (d) {
      const percent = Math.round((d.raised / d.goal) * 100);

      tooltip.innerHTML = `
        <b>${d.name}</b><br>
        ${d.city}, ${d.country}<br>
        $${d.raised} / $${d.goal}
      `;

      tooltip.style.display = "block";
    } else {
      tooltip.style.display = "none";
    }
  });

// move tooltip with mouse
document.addEventListener("mousemove", (e) => {
  tooltip.style.left = (e.clientX + 10) + "px";
  tooltip.style.top = (e.clientY + 10) + "px";
});
