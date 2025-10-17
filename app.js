(function(){
  "use strict";
  const PLACES = [{"id": "row_0", "name": "Cult Curry Mitte", "lat": 52.52957269309015, "lng": 13.40121575551364, "rating10": 8.12, "rating5": 4, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Cult+Curry+Mitte+Berlin"}, {"id": "row_1", "name": "Curry Baude", "lat": 52.54958063118174, "lng": 13.38698882648957, "rating10": 7.85, "rating5": 4, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Curry+Baude+Berlin"}, {"id": "row_2", "name": "Curry-Keule", "lat": 52.55202742572629, "lng": 13.34988271114602, "rating10": 7.72, "rating5": 4, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Curry+Keule+Berlin"}, {"id": "row_3", "name": "Curry & Chili", "lat": 52.5561565817177, "lng": 13.38386719684907, "rating10": 7.08, "rating5": 4, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Curry+%26+Chili+Berlin"}, {"id": "row_4", "name": "Currystation 36", "lat": 52.51511610800573, "lng": 13.31516572648797, "rating10": 6.51, "rating5": 3, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Currystation+36+Berlin"}, {"id": "row_5", "name": "Drei Damen vom Grill", "lat": 52.52779422405084, "lng": 13.33856705532447, "rating10": 6.25, "rating5": 3, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Drei+Damen+vom+Grill+Berlin"}, {"id": "row_6", "name": "Absolut Curry", "lat": 52.52027039651867, "lng": 13.34743738230857, "rating10": 6.24, "rating5": 3, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Absolut+Curry+Berlin"}, {"id": "row_7", "name": "Bier's Ku'damm 195", "lat": 52.50117488997131, "lng": 13.31882409765142, "rating10": 6.15, "rating5": 3, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Bier%27s+Ku%27damm+195+Berlin"}, {"id": "row_8", "name": "Eckert's Currywurst", "lat": 52.51332378748076, "lng": 13.30529219765203, "rating10": 5.3, "rating5": 3, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Eckert%27s+Currywurst+Berlin"}, {"id": "row_9", "name": "Curry Wolf", "lat": 52.50410020612821, "lng": 13.33544616131925, "rating10": 4.9, "rating5": 2, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Curry+Wolf+Berlin"}, {"id": "row_10", "name": "Alain’ Snack", "lat": 52.54971432639277, "lng": 13.41334432753442, "rating10": 4.36, "rating5": 2, "year": 2024, "note": null, "gmaps": "https://www.google.com/maps/search/?api=1&query=Alain+Snack+Berlin"}, {"id": "row_11", "name": "Jörgs Curry Container", "lat": 52.42249518516788, "lng": 13.3710072246323, "rating10": 8.89, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/J%C3%B6rg's+Curry+Container/data=!4m2!3m1!1s0x47a8452f33162ae1:0xd121ba6058ee0cd2"}, {"id": "row_12", "name": "Heike’s Holzkohlengrill", "lat": 52.41323930230168, "lng": 13.40155275346771, "rating10": 8.15, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Heike%22s+Holzkohlengrill+Das+Lichtenrader+Original/data=!4m2!3m1!1s0x47a844fd5f631e55:0xdfba2cefbe4c097d"}, {"id": "row_13", "name": "Ketch’up 35", "lat": 52.45244058932225, "lng": 13.43146475819032, "rating10": 7.96, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Ketch'up+35/data=!4m2!3m1!1s0x47a8457fce5ffa73:0x8559eb099a6320ca"}, {"id": "row_14", "name": "Tunnel-Eck", "lat": 52.52888185030111, "lng": 13.28156638230902, "rating10": 7.95, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Tunneleck/@52.5287905,13.279029,17z/data=!3m2!4b1!5s0x47a856cc698bfad3:0xfbc4c931d86e97bc!4m6!3m5!1s0x47a856cc4942d147:0xd31865705bdedbe2!8m2!3d52.5287905!4d13.2816093!16s/g/11btp6n_hd?entry=ttu"}, {"id": "row_15", "name": "Manoùs Schlemmerstube", "lat": 52.53697438510829, "lng": 13.27566072648892, "rating10": 7.85, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Manous+Schlemmerbude/data=!4m2!3m1!1s0x47a8574c15328bd1:0xba5827c034edd370"}, {"id": "row_16", "name": "zur Bratpfanne", "lat": 52.45897307397103, "lng": 13.32302874099729, "rating10": 7.82, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Zur+Bratpfanne/data=!4m2!3m1!1s0x416523c55f7fa947:0x819763fe63fa2dcf"}, {"id": "row_17", "name": "Krasselt’s Imbiss", "lat": 52.45089596098699, "lng": 13.33955648230542, "rating10": 7.66, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Krasselt's+Imbiss+Berlin/data=!4m2!3m1!1s0x47a85a97cf488d19:0x531b18dc931ab4d1"}, {"id": "row_18", "name": "Imbiss zum Würfel II", "lat": 52.55919692234357, "lng": 13.3140429111463, "rating10": 7.25, "rating5": 4, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Zum+W%C3%BCrfel+II/data=!4m2!3m1!1s0x47a8531eb35bc0b3:0x569504fe47579b73"}, {"id": "row_19", "name": "Marc’s Kult Curry", "lat": 52.54485836830313, "lng": 13.31181238520467, "rating10": 5.84, "rating5": 3, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Marcs+Kult+Curry/data=!4m2!3m1!1s0x47a851cd924db1f1:0x45f3a6c4a9ac91ef"}, {"id": "row_20", "name": "Imbiss Kemmet", "lat": 52.42428906669397, "lng": 13.4362417246323, "rating10": 4.7, "rating5": 2, "year": 2023, "note": null, "gmaps": "https://www.google.com/maps/place/Imbiss+Kemmet+seit+1961/data=!4m2!3m1!1s0x47a845a4b5352529:0x2a89a3036db80237"}];

  const splash = document.getElementById("splash");
  const logo = document.getElementById("enterLogo");
  const enterBtn = document.getElementById("enterBtn");
  const mapEl = document.getElementById("map");
  const panel = document.getElementById("panel");
  const countEl = document.getElementById("count");

  let started=false;
  function start(){ if(started) return; started=true; splash.classList.add("hide"); setTimeout(()=>{ mapEl.hidden=false; panel.hidden=false; splash.remove(); init(); }, 330); }
  splash.addEventListener("click", start); logo.addEventListener("click", start); enterBtn.addEventListener("click", start);
  window.addEventListener("keydown", e=>{ if(e.key==='Enter'||e.key===' ') start(); });

  async function init(){
    const map = L.map('map', { center:[52.52,13.405], zoom:13, worldCopyJump:true });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom:19, attribution:'&copy; OpenStreetMap-Mitwirkende' }).addTo(map);
    map.setMinZoom(3);

    // Suche
    const q = document.getElementById('searchQuery');
    const btn = document.getElementById('searchBtn');
    const results = document.getElementById('searchResults');
    let searchMarker = null;
    async function geocode(query){
      const url=`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&countrycodes=de&addressdetails=1&limit=5`;
      const res=await fetch(url,{headers:{'Accept-Language':'de'}}); if(!res.ok) return [];
      const data=await res.json(); return data.map(r=>({display:r.display_name, lat:+r.lat, lon:+r.lon}));
    }
    function showRes(items){
      results.innerHTML=''; if(!items.length){results.style.display='none'; return;}
      items.forEach(it=>{ const li=document.createElement('li'); li.textContent=it.display; li.onclick=()=>{results.style.display='none'; q.value=it.display; map.flyTo([it.lat,it.lon],16); if(searchMarker) map.removeLayer(searchMarker); searchMarker=L.marker([it.lat,it.lon]).addTo(map).bindPopup('Gesuchte Position').openPopup();}; results.appendChild(li); });
      results.style.display='block';
    }
    btn.addEventListener('click', async()=>{ showRes(await geocode(q.value.trim())); });
    q.addEventListener('keydown', async(e)=>{ if(e.key==='Enter'){ e.preventDefault(); showRes(await geocode(q.value.trim())); } });

    // Marker
    const ratingToClass = r => 'r'+Math.max(1,Math.min(5,Math.round(r)));
    const makeIcon = r => L.divIcon({ className:'pin '+ratingToClass(r), iconSize:[16,16], popupAnchor:[0,-8] });
    const stars = r => '★'.repeat(Math.round(r)) + '☆'.repeat(5-Math.round(r));
    const popupHtml = p => {
      const link = p.gmaps ? p.gmaps : `https://www.google.com/maps?q=${p.lat},${p.lng}`;
      const parts = [];
      if (p.year) parts.push(`Besuch: ${p.year}`);
      if (p.rating10 != null) parts.push(`Bewertung: ${p.rating10}/10`);
else parts.push(`Bewertung: ${p.rating5}/5`);
      const subtitle = parts.join(' · ');
      return `<div class='popup'><h3>${p.name}</h3><div class='stars'>${stars(p.rating5)}</div><div class='small'>${subtitle}</div>${p.note?`<div class='note'>${p.note}</div>`:''}<div style='margin-top:6px'><a href='${link}' target='_blank' rel='noopener'>In Google Maps öffnen</a></div></div>`;
    };

    const bounds = [];
    PLACES.forEach(p=>{ L.marker([p.lat,p.lng],{icon:makeIcon(p.rating5), title:p.name}).addTo(map).bindPopup(popupHtml(p)); bounds.push([p.lat,p.lng]); });
    if (bounds.length){ map.fitBounds(L.latLngBounds(bounds), { padding:[40,40], maxZoom: 14 }); }
    if (countEl) countEl.textContent = `${PLACES.length} Orte geladen`;
  }
})();