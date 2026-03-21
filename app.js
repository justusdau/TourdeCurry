(function () {
  "use strict";

  const PLACES = [{"id":"row_0","name":"Fräulein Pilz","lat":52.474024670321185,"lng":13.4450456,"rating10":7.59,"rating5":4,"year":2025,"wurst":7.75,"sosse":6.85,"pommes":7.75,"mayo":6.85,"ambiente":9.32,"preis":7.52,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Fr%C3%A4ulein%20Pilz%20Berlin"},{"id":"row_1","name":"CurryPelle","lat":52.46909703847984,"lng":13.447445528779717,"rating10":7.26,"rating5":4,"year":2025,"wurst":6.4,"sosse":7.08,"pommes":7.3,"mayo":7.3,"ambiente":9.78,"preis":7.52,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=CurryPelle%20Berlin"},{"id":"row_2","name":"Curry 36","lat":52.49430772277092,"lng":13.38730647491996,"rating10":7.21,"rating5":4,"year":2025,"wurst":6.62,"sosse":7.3,"pommes":7.52,"mayo":7.52,"ambiente":6.85,"preis":8.42,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%2036%20Berlin"},{"id":"row_3","name":"Wurstpate","lat":52.51002881575424,"lng":13.421548699972874,"rating10":7.1,"rating5":4,"year":2025,"wurst":6.85,"sosse":7.3,"pommes":7.3,"mayo":7.52,"ambiente":6.18,"preis":7.75,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Wurstpate%20Berlin"},{"id":"row_4","name":"Curry Piraten","lat":52.51490199837648,"lng":13.474451371121857,"rating10":6.49,"rating5":3,"year":2025,"wurst":6.09,"sosse":7.3,"pommes":5.81,"mayo":6.4,"ambiente":6.71,"preis":6.71,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%20Piraten%20Berlin"},{"id":"row_5","name":"Curry Teufel","lat":52.50351336220616,"lng":13.447042879068599,"rating10":6.2,"rating5":3,"year":2025,"wurst":5.88,"sosse":6.65,"pommes":7.43,"mayo":6.92,"ambiente":3.32,"preis":5.37,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry%20Teufel%20Berlin"},{"id":"row_6","name":"Wurst :-) am Brandenburger Tor","lat":52.5174862317103,"lng":13.376679255790137,"rating10":6.18,"rating5":3,"year":2025,"wurst":6.18,"sosse":6.4,"pommes":6.62,"mayo":6.62,"ambiente":5.72,"preis":4.38,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Wurst%20%3A-%29%20am%20Brandenburger%20Tor%20Berlin"},{"id":"row_7","name":"Two Hungry Bears","lat":52.51156027346707,"lng":13.434599940390939,"rating10":3.41,"rating5":2,"year":2025,"wurst":4.08,"sosse":2.28,"pommes":4.08,"mayo":4.35,"ambiente":2.55,"preis":3.57,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Two%20Hungry%20Bears%20Berlin"},{"id":"row_8","name":"Cult Curry Mitte","lat":52.529572693090145,"lng":13.401215755513643,"rating10":8.31,"rating5":4,"year":2024,"wurst":8.56,"sosse":9.28,"pommes":7.84,"mayo":8.92,"ambiente":6.04,"preis":7.84,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Cult+Curry+Mitte+Berlin"},{"id":"row_9","name":"Curry Baude","lat":52.54958063118174,"lng":13.386988826489565,"rating10":8.07,"rating5":4,"year":2024,"wurst":8.42,"sosse":9.1,"pommes":6.4,"mayo":8.2,"ambiente":7.52,"preis":8.65,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Baude+Berlin"},{"id":"row_10","name":"Curry-Keule","lat":52.552027425726294,"lng":13.349882711146023,"rating10":7.95,"rating5":4,"year":2024,"wurst":8.2,"sosse":8.65,"pommes":7.75,"mayo":8.2,"ambiente":5.28,"preis":8.42,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Keule+Berlin"},{"id":"row_11","name":"Curry & Chili","lat":52.5561565817177,"lng":13.38386719684907,"rating10":7.37,"rating5":4,"year":2024,"wurst":6.18,"sosse":8.42,"pommes":8.65,"mayo":7.98,"ambiente":4.82,"preis":7.08,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+%26+Chili+Berlin"},{"id":"row_12","name":"Currystation 36","lat":52.51511610800573,"lng":13.315165726487972,"rating10":6.87,"rating5":3,"year":2024,"wurst":6.85,"sosse":6.18,"pommes":6.85,"mayo":7.08,"ambiente":7.98,"preis":7.75,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Currystation+36+Berlin"},{"id":"row_13","name":"Absolut Curry","lat":52.52779422405084,"lng":13.33856705532447,"rating10":6.62,"rating5":3,"year":2024,"wurst":6.4,"sosse":7.08,"pommes":6.62,"mayo":6.85,"ambiente":6.62,"preis":5.5,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Absolut+Curry+Berlin"},{"id":"row_14","name":"Drei Damen vom Grill","lat":52.52027039651867,"lng":13.347437382308572,"rating10":6.62,"rating5":3,"year":2024,"wurst":6.85,"sosse":5.5,"pommes":8.2,"mayo":6.4,"ambiente":4.82,"preis":7.75,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Drei+Damen+vom+Grill+Berlin"},{"id":"row_15","name":"Bier's Ku'damm 195","lat":52.50117488997131,"lng":13.318824097651422,"rating10":6.53,"rating5":3,"year":2024,"wurst":7.75,"sosse":7.08,"pommes":5.28,"mayo":8.2,"ambiente":4.6,"preis":5.28,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Bier%27s+Ku%27damm+195+Berlin"},{"id":"row_16","name":"Eckert's Currywurst","lat":52.51332378748076,"lng":13.305292197652026,"rating10":5.77,"rating5":3,"year":2024,"wurst":5.05,"sosse":5.28,"pommes":6.18,"mayo":6.4,"ambiente":7.75,"preis":5.95,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Eckert%27s+Currywurst+Berlin"},{"id":"row_17","name":"Curry Wolf","lat":52.50410020612821,"lng":13.335446161319247,"rating10":5.41,"rating5":3,"year":2024,"wurst":5.95,"sosse":5.05,"pommes":5.28,"mayo":5.28,"ambiente":5.05,"preis":5.72,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Curry+Wolf+Berlin"},{"id":"row_18","name":"Alain’ Snack","lat":52.549714326392774,"lng":13.413344327534418,"rating10":4.92,"rating5":2,"year":2024,"wurst":4.6,"sosse":6.85,"pommes":4.15,"mayo":5.05,"ambiente":4.15,"preis":2.35,"note":null,"gmaps":"https://www.google.com/maps/search/?api=1&query=Alain+Snack+Berlin"},{"id":"row_19","name":"Jörgs Curry Container","lat":52.42249518516788,"lng":13.371007224632303,"rating10":8.88,"rating5":4,"year":2023,"wurst":9.1,"sosse":8.88,"pommes":8.42,"mayo":9.1,"ambiente":9.1,"preis":9.1,"note":null,"gmaps":"https://www.google.com/maps/place/J%C3%B6rg's+Curry+Container/data=!4m2!3m1!1s0x47a8452f33162ae1:0xd121ba6058ee0cd2"},{"id":"row_20","name":"Heikes Holzkohlengrill","lat":52.41323930230168,"lng":13.401552753467707,"rating10":8.15,"rating5":4,"year":2023,"wurst":8.45,"sosse":8.97,"pommes":7.43,"mayo":7.17,"ambiente":7.17,"preis":8.2,"note":null,"gmaps":"https://www.google.com/maps/place/Heike%22s+Holzkohlengrill+Das+Lichtenrader+Original/data=!4m2!3m1!1s0x47a844fd5f631e55:0xdfba2cefbe4c097d"},{"id":"row_21","name":"Tunnel-Eck","lat":52.52888185030111,"lng":13.281566382309016,"rating10":7.95,"rating5":4,"year":2023,"wurst":8.2,"sosse":6.85,"pommes":8.42,"mayo":8.65,"ambiente":10.0,"preis":6.4,"note":null,"gmaps":"https://www.google.com/maps/place/Tunneleck/@52.5287905,13.279029,17z/data=!3m2!4b1!5s0x47a856cc698bfad3:0xfbc4c931d86e97bc!4m6!3m5!1s0x47a856cc4942d147:0xd31865705bdedbe2!8m2!3d52.5287905!4d13.2816093!16s/g/11btp6n_hd?entry=ttu"},{"id":"row_22","name":"Manoùs Schlemmerstube","lat":52.53697438510829,"lng":13.275660726488919,"rating10":7.84,"rating5":4,"year":2023,"wurst":7.75,"sosse":8.42,"pommes":6.62,"mayo":5.05,"ambiente":9.78,"preis":9.1,"note":null,"gmaps":"https://www.google.com/maps/place/Manous+Schlemmerbude/data=!4m2!3m1!1s0x47a8574c15328bd1:0xba5827c034edd370"},{"id":"row_23","name":"zur Bratpfanne","lat":52.45897307397103,"lng":13.32302874099729,"rating10":7.82,"rating5":4,"year":2023,"wurst":9.1,"sosse":8.2,"pommes":8.2,"mayo":8.65,"ambiente":3.25,"preis":6.18,"note":null,"gmaps":"https://www.google.com/maps/place/Zur+Bratpfanne/data=!4m2!3m1!1s0x416523c55f7fa947:0x819763fe63fa2dcf"},{"id":"row_24","name":"Krasselt’s Imbiss","lat":52.45089596098699,"lng":13.339556482305422,"rating10":7.66,"rating5":4,"year":2023,"wurst":7.52,"sosse":9.32,"pommes":7.08,"mayo":8.2,"ambiente":4.6,"preis":7.52,"note":null,"gmaps":"https://www.google.com/maps/place/Krasselt's+Imbiss+Berlin/data=!4m2!3m1!1s0x47a85a97cf488d19:0x531b18dc931ab4d1"},{"id":"row_25","name":"Ketch’up 35","lat":52.45244058932225,"lng":13.43146475819032,"rating10":7.61,"rating5":4,"year":2023,"wurst":6.18,"sosse":9.1,"pommes":7.52,"mayo":8.65,"ambiente":7.08,"preis":7.52,"note":null,"gmaps":"https://www.google.com/maps/place/Ketch'up+35/data=!4m2!3m1!1s0x47a8457fce5ffa73:0x8559eb099a6320ca"},{"id":"row_26","name":"Imbiss zum Würfel II","lat":52.559196922343574,"lng":13.314042911146297,"rating10":7.25,"rating5":4,"year":2023,"wurst":7.75,"sosse":6.62,"pommes":7.3,"mayo":8.65,"ambiente":6.4,"preis":7.75,"note":null,"gmaps":"https://www.google.com/maps/place/Zum+W%C3%BCrfel+II/data=!4m2!3m1!1s0x47a8531eb35bc0b3:0x569504fe47579b73"},{"id":"row_27","name":"Marc’s Kult Curry","lat":52.54485836830313,"lng":13.311812385204666,"rating10":5.84,"rating5":3,"year":2023,"wurst":4.6,"sosse":5.72,"pommes":6.18,"mayo":5.72,"ambiente":7.3,"preis":7.98,"note":null,"gmaps":"https://www.google.com/maps/place/Marcs+Kult+Curry/data=!4m2!3m1!1s0x47a851cd924db1f1:0x45f3a6c4a9ac91ef"},{"id":"row_28","name":"Imbiss Kemmet","lat":52.42428906669397,"lng":13.436241724632298,"rating10":4.64,"rating5":2,"year":2023,"wurst":3.39,"sosse":5.19,"pommes":4.01,"mayo":6.09,"ambiente":6.09,"preis":6.09,"note":null,"gmaps":"https://www.google.com/maps/place/Imbiss+Kemmet+seit+1961/data=!4m2!3m1!1s0x47a845a4b5352529:0x2a89a3036db80237"}];

  const MODES = [
    { key: "gesamt",   label: "Gesamt",                       icon: "🏆", field: "rating10" },
    { key: "wurst",    label: "Was n Wurst",                  icon: "🌭", field: "wurst"    },
    { key: "sosse",    label: "Soße reicht mir",              icon: "🍅", field: "sosse"    },
    { key: "pommes",   label: "Bock auf geile Pommes",        icon: "🍟", field: "pommes"   },
    { key: "mayo",     label: "Hat jemand Mayo gesagt?",      icon: "🥚", field: "mayo"     },
    { key: "ambiente", label: "Ich bin wegen dem Flair hier", icon: "🏠", field: "ambiente" },
    { key: "preis",    label: "Knapp bei Kasse",              icon: "💰", field: "preis"    },
  ];

  // Wurst-Begrüßung beim Seitenaufruf
  setTimeout(() => {
    const w = document.getElementById("wurstWelcome");
    if (w) { w.style.display = "block"; setTimeout(() => w.remove(), 2000); }
  }, 400);

  /* ── SPLASH ──────────────────────────────────────── */
  const splash   = document.getElementById("splash");
  const enterBtn = document.getElementById("enterBtn");
  const app      = document.getElementById("app");
  const legend   = document.getElementById("legend");

  let started = false;
  function start() {
    if (started) return; started = true;
    splash.classList.add("hide");
    setTimeout(() => { app.hidden = false; legend.hidden = false; splash.remove(); init(); }, 420);
  }
  splash.addEventListener("click", start);
  enterBtn.addEventListener("click", e => { e.stopPropagation(); start(); });
  window.addEventListener("keydown", e => { if (e.key === "Enter" || e.key === " ") start(); });

  /* ── INIT ────────────────────────────────────────── */
  function init() {
    const map = L.map("map", { center: [52.499, 13.37], zoom: 12, zoomControl: true });
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      maxZoom: 19, attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>-Mitwirkende'
    }).addTo(map);

    const panel     = document.getElementById("panel");
    const toggleBtn = document.getElementById("panelToggle");
    const closeBtn  = document.getElementById("panelClose");
    toggleBtn.addEventListener("click", () => {
      panel.classList.toggle("open");
      panel.hidden = false;
      toggleBtn.classList.remove("visible");
      if (window.innerWidth <= 700) legend.style.display = panel.classList.contains("open") ? "none" : "block";
    });
    closeBtn.addEventListener("click", () => {
      if (window.innerWidth <= 700) {
        panel.classList.remove("open");
        legend.style.display = "block";
      } else {
        panel.hidden = true;
        toggleBtn.classList.add("visible");
      }
    });

    /* ── MODE BAR ────────────────────────────────── */
    const modebar = document.getElementById("modebar");
    let currentMode = "gesamt";

    MODES.forEach(m => {
      const btn = document.createElement("button");
      btn.className = "mode-btn" + (m.key === "gesamt" ? " active" : "");
      btn.dataset.key = m.key;
      btn.title = m.label;
      btn.innerHTML = `<span class="mode-icon">${m.icon}</span><span class="mode-label">${m.label}</span>`;
      btn.addEventListener("click", () => {
        currentMode = m.key;
        document.querySelectorAll(".mode-btn").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        refreshMarkers();
        applyFilters();
      });
      modebar.appendChild(btn);
    });

    /* ── HELPERS ─────────────────────────────────── */
    const ratingClass = r10 => r10 >= 9 ? "r5" : r10 >= 7 ? "r4" : r10 >= 5 ? "r3" : r10 >= 3 ? "r2" : "r1";
    const makeIcon    = r10 => L.divIcon({ className: "pin " + ratingClass(r10), iconSize: [14, 14], popupAnchor: [0, -8] });
    const stars       = r5  => "★".repeat(Math.round(r5)) + "☆".repeat(5 - Math.round(r5));
    const getScore    = (p, mk) => { const m = MODES.find(x => x.key === mk); return m ? (p[m.field] ?? p.rating10) : p.rating10; };

    const popupHtml = (p, mk) => {
      const link    = p.gmaps || `https://www.google.com/maps?q=${p.lat},${p.lng}`;
      const score   = getScore(p, mk);
      const mode    = MODES.find(x => x.key === mk);
      const isGesamt = mk === "gesamt";
      const extra = isGesamt
        ? `<div class="popup-subscores">
            <div class="subscore"><span>🌭</span><span>${p.wurst.toFixed(1)}</span></div>
            <div class="subscore"><span>🍅</span><span>${p.sosse.toFixed(1)}</span></div>
            <div class="subscore"><span>🍟</span><span>${p.pommes.toFixed(1)}</span></div>
            <div class="subscore"><span>🥚</span><span>${p.mayo.toFixed(1)}</span></div>
            <div class="subscore"><span>🏠</span><span>${p.ambiente.toFixed(1)}</span></div>
            <div class="subscore"><span>💰</span><span>${p.preis.toFixed(1)}</span></div>
           </div>`
        : `<div class="popup-mode-label">${mode.icon} ${mode.label}</div>`;
      return `<div class="popup">
        <div class="popup-header">
          <h3>${p.name}</h3>
          <div class="score-row">
            <span class="score">${score.toFixed(1)}</span>
            <span class="score-max">/ 10</span>
            ${isGesamt ? `<span class="stars" style="margin-left:6px">${stars(p.rating5)}</span>` : ""}
          </div>
        </div>
        <div class="meta">Besuch: ${p.year}</div>
        ${extra}
        ${p.note ? `<div class="note">${p.note}</div>` : ""}
        <a href="${link}" target="_blank" rel="noopener" class="gmaps-btn">In Google Maps öffnen →</a>
      </div>`;
    };

    /* ── MARKERS ─────────────────────────────────── */
    const markerMap = {};
    PLACES.forEach(p => {
      markerMap[p.id] = L.marker([p.lat, p.lng], { icon: makeIcon(p.rating10), title: p.name })
        .addTo(map).bindPopup(popupHtml(p, "gesamt"), { maxWidth: 290 });
    });

    function refreshMarkers() {
      PLACES.forEach(p => {
        const score = getScore(p, currentMode);
        markerMap[p.id].setIcon(makeIcon(score));
        markerMap[p.id].setPopupContent(popupHtml(p, currentMode));
      });
    }

    map.fitBounds(L.latLngBounds(PLACES.map(p => [p.lat, p.lng])), { padding: [40, 40], maxZoom: 13 });

    /* ── FILTER STATE ────────────────────────────── */
    let filterYear = "all", filterMinRating = 0, filterRclass = null;

    function getVisible() {
      return PLACES.filter(p => {
        const score = getScore(p, currentMode);
        return (filterYear === "all" || p.year === +filterYear)
            && score >= filterMinRating
            && (!filterRclass || ratingClass(score) === filterRclass);
      });
    }

    function applyFilters() {
      const visible    = getVisible();
      const visibleIds = new Set(visible.map(p => p.id));
      PLACES.forEach(p => {
        const m = markerMap[p.id];
        visibleIds.has(p.id) ? (!map.hasLayer(m) && map.addLayer(m)) : (map.hasLayer(m) && map.removeLayer(m));
      });
      renderRankList(visible);
    }

    /* ── RANK LIST ───────────────────────────────── */
    const rankList = document.getElementById("rankList");
    const countEl  = document.getElementById("count");

    function renderRankList(places) {
      const sorted = [...places].sort((a, b) => getScore(b, currentMode) - getScore(a, currentMode));
      countEl.textContent = `${sorted.length} Orte`;
      rankList.innerHTML = "";
      sorted.forEach((p, i) => {
        const score = getScore(p, currentMode);
        const li = document.createElement("li");
        li.className = "rank-item";
        li.innerHTML = `
          <span class="rank-num">${i + 1}</span>
          <span class="rank-dot ${ratingClass(score)}"></span>
          <span class="rank-info"><span class="rank-name">${p.name}</span><span class="rank-meta">${p.year}</span></span>
          <span class="rank-score">${score.toFixed(1)}</span>`;
        li.addEventListener("click", () => {
          map.flyTo([p.lat, p.lng], 16, { duration: 0.8 });
          setTimeout(() => markerMap[p.id].openPopup(), 800);
          if (window.innerWidth <= 700) panel.classList.remove("open");
        });
        rankList.appendChild(li);
      });
    }

    /* ── PILLS ───────────────────────────────────── */
    document.querySelectorAll("#yearFilter .pill").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#yearFilter .pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active"); filterYear = btn.dataset.year; applyFilters();
      });
    });
    document.querySelectorAll("#ratingFilter .pill").forEach(btn => {
      btn.addEventListener("click", () => {
        document.querySelectorAll("#ratingFilter .pill").forEach(b => b.classList.remove("active"));
        btn.classList.add("active"); filterMinRating = +btn.dataset.min; applyFilters();
      });
    });

    /* ── LEGEND FILTER ───────────────────────────── */
    const legendReset = document.getElementById("legendReset");
    document.querySelectorAll(".legend-item.clickable").forEach(item => {
      item.addEventListener("click", () => {
        const rc = item.dataset.rclass;
        filterRclass = filterRclass === rc ? null : rc;
        document.querySelectorAll(".legend-item.clickable").forEach(i => i.classList.remove("active"));
        if (filterRclass) { item.classList.add("active"); legendReset.hidden = false; }
        else legendReset.hidden = true;
        applyFilters();
      });
    });
    legendReset.addEventListener("click", () => {
      filterRclass = null;
      document.querySelectorAll(".legend-item.clickable").forEach(i => i.classList.remove("active"));
      legendReset.hidden = true; applyFilters();
    });

    applyFilters();

    /* ── SEARCH ──────────────────────────────────── */
    const q = document.getElementById("searchQuery");
    const searchBtn = document.getElementById("searchBtn");
    const results = document.getElementById("searchResults");
    let searchMarker = null;

    async function geocode(query) {
      try {
        const res = await fetch(`https://nominatim.openstreetmap.org/search?format=jsonv2&q=${encodeURIComponent(query)}&countrycodes=de&addressdetails=1&limit=5`, { headers: { "Accept-Language": "de" } });
        return res.ok ? (await res.json()).map(r => ({ display: r.display_name, lat: +r.lat, lon: +r.lon })) : [];
      } catch { return []; }
    }

    function showResults(items) {
      results.innerHTML = "";
      if (!items.length) { results.style.display = "none"; return; }
      items.forEach(it => {
        const li = document.createElement("li");
        li.textContent = it.display;
        li.addEventListener("click", () => {
          results.style.display = "none"; q.value = it.display;
          map.flyTo([it.lat, it.lon], 16);
          if (searchMarker) map.removeLayer(searchMarker);
          searchMarker = L.marker([it.lat, it.lon]).addTo(map).bindPopup("📍 Gesuchte Position").openPopup();
        });
        results.appendChild(li);
      });
      results.style.display = "block";
    }

    searchBtn.addEventListener("click", async () => showResults(await geocode(q.value.trim())));
    q.addEventListener("keydown", async e => { if (e.key === "Enter") { e.preventDefault(); showResults(await geocode(q.value.trim())); } });
    document.addEventListener("click", e => { if (!e.target.closest("#searchQuery") && !e.target.closest("#searchResults")) results.style.display = "none"; });
  }
})();
