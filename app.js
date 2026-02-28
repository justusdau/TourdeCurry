(function () {
  "use strict";

  const PLACES = [{"id":"row_0","name":"Cult Curry Mitte","lat":52.52957269309015,"lng":13.40121575551364,"rating10":8.12,"rating5":4,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Cult+Curry+Mitte+Berlin"},{"id":"row_1","name":"Curry Baude","lat":52.54958063118174,"lng":13.38698882648957,"rating10":7.85,"rating5":4,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Baude+Berlin"},{"id":"row_2","name":"Curry-Keule","lat":52.55202742572629,"lng":13.34988271114602,"rating10":7.72,"rating5":4,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Keule+Berlin"},{"id":"row_3","name":"Curry & Chili","lat":52.5561565817177,"lng":13.38386719684907,"rating10":7.08,"rating5":4,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+%26+Chili+Berlin"},{"id":"row_4","name":"Currystation 36","lat":52.51511610800573,"lng":13.31516572648797,"rating10":6.51,"rating5":3,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Currystation+36+Berlin"},{"id":"row_5","name":"Drei Damen vom Grill","lat":52.52779422405084,"lng":13.33856705532447,"rating10":6.25,"rating5":3,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Drei+Damen+vom+Grill+Berlin"},{"id":"row_6","name":"Absolut Curry","lat":52.52027039651867,"lng":13.34743738230857,"rating10":6.24,"rating5":3,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Absolut+Curry+Berlin"},{"id":"row_7","name":"Bier's Ku'damm 195","lat":52.50117488997131,"lng":13.31882409765142,"rating10":6.15,"rating5":3,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Bier%27s+Ku%27damm+195+Berlin"},{"id":"row_8","name":"Eckert's Currywurst","lat":52.51332378748076,"lng":13.30529219765203,"rating10":5.3,"rating5":3,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Eckert%27s+Currywurst+Berlin"},{"id":"row_9","name":"Curry Wolf","lat":52.50410020612821,"lng":13.33544616131925,"rating10":4.9,"rating5":2,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Wolf+Berlin"},{"id":"row_10","name":"Alain’ Snack","lat":52.54971432639277,"lng":13.41334432753442,"rating10":4.36,"rating5":2,"year":2024,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Alain+Snack+Berlin"},{"id":"row_11","name":"Jörgs Curry Container","lat":52.42249518516788,"lng":13.3710072246323,"rating10":8.89,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/J%C3%B6rg's+Curry+Container/data=!4m2!3m1!1s0x47a8452f33162ae1:0xd121ba6058ee0cd2"},{"id":"row_12","name":"Heike’s Holzkohlengrill","lat":52.41323930230168,"lng":13.40155275346771,"rating10":8.15,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Heike%22s+Holzkohlengrill+Das+Lichtenrader+Original/data=!4m2!3m1!1s0x47a844fd5f631e55:0xdfba2cefbe4c097d"},{"id":"row_13","name":"Ketch’up 35","lat":52.45244058932225,"lng":13.43146475819032,"rating10":7.96,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Ketch'up+35/data=!4m2!3m1!1s0x47a8457fce5ffa73:0x8559eb099a6320ca"},{"id":"row_14","name":"Tunnel-Eck","lat":52.52888185030111,"lng":13.28156638230902,"rating10":7.95,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Tunneleck/@52.5287905,13.279029,17z/data=!3m2!4b1!5s0x47a856cc698bfad3:0xfbc4c931d86e97bc!4m6!3m5!1s0x47a856cc4942d147:0xd31865705bdedbe2!8m2!3d52.5287905!4d13.2816093!16s/g/11btp6n_hd?entry=ttu"},{"id":"row_15","name":"Manoùs Schlemmerstube","lat":52.53697438510829,"lng":13.27566072648892,"rating10":7.85,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Manous+Schlemmerbude/data=!4m2!3m1!1s0x47a8574c15328bd1:0xba5827c034edd370"},{"id":"row_16","name":"zur Bratpfanne","lat":52.45897307397103,"lng":13.32302874099729,"rating10":7.82,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Zur+Bratpfanne/data=!4m2!3m1!1s0x416523c55f7fa947:0x819763fe63fa2dcf"},{"id":"row_17","name":"Krasselt’s Imbiss","lat":52.45089596098699,"lng":13.33955648230542,"rating10":7.66,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Krasselt's+Imbiss+Berlin/data=!4m2!3m1!1s0x47a85a97cf488d19:0x531b18dc931ab4d1"},{"id":"row_18","name":"Imbiss zum Würfel II","lat":52.55919692234357,"lng":13.3140429111463,"rating10":7.25,"rating5":4,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Zum+W%C3%BCrfel+II/data=!4m2!3m1!1s0x47a8531eb35bc0b3:0x569504fe47579b73"},{"id":"row_19","name":"Marc’s Kult Curry","lat":52.54485836830313,"lng":13.31181238520467,"rating10":5.84,"rating5":3,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Marcs+Kult+Curry/data=!4m2!3m1!1s0x47a851cd924db1f1:0x45f3a6c4a9ac91ef"},{"id":"row_20","name":"Imbiss Kemmet","lat":52.42428906669397,"lng":13.4362417246323,"rating10":4.7,"rating5":2,"year":2023,"note":null,"gmaps":"https://www.google.com/maps/place/Imbiss+Kemmet+seit+1961/data=!4m2!3m1!1s0x47a845a4b5352529:0x2a89a3036db80237"},{"id":"row_21","name":"Fräulein Pilz","lat":52.474024670321185,"lng":13.4450456,"rating10":7.59,"rating5":4,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Fr%C3%A4ulein%20Pilz%20Berlin"},{"id":"row_22","name":"CurryPelle","lat":52.46909703847984,"lng":13.447445528779717,"rating10":7.26,"rating5":4,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=CurryPelle%20Berlin"},{"id":"row_23","name":"Curry 36","lat":52.49430772277092,"lng":13.38730647491996,"rating10":7.21,"rating5":4,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%2036%20Berlin"},{"id":"row_24","name":"Wurstpate","lat":52.51002881575424,"lng":13.421548699972874,"rating10":7.1,"rating5":4,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Wurstpate%20Berlin"},{"id":"row_25","name":"Curry Piraten","lat":52.51490199837648,"lng":13.474451371121857,"rating10":6.49,"rating5":3,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%20Piraten%20Berlin"},{"id":"row_26","name":"Curry Teufel","lat":52.50351336220616,"lng":13.447042879068599,"rating10":6.2,"rating5":3,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%20Teufel%20Berlin"},{"id":"row_27","name":"Wurst :-) am Brandenburger Tor","lat":52.5174862317103,"lng":13.376679255790137,"rating10":6.18,"rating5":3,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Wurst%20%3A-%29%20am%20Brandenburger%20Tor%20Berlin"},{"id":"row_28","name":"Two Hungry Bears","lat":52.51156027346707,"lng":13.434599940390939,"rating10":3.41,"rating5":2,"year":2025,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Two%20Hungry%20Bears%20Berlin"}];

  /* ── SPLASH ──────────────────────────────────────── */
  const splash   = document.getElementById("splash");
  const enterBtn = document.getElementById("enterBtn");
  const app      = document.getElementById("app");
  const legend   = document.getElementById("legend");

  let started = false;
  function start() {
    if (started) return; started = true;
    splash.classList.add("hide");
    setTimeout(() => {
      app.hidden = false;
      legend.hidden = false;
      splash.remove();
      init();
    }, 420);
  }

  splash.addEventListener("click", start);
  enterBtn.addEventListener("click", e => { e.stopPropagation(); start(); });
  window.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") start(); });

  /* ── INIT ────────────────────────────────────────── */
  function init() {
    /* MAP */
    const map = L.map("map", { center: [52.499, 13.37], zoom: 12, zoomControl: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
    }).addTo(map);

    /* ── MOBILE PANEL TOGGLE ─────────────────────── */
    const panel      = document.getElementById("panel");
    const toggleBtn  = document.getElementById("panelToggle");
    const closeBtn   = document.getElementById("panelClose");

    toggleBtn.addEventListener("click", () => panel.classList.toggle("open"));
    closeBtn.addEventListener("click",  () => panel.classList.remove("open"));

    /* ── HELPERS ─────────────────────────────────── */
    const ratingClass = r10 => {
      if (r10 >= 9)   return "r5";
      if (r10 >= 7)   return "r4";
      if (r10 >= 5)   return "r3";
      if (r10 >= 3)   return "r2";
      return "r1";
    };

    const makeIcon = r10 => L.divIcon({
      className: "pin " + ratingClass(r10),
      iconSize: [14, 14],
      popupAnchor: [0, -8]
    });

    const stars = r5 => "★".repeat(Math.round(r5)) + "☆".repeat(5 - Math.round(r5));

    const popupHtml = p => {
      const link = p.gmaps || `https://www.google.com/maps?q=${p.lat},${p.lng}`;
      return `
        <div class="popup">
          <div class="popup-header">
            <h3>${p.name}</h3>
            <div class="score-row">
              <span class="score">${p.rating10.toFixed(1)}</span>
              <span class="score-max">/ 10</span>
              <span class="stars" style="margin-left:6px">${stars(p.rating5)}</span>
            </div>
          </div>
          <div class="meta">Besuch: ${p.year}</div>
          ${p.note ? `<div class="note">${p.note}</div>` : ""}
          <a href="${link}" target="_blank" rel="noopener" class="gmaps-btn">In Google Maps öffnen →</a>
        </div>`;
    };

    /* ── MARKERS ─────────────────────────────────── */
    const markerMap = {}; // id → marker
    PLACES.forEach(p => {
      const m = L.marker([p.lat, p.lng], { icon: makeIcon(p.rating10), title: p.name })
        .addTo(map)
        .bindPopup(popupHtml(p), { maxWidth: 280 });
      markerMap[p.id] = m;
    });

    /* initial bounds */
    const allCoords = PLACES.map(p => [p.lat, p.lng]);
    map.fitBounds(L.latLngBounds(allCoords), { padding: [40, 40], maxZoom: 13 });

    /* ── FILTER STATE ────────────────────────────── */
    let filterYear   = "all";
    let filterMinRating = 0;

    function getVisible() {
      return PLACES.filter(p => {
        const yearOk   = filterYear === "all" || p.year === +filterYear;
        const ratingOk = p.rating10 >= filterMinRating;
        return yearOk && ratingOk;
      });
    }

    function applyFilters() {
      const visible = getVisible();
      const visibleIds = new Set(visible.map(p => p.id));

      PLACES.forEach(p => {
        const m = markerMap[p.id];
        if (visibleIds.has(p.id)) {
          if (!map.hasLayer(m)) map.addLayer(m);
        } else {
          if (map.hasLayer(m))  map.removeLayer(m);
        }
      });

      renderRankList(visible);
    }

    /* ── RANK LIST ───────────────────────────────── */
    const rankList = document.getElementById("rankList");
    const countEl  = document.getElementById("count");

    function renderRankList(places) {
      const sorted = [...places].sort((a, b) => b.rating10 - a.rating10);
      countEl.textContent = `${sorted.length} Orte`;
      rankList.innerHTML = "";

      sorted.forEach((p, i) => {
        const li = document.createElement("li");
        li.className = "rank-item";
        li.innerHTML = `
          <span class="rank-num">${i + 1}</span>
          <span class="rank-dot ${ratingClass(p.rating10)}"></span>
          <span class="rank-info">
            <span class="rank-name">${p.name}</span>
            <span class="rank-meta">${p.year}</span>
          </span>
          <span class="rank-score">${p.rating10.toFixed(1)}</span>`;

        li.addEventListener("click", () => {
          const m = markerMap[p.id];
          map.flyTo([p.lat, p.lng], 16, { duration: 0.8 });
          setTimeout(() => m.openPopup(), 800);
          // close panel on mobile
          if (window.innerWidth <= 700) panel.classList.remove("open");
        });

        rankList.appendChild(li);
      });
    }

    /* ── YEAR PILLS ──────────────────────────────── */
    document.querySelectorAll("#yearFilter .pill").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#yearFilter .pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterYear = btn.dataset.year;
        applyFilters();
      });
    });

    /* ── RATING PILLS ────────────────────────────── */
    document.querySelectorAll("#ratingFilter .pill").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#ratingFilter .pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        filterMinRating = +btn.dataset.min;
        applyFilters();
      });
    });

    /* initial render */
    applyFilters();

    /* ── SEARCH ──────────────────────────────────── */
    const q       = document.getElementById("searchQuery");
    const btn     = document.getElementById("searchBtn");
    const results = document.getElementById("searchResults");
    let searchMarker = null;

    async function geocode(query) {
      try {
        const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&countrycodes=de&addressdetails=1&limit=5`;
        const res = await fetch(url, { headers: { "Accept-Language": "de" } });
        if (!res.ok) return [];
        const data = await res.json();
        return data.map(r => ({ display: r.display_name, lat: +r.lat, lon: +r.lon }));
      } catch { return []; }
    }

    function showResults(items) {
      results.innerHTML = "";
      if (!items.length) { results.style.display = "none"; return; }
      items.forEach(it => {
        const li = document.createElement("li");
        li.textContent = it.display;
        li.addEventListener("click", () => {
          results.style.display = "none";
          q.value = it.display;
          map.flyTo([it.lat, it.lon], 16);
          if (searchMarker) map.removeLayer(searchMarker);
          searchMarker = L.marker([it.lat, it.lon]).addTo(map).bindPopup("📍 Gesuchte Position").openPopup();
        });
        results.appendChild(li);
      });
      results.style.display = "block";
    }

    btn.addEventListener("click", async () => showResults(await geocode(q.value.trim())));
    q.addEventListener("keydown", async e => {
      if (e.key === "Enter") { e.preventDefault(); showResults(await geocode(q.value.trim())); }
    });

    /* close results on outside click */
    document.addEventListener("click", e => {
      if (!e.target.closest("#searchQuery") && !e.target.closest("#searchResults"))
        results.style.display = "none";
    });
  }
})();