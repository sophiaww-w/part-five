const globe = Globe()
  (document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#060a12')
  .htmlElementVisibilityModifier((el, isVisible) => {
    el.style.pointerEvents = isVisible ? 'auto' : 'none';
  });

globe
  .htmlElementsData(orgData)
  .htmlElement(d => {

    const wrapper = document.createElement('div');
    wrapper.style.position = "relative";
    wrapper.style.cursor = "pointer";

    // DOT
    const dot = document.createElement('div');
    dot.style.width = "10px";
    dot.style.height = "10px";
    dot.style.background = "#ff4d4d";
    dot.style.borderRadius = "50%";

    // PULSE
    const pulse = document.createElement('div');
    pulse.style.position = "absolute";
    pulse.style.top = "-4px";
    pulse.style.left = "-4px";
    pulse.style.width = "18px";
    pulse.style.height = "18px";
    pulse.style.border = "2px solid #ff4d4d";
    pulse.style.borderRadius = "50%";
    pulse.style.animation = "pulse 1.5s infinite";

    wrapper.appendChild(pulse);
    wrapper.appendChild(dot);

    // TOOLTIP
    const tooltip = document.createElement('div');
    tooltip.className = "tooltip";
    tooltip.style.position = "absolute";
    tooltip.style.bottom = "20px";
    tooltip.style.left = "50%";
    tooltip.style.transform = "translateX(-50%)";
    tooltip.style.display = "none";

    const percent = Math.round((d.raised / d.goal) * 100);

    tooltip.innerHTML = `
      <b>${d.name}</b><br>
      ${d.city}, ${d.country}<br>
      $${d.raised} / $${d.goal}
    `;

    wrapper.appendChild(tooltip);

    // HOVER FIX
    wrapper.addEventListener("mouseenter", () => {
      tooltip.style.display = "block";
    });

    wrapper.addEventListener("mouseleave", () => {
      tooltip.style.display = "none";
    });

    // CLICK
    wrapper.addEventListener("click", () => {
      window.location.href = `org.html?id=${d.id}`;
    });

    return wrapper;
  })
  .htmlLat(d => d.lat)
  .htmlLng(d => d.lng);


// PULSE ANIMATION
const style = document.createElement('style');
style.innerHTML = `
@keyframes pulse {
  0% { transform: scale(1); opacity: 1; }
  100% { transform: scale(2.5); opacity: 0; }
}`;
document.head.appendChild(style);
