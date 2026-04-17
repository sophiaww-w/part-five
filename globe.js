const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#060a12');

globe
  .htmlElementsData(orgData)
  .htmlElement(d => {
    const container = document.createElement('div');

    // DOT
    const dot = document.createElement('div');
    dot.style.width = "12px";
    dot.style.height = "12px";
    dot.style.background = "#ff4d4d";
    dot.style.borderRadius = "50%";
    dot.style.position = "relative";

    // PULSE ANIMATION
    const pulse = document.createElement('div');
    pulse.style.width = "12px";
    pulse.style.height = "12px";
    pulse.style.border = "2px solid #ff4d4d";
    pulse.style.borderRadius = "50%";
    pulse.style.position = "absolute";
    pulse.style.top = "0";
    pulse.style.left = "0";
    pulse.style.animation = "pulse 1.5s infinite";

    dot.appendChild(pulse);
    container.appendChild(dot);

    // TOOLTIP
    const tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    tooltip.style.display = "none";

    const percent = Math.round((d.raised / d.goal) * 100);

    tooltip.innerHTML = `
      <b>${d.name}</b><br>
      ${d.city}, ${d.country}<br>
      $${d.raised} / $${d.goal}
    `;

    container.appendChild(tooltip);

    // HOVER
    container.onmouseenter = () => {
      tooltip.style.display = "block";
    };

    container.onmouseleave = () => {
      tooltip.style.display = "none";
    };

    // CLICK
    container.onclick = () => {
      window.location.href = `org.html?id=${d.id}`;
    };

    return container;
  })
  .htmlLat(d => d.lat)
  .htmlLng(d => d.lng);

// ANIMATION
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}`;
document.head.appendChild(style);
