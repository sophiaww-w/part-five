const globe = Globe()(document.getElementById('globe'))
  .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
  .backgroundColor('#05070d');

globe
  .htmlElementsData(orgData)
  .htmlElement(d => {
    const el = document.createElement('div');

    el.innerHTML = `
      <div style="
        width:16px;
        height:16px;
        background:#ff4d4d;
        border-radius:50% 50% 50% 0;
        transform: rotate(-45deg);
        position: relative;
      ">
        <div style="
          width:6px;
          height:6px;
          background:#800000;
          border-radius:50%;
          position:absolute;
          top:5px;
          left:5px;
        "></div>
      </div>
    `;

    el.style.cursor = "pointer";

    el.onclick = () => {
      window.location.href = `org.html?id=${d.id}`;
    };

    return el;
  })
  .htmlLat(d => d.lat)
  .htmlLng(d => d.lng);
