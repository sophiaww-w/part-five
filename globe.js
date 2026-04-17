const globe = Globe()
(document.getElementById('globe'))
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

// CLICK
  .onPointClick(d => {
    window.location.href = `org.html?id=${d.id}`;
  })

// HOVER (THIS IS THE FIX)
  .onPointHover(d => {
    if (d) {
      globe.tooltipContent(`
        <div style="
          background:white;
          color:black;
          padding:10px;
          border-radius:10px;
          font-size:12px;
          max-width:180px;
        ">
          <b>${d.name}</b><br>
          ${d.city}, ${d.country}<br>
          $${d.raised} / $${d.goal}
        </div>
      `);
    } else {
      globe.tooltipContent(null);
    }
  });
