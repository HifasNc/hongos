/* ========================= */
/* MÉTODOS POR HONGO         */
/* ========================= */
const METODOS_POR_HONGO = {
  "pleurotus": {
    label: "Pleurotus spp. (Ostra)",
    metodos: [
      "Capa por capa (layer spawn)",
      "Inoculación superficial en bolsa",
      "Inoculación en tarro con tapa filtrante",
      "Spawn en agujeros laterales de bolsa",
      "Inoculación manual con guante estéril",
    ],
    ratio: "3–5% del peso seco del sustrato",
  },
  "lentinula edodes": {
    label: "Shiitake",
    metodos: [
      "Inoculación en troncos (tacos o pastillas de micelio)",
      "Inoculación en bolsa de aserrín compactado",
      "Bloques de aserrín + salvado en cámara",
      "Spawn en agujeros perforados en tronco + sellado con cera",
    ],
    ratio: "5–10% del peso seco del sustrato",
  },
  "hericium erinaceus": {
    label: "Melena de León",
    metodos: [
      "Inoculación en bolsa de aserrín enriquecido",
      "Inoculación en frasco de boca ancha (mason jar)",
      "Bloques compactos inoculados en cámara limpia",
      "Inoculación con jeringas de spawn líquido",
    ],
    ratio: "5–8% del peso del sustrato",
  },
  "ganoderma": {
    label: "Reishi / Ganoderma",
    metodos: [
      "Inoculación en troncos frescos con tacos",
      "Bolsas de aserrín de madera dura inoculadas",
      "Bloques de roble + salvado en cámara estéril",
      "Spawn de grano en sustrato compactado",
    ],
    ratio: "5–10% del peso del sustrato",
  },
  "agaricus": {
    label: "Champiñón (Agaricus)",
    metodos: [
      "Spawn de grano sobre compost pasteurizado",
      "Siembra superficial + casing de turba/cal",
      "Inoculación volumétrica en bandejas",
      "Spawn de paja sobre cama de compost",
    ],
    ratio: "1–3% del volumen del compost",
  },
  "flammulina velutipes": {
    label: "Enoki",
    metodos: [
      "Inoculación en frascos de vidrio angostos",
      "Bolsas de polipropileno con cuello filtrante",
      "Bloques de aserrín + cáscara de arroz inoculados",
    ],
    ratio: "3–5% del peso del sustrato",
  },
  "trametes versicolor": {
    label: "Cola de Pavo / Coriolus",
    metodos: [
      "Inoculación en troncos con tacos de madera",
      "Bolsas de aserrín de madera dura",
      "Bloques compactados en cámara de flujo laminar",
    ],
    ratio: "5–8% del peso del sustrato",
  },
  "inonotus obliquus": {
    label: "Chaga",
    metodos: [
      "Inoculación en troncos de abedul frescos",
      "Spawn de grano en troncos perforados",
    ],
    ratio: "Variable según cepa",
  },
  "cordyceps militaris": {
    label: "Cordyceps",
    metodos: [
      "Inoculación líquida en sustrato de arroz",
      "Spawn líquido sobre arroz parboil en frascos",
      "Cultivo en sustrato de amaranto + maíz",
      "Inoculación en frascos con tapa filtrante",
    ],
    ratio: "10–15% del volumen del sustrato",
  },
  "auricularia": {
    label: "Oreja de Judas / Mu Err",
    metodos: [
      "Inoculación en troncos o palos frescos",
      "Bolsas de aserrín de madera blanda",
      "Bloques de aserrín + harina de trigo en cámara limpia",
    ],
    ratio: "3–5% del peso del sustrato",
  },
  "stropharia rugosoannulata": {
    label: "Hongo Vino Tinto / King Stropharia",
    metodos: [
      "Spawn de paja sobre cama al aire libre",
      "Inoculación directa en chips de madera húmedos",
      "Mezcla de spawn en sustrato de paja en exterior",
    ],
    ratio: "5–10% del peso de la paja",
  },
  "hypsizygus": {
    label: "Shimeji",
    metodos: [
      "Inoculación en frascos de vidrio de boca ancha",
      "Bolsas de aserrín enriquecido con salvado",
      "Bloques compactados en cámara estéril",
    ],
    ratio: "3–5% del peso del sustrato",
  },
  "pholiota nameko": {
    label: "Nameko",
    metodos: [
      "Inoculación en troncos de madera dura frescos",
      "Bolsas de aserrín compactado con salvado de arroz",
      "Bloques de madera en ambiente húmedo y fresco",
    ],
    ratio: "5–8% del peso del sustrato",
  },
  "agrocybe aegerita": {
    label: "Pioppino / Chopo",
    metodos: [
      "Inoculación en troncos de álamo o chopo",
      "Bolsas de aserrín de madera blanda",
      "Bloques de paja + aserrín inoculados en cámara",
    ],
    ratio: "5–8% del peso del sustrato",
  },
  "tremella fuciformis": {
    label: "Tremella / Hongo Nieve",
    metodos: [
      "Co-inoculación con hongo hospedador (Annulohypoxylon)",
      "Bloques de aserrín de madera dura inoculados",
      "Inoculación en sustrato de madera + salvado en cámara estéril",
    ],
    ratio: "5–10% del peso del sustrato",
  },
  "default": {
    label: "Hongo genérico",
    metodos: [
      "Capa por capa (layer spawn)",
      "Inoculación superficial",
      "Inoculación en profundidad",
      "Spawn de grano mezclado",
      "Inoculación con jeringas (spawn líquido)",
      "Taco de micelio en ranuras",
    ],
    ratio: "3–10% del peso seco del sustrato",
  },
};

function getMetodoData(hongoStr) {
  if (!hongoStr) return METODOS_POR_HONGO["default"];
  const lower = hongoStr.toLowerCase();
  if (lower.includes("pleurotus")) return METODOS_POR_HONGO["pleurotus"];
  if (lower.includes("lentinula") || lower.includes("shiitake")) return METODOS_POR_HONGO["lentinula edodes"];
  if (lower.includes("hericium") || lower.includes("melena")) return METODOS_POR_HONGO["hericium erinaceus"];
  if (lower.includes("ganoderma") || lower.includes("reishi")) return METODOS_POR_HONGO["ganoderma"];
  if (lower.includes("agaricus")) return METODOS_POR_HONGO["agaricus"];
  if (lower.includes("flammulina") || lower.includes("enoki")) return METODOS_POR_HONGO["flammulina velutipes"];
  if (lower.includes("trametes") || lower.includes("cola de pavo")) return METODOS_POR_HONGO["trametes versicolor"];
  if (lower.includes("inonotus") || lower.includes("chaga")) return METODOS_POR_HONGO["inonotus obliquus"];
  if (lower.includes("cordyceps")) return METODOS_POR_HONGO["cordyceps militaris"];
  if (lower.includes("auricularia") || lower.includes("oreja")) return METODOS_POR_HONGO["auricularia"];
  if (lower.includes("stropharia") || lower.includes("vino tinto")) return METODOS_POR_HONGO["stropharia rugosoannulata"];
  if (lower.includes("hypsizygus") || lower.includes("shimeji")) return METODOS_POR_HONGO["hypsizygus"];
  if (lower.includes("pholiota") || lower.includes("nameko")) return METODOS_POR_HONGO["pholiota nameko"];
  if (lower.includes("agrocybe") || lower.includes("pioppino") || lower.includes("chopo")) return METODOS_POR_HONGO["agrocybe aegerita"];
  if (lower.includes("tremella") || lower.includes("nieve")) return METODOS_POR_HONGO["tremella fuciformis"];
  return METODOS_POR_HONGO["default"];
}

function actualizarMetodosInoculacion(hongoStr) {
  const datalist = document.getElementById("metodos-list");
  const hintBox = document.getElementById("inoculacionHint");
  const hintText = document.getElementById("inoculacionHintText");
  if (!datalist) return;
  const data = getMetodoData(hongoStr);
  datalist.innerHTML = data.metodos.map(m => `<option value="${m}">`).join("");
  if (hongoStr && hongoStr.trim()) {
    hintBox && hintBox.classList.add("has-hongo");
    if (hintText) hintText.textContent = `🍄 ${data.label} — Ratio sugerido: ${data.ratio}`;
  } else {
    hintBox && hintBox.classList.remove("has-hongo");
    if (hintText) hintText.textContent = "Seleccioná un hongo en la pestaña Preparación para ver sugerencias de métodos.";
  }
}

/* ========================= */
/* STORAGE & STATE           */
/* ========================= */
const STORAGE_KEY      = "hongosEntries";
const BATCHES_KEY      = "hongosBatches";       // lista de lotes guardados
const ACTIVE_BATCH_KEY = "hongosActiveBatchId"; // id del lote activo
const TAB_KEYS = ["calculadora", "lotes", "preparacion", "incubacion", "fructificacion", "estadisticas"];

// ── Helpers de persistencia de lotes ──────────────────────────
function loadAllBatches() {
  try { return JSON.parse(localStorage.getItem(BATCHES_KEY)) || {}; } catch { return {}; }
}
function saveAllBatches(batches) {
  localStorage.setItem(BATCHES_KEY, JSON.stringify(batches));
}
function getActiveBatchId() {
  return localStorage.getItem(ACTIVE_BATCH_KEY) || "";
}
function setActiveBatchId(id) {
  localStorage.setItem(ACTIVE_BATCH_KEY, id);
}

// Estructura vacía para un lote
function emptyBatchData(id) {
  return {
    id,
    createdAt: new Date().toISOString(),
    inoculacion: {},
    incubacion: { controles: [] },
    fructificacion: { fechaIngreso: "", flushes: [], totalKg: 0, rendimientoBiologico: 0 },
    fructMeta: { estado: "activo", flushesEsperados: 0 },
    unidades: [],
  };
}

// Cargar/crear lote activo
function loadActiveBatchData() {
  const id = getActiveBatchId();
  if (!id) return null;
  const all = loadAllBatches();
  return all[id] || null;
}

function saveActiveBatchData(data) {
  const id = getActiveBatchId();
  if (!id) return;
  const all = loadAllBatches();
  all[id] = data;
  saveAllBatches(all);
}

// ── activeBatch en memoria ──────────────────────────────────────
const activeBatch = {
  id: "",
  fructificacion: {
    fechaIngreso: "",
    flushes: [],
    totalKg: 0,
    rendimientoBiologico: 0,
  },
};

/* ========================= */
/* UTILITIES                 */
/* ========================= */
function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

/* ========================= */
/* TAB NAVIGATION            */
/* ========================= */
function showTab(tabName) {
  TAB_KEYS.forEach((key) => {
    const section = document.getElementById(`${key}Tab`);
    const button = document.getElementById(`tab${capitalize(key)}`);
    const isActive = key === tabName;
    if (section) section.style.display = isActive ? "block" : "none";
    if (button) button.classList.toggle("active", isActive);
  });
}

// Calculadora movida a calculadora.html

/* ========================= */
/* RANGOS FRUCTIFICACIÓN     */
/* ========================= */
const RANGOS_FRUCT_HONGO = {
  "pleurotus":           { tempMin:15, tempMax:22, hrMin:80, hrMax:95, diasPinMin:2,  diasPinMax:5,  label:"Pleurotus spp." },
  "lentinula edodes":    { tempMin:12, tempMax:18, hrMin:80, hrMax:90, diasPinMin:5,  diasPinMax:14, label:"Shiitake" },
  "hericium erinaceus":  { tempMin:16, tempMax:22, hrMin:85, hrMax:95, diasPinMin:4,  diasPinMax:10, label:"Melena de León" },
  "ganoderma":           { tempMin:22, tempMax:28, hrMin:80, hrMax:90, diasPinMin:7,  diasPinMax:14, label:"Reishi" },
  "agaricus":            { tempMin:16, tempMax:20, hrMin:80, hrMax:90, diasPinMin:10, diasPinMax:18, label:"Champiñón" },
  "flammulina velutipes":{ tempMin:8,  tempMax:13, hrMin:85, hrMax:95, diasPinMin:5,  diasPinMax:12, label:"Enoki" },
  "trametes versicolor": { tempMin:18, tempMax:26, hrMin:75, hrMax:90, diasPinMin:10, diasPinMax:20, label:"Cola de Pavo" },
  "cordyceps militaris": { tempMin:18, tempMax:22, hrMin:80, hrMax:90, diasPinMin:10, diasPinMax:20, label:"Cordyceps" },
  "auricularia":         { tempMin:18, tempMax:26, hrMin:85, hrMax:95, diasPinMin:4,  diasPinMax:8,  label:"Oreja de Judas" },
  "stropharia":          { tempMin:12, tempMax:20, hrMin:75, hrMax:90, diasPinMin:7,  diasPinMax:14, label:"King Stropharia" },
  "hypsizygus":          { tempMin:12, tempMax:18, hrMin:85, hrMax:95, diasPinMin:7,  diasPinMax:14, label:"Shimeji" },
  "pholiota nameko":     { tempMin:10, tempMax:16, hrMin:85, hrMax:95, diasPinMin:7,  diasPinMax:14, label:"Nameko" },
  "agrocybe aegerita":   { tempMin:16, tempMax:22, hrMin:80, hrMax:90, diasPinMin:5,  diasPinMax:12, label:"Pioppino" },
  "tremella fuciformis": { tempMin:20, tempMax:26, hrMin:85, hrMax:95, diasPinMin:10, diasPinMax:20, label:"Tremella" },
  "default":             { tempMin:15, tempMax:24, hrMin:80, hrMax:92, diasPinMin:3,  diasPinMax:10, label:"Hongo genérico" },
};

function getRangosFruct(hongoStr) {
  if (!hongoStr) return RANGOS_FRUCT_HONGO["default"];
  const lower = hongoStr.toLowerCase();
  if (lower.includes("pleurotus")) return RANGOS_FRUCT_HONGO["pleurotus"];
  if (lower.includes("lentinula") || lower.includes("shiitake")) return RANGOS_FRUCT_HONGO["lentinula edodes"];
  if (lower.includes("hericium") || lower.includes("melena")) return RANGOS_FRUCT_HONGO["hericium erinaceus"];
  if (lower.includes("ganoderma") || lower.includes("reishi")) return RANGOS_FRUCT_HONGO["ganoderma"];
  if (lower.includes("agaricus")) return RANGOS_FRUCT_HONGO["agaricus"];
  if (lower.includes("flammulina") || lower.includes("enoki")) return RANGOS_FRUCT_HONGO["flammulina velutipes"];
  if (lower.includes("trametes") || lower.includes("cola de pavo")) return RANGOS_FRUCT_HONGO["trametes versicolor"];
  if (lower.includes("cordyceps")) return RANGOS_FRUCT_HONGO["cordyceps militaris"];
  if (lower.includes("auricularia") || lower.includes("oreja")) return RANGOS_FRUCT_HONGO["auricularia"];
  if (lower.includes("stropharia") || lower.includes("vino tinto")) return RANGOS_FRUCT_HONGO["stropharia"];
  if (lower.includes("hypsizygus") || lower.includes("shimeji")) return RANGOS_FRUCT_HONGO["hypsizygus"];
  if (lower.includes("pholiota") || lower.includes("nameko")) return RANGOS_FRUCT_HONGO["pholiota nameko"];
  if (lower.includes("agrocybe") || lower.includes("pioppino")) return RANGOS_FRUCT_HONGO["agrocybe aegerita"];
  if (lower.includes("tremella") || lower.includes("nieve")) return RANGOS_FRUCT_HONGO["tremella fuciformis"];
  return RANGOS_FRUCT_HONGO["default"];
}

function actualizarRangosFruct(hongoStr) {
  const rangos = getRangosFruct(hongoStr);
  const hintEl  = document.getElementById("fructRangosText");
  const hintBox = document.getElementById("fructRangosHint");
  if (hintEl) {
    if (hongoStr && hongoStr.trim()) {
      hintEl.textContent = `${rangos.label} — Temp: ${rangos.tempMin}–${rangos.tempMax}°C · HR: ${rangos.hrMin}–${rangos.hrMax}% · Pinning: ${rangos.diasPinMin}–${rangos.diasPinMax} días`;
      hintBox && hintBox.classList.add("has-hongo");
    } else {
      hintEl.textContent = "Seleccioná un hongo en Preparación para ver rangos ideales de fructificación.";
      hintBox && hintBox.classList.remove("has-hongo");
    }
  }
  const temp = parseFloat(document.getElementById("tempFruct")?.value);
  const hr   = parseFloat(document.getElementById("hrFruct")?.value);
  if (!isNaN(temp)) updateGauge("tempFructGaugeBar", "tempFructGaugeLabel", temp, rangos.tempMin, rangos.tempMax);
  if (!isNaN(hr))   updateGauge("hrFructGaugeBar",   "hrFructGaugeLabel",   hr,   rangos.hrMin,  rangos.hrMax);
}

/* ========================= */
/* FRUCTIFICACIÓN — STATE    */
/* ========================= */
let _lastPesoSeco = 0;

// Estado del lote activo en memoria
const fructMeta = { estado: "activo", flushesEsperados: 0, observacionCierre: "" };

function loadFlushes() {
  const data = loadActiveBatchData();
  if (data) {
    activeBatch.fructificacion.flushes = Array.isArray(data.fructificacion?.flushes)
      ? data.fructificacion.flushes : [];
    if (data.fructMeta) Object.assign(fructMeta, data.fructMeta);
  } else {
    activeBatch.fructificacion.flushes = [];
  }
}

function saveFlushes() {
  const data = loadActiveBatchData() || emptyBatchData(getActiveBatchId());
  data.fructificacion = { ...data.fructificacion, flushes: activeBatch.fructificacion.flushes };
  data.fructMeta = { ...fructMeta };
  saveActiveBatchData(data);
}

/* ========================= */
/* FRUCTIFICACIÓN — CHART    */
/* ========================= */
function renderFlushChart(flushes, totalKg) {
  const canvas = document.getElementById("flushChartCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const W = canvas.width = canvas.offsetWidth || 300;
  const H = canvas.height = 160;
  ctx.clearRect(0, 0, W, H);

  if (flushes.length === 0) return;

  const CALIDADCOL = {
    "Premium": "#a3cf36",
    "Estándar": "#22d3ee",
    "Descarte parcial": "#a3cf36",
    "Descarte total": "#ef4444",
  };
  const PAD = { top: 16, right: 12, bottom: 36, left: 42 };
  const chartW = W - PAD.left - PAD.right;
  const chartH = H - PAD.top - PAD.bottom;
  const maxKg = Math.max(...flushes.map(f => f.kg), 0.001);
  const barW = Math.min(48, (chartW / flushes.length) * 0.6);
  const gap  = chartW / flushes.length;

  // Grid lines
  ctx.strokeStyle = "rgba(255,255,255,0.06)";
  ctx.lineWidth = 1;
  [0.25, 0.5, 0.75, 1].forEach(r => {
    const y = PAD.top + chartH * (1 - r);
    ctx.beginPath(); ctx.moveTo(PAD.left, y); ctx.lineTo(PAD.left + chartW, y); ctx.stroke();
    ctx.fillStyle = "rgba(255,255,255,0.25)";
    ctx.font = "10px Space Mono, monospace";
    ctx.textAlign = "right";
    ctx.fillText((maxKg * r).toFixed(1), PAD.left - 4, y + 3);
  });

  // Bars + line
  const points = [];
  flushes.forEach((f, i) => {
    const x = PAD.left + gap * i + gap / 2;
    const bh = (f.kg / maxKg) * chartH;
    const y  = PAD.top + chartH - bh;
    const col = CALIDADCOL[f.calidad] || "#22d3ee";

    // Bar
    ctx.fillStyle = col + "55";
    ctx.strokeStyle = col;
    ctx.lineWidth = 1.5;
    const rx = x - barW / 2;
    ctx.beginPath();
    ctx.roundRect(rx, y, barW, bh, [3, 3, 0, 0]);
    ctx.fill();
    ctx.stroke();

    // Value label
    ctx.fillStyle = col;
    ctx.font = "bold 10px Space Mono, monospace";
    ctx.textAlign = "center";
    ctx.fillText(f.kg.toFixed(1), x, y - 4);

    // X label
    ctx.fillStyle = "rgba(255,255,255,0.45)";
    ctx.font = "10px DM Sans, sans-serif";
    ctx.fillText("F" + f.numero, x, PAD.top + chartH + 14);

    // % of total
    if (totalKg > 0) {
      const pctLabel = ((f.kg / totalKg) * 100).toFixed(0) + "%";
      ctx.fillStyle = "rgba(255,255,255,0.3)";
      ctx.font = "9px DM Sans, sans-serif";
      ctx.fillText(pctLabel, x, PAD.top + chartH + 26);
    }

    points.push({ x, y: PAD.top + chartH - bh });
  });

  // Trend line
  if (points.length > 1) {
    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y + (flushes[0].kg / maxKg) * chartH / 2);
    points.forEach((p, i) => {
      if (i === 0) return;
      const prev = points[i - 1];
      const cy = prev.y + (flushes[i-1].kg / maxKg) * chartH / 2;
      const ny = p.y + (flushes[i].kg / maxKg) * chartH / 2;
      ctx.lineTo(p.x, ny);
    });
    ctx.strokeStyle = "rgba(255,255,255,0.18)";
    ctx.lineWidth = 1.5;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.setLineDash([]);
  }
}

/* ========================= */
/* FRUCTIFICACIÓN — RENDER   */
/* ========================= */
function renderFlushList() {
  const list = document.getElementById("flushList");
  if (!list) return;
  const flushes = activeBatch.fructificacion.flushes;

  if (flushes.length === 0) {
    list.innerHTML = `<p class="empty-msg">No hay cosechas registradas aún.</p>`;
    return;
  }

  const maxKg = Math.max(...flushes.map(f => f.kg), 0.001);
  const totalKg = flushes.reduce((s, f) => s + f.kg, 0);
  const CALIDADCOL = {
    "Premium": "var(--accent)",
    "Estándar": "var(--accent2)",
    "Descarte parcial": "var(--accent3)",
    "Descarte total": "var(--danger)",
  };

  list.innerHTML = flushes.map((f, idx) => {
    const pct       = (f.kg / maxKg * 100).toFixed(1);
    const pctTotal  = totalKg > 0 ? ((f.kg / totalKg) * 100).toFixed(1) : "0";
    const col       = CALIDADCOL[f.calidad] || "var(--muted)";
    const calidadTag = f.calidad
      ? `<span class="flush-calidad-tag" style="color:${col};border-color:${col}">${f.calidad}</span>`
      : "";
    const fechaTag  = f.fecha ? `<span class="flush-fecha-tag">${f.fecha}</span>` : "";
    const obsTag    = f.obs   ? `<div class="flush-obs">${f.obs}</div>` : "";

    // Intervalo desde flush anterior
    let intervaloTag = "";
    if (idx > 0) {
      const prev = flushes[idx - 1];
      if (f.fecha && prev.fecha) {
        const dias = Math.round((new Date(f.fecha) - new Date(prev.fecha)) / 86400000);
        if (!isNaN(dias) && dias >= 0) {
          intervaloTag = `<span class="flush-intervalo">↔ ${dias}d desde F${prev.numero}</span>`;
        }
      }
    }

    // Variación respecto al flush anterior
    let varTag = "";
    if (idx > 0) {
      const prev = flushes[idx - 1];
      const delta = f.kg - prev.kg;
      const sign  = delta >= 0 ? "+" : "";
      const varColor = delta >= 0 ? "var(--accent)" : "var(--danger)";
      varTag = `<span class="flush-variacion" style="color:${varColor}">${sign}${delta.toFixed(2)} kg</span>`;
    }

    return `
      <div class="flush-item-rich">
        <div class="flush-item-header">
          <span class="flush-num">FLUSH ${f.numero}</span>
          ${fechaTag}
          ${intervaloTag}
          ${calidadTag}
          <span class="flush-kg">${f.kg.toFixed(2)} kg</span>
          ${varTag}
          <button class="action-btn" data-flush-idx="${idx}" title="Eliminar">✕</button>
        </div>
        <div class="flush-bar-wrap">
          <div class="flush-bar" style="width:${pct}%; background:${col};"></div>
        </div>
        <div class="flush-pct-total">${pctTotal}% del total producido</div>
        ${obsTag}
      </div>
    `;
  }).join("");

  list.querySelectorAll("button[data-flush-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!confirm("¿Eliminar esta cosecha?")) return;
      const i = Number(btn.dataset.flushIdx);
      activeBatch.fructificacion.flushes.splice(i, 1);
      saveFlushes();
      calcularFructificacion();
      renderFlushList();
    });
  });
}

/* ========================= */
/* FRUCTIFICACIÓN — SEMÁFORO */
/* ========================= */
function calcularSemaforoFruct(flushes, rendimiento, pinChecks) {
  const { pileoDeformado, hongosSecos, primordiosAborto, pinLento } = pinChecks;
  let estado = "⚪ Sin datos aún";
  let detalle = "";

  if (flushes.length === 0 && !pileoDeformado && !hongosSecos) {
    return { estado, detalle };
  }

  if (pileoDeformado || hongosSecos) {
    estado = "🔴 Problema de sala";
    const c = [];
    if (pileoDeformado) c.push("Píleo deformado — CO₂ alto");
    if (hongosSecos)    c.push("Cuerpos fructíferos secos — baja HR");
    detalle = c.join(" · ");
  } else if (primordiosAborto || pinLento || rendimiento > 0 && rendimiento < 25) {
    estado = "🟡 Atención requerida";
    const c = [];
    if (primordiosAborto) c.push("Aborto de primordios");
    if (pinLento)         c.push("Pinning lento");
    if (rendimiento > 0 && rendimiento < 25) c.push(`RB bajo: ${rendimiento.toFixed(1)}%`);
    detalle = c.join(" · ");
  } else if (flushes.length > 0) {
    if (rendimiento >= 80) {
      estado = "🟢 Excelente rendimiento";
      detalle = `RB: ${rendimiento.toFixed(1)}%`;
    } else if (rendimiento >= 50) {
      estado = "🟢 Rendimiento normal";
      detalle = `RB: ${rendimiento.toFixed(1)}%`;
    } else {
      estado = "🟡 Rendimiento moderado";
      detalle = `RB: ${rendimiento.toFixed(1)}%`;
    }
    if (fructMeta.estado === "agotado") { estado = "✅ Lote agotado"; detalle = "Ciclo completado"; }
    if (fructMeta.estado === "descartado") { estado = "⛔ Lote descartado"; detalle = "Descartado anticipadamente"; }
  }

  return { estado, detalle };
}

/* ========================= */
/* FRUCTIFICACIÓN — CALCULAR */
/* ========================= */
function calcularFructificacion() {
  const pesoSecoInput = parseFloat(document.getElementById("pesoSeco")?.value);
  if (!isNaN(pesoSecoInput) && pesoSecoInput > 0) _lastPesoSeco = pesoSecoInput;
  const pesoSeco = _lastPesoSeco;

  const unidades    = Number(document.getElementById("unidadesFruct")?.value) || 0;
  const rendEsperado = Number(document.getElementById("rendimientoEsperado")?.value) || 0;
  const fechaIngreso = document.getElementById("fechaIngreso")?.value || "";

  const flushes  = activeBatch.fructificacion.flushes;
  const totalKg  = flushes.reduce((s, f) => s + f.kg, 0);
  const rendimiento = pesoSeco > 0 ? (totalKg / pesoSeco) * 100 : 0;
  const produccionEsperada = pesoSeco > 0 && rendEsperado > 0 ? pesoSeco * rendEsperado / 100 : 0;
  const mejorFlush   = flushes.length ? flushes.reduce((a, b) => b.kg > a.kg ? b : a) : null;
  const promedioFlush = flushes.length ? totalKg / flushes.length : 0;
  const kgUnidad = unidades > 0 && totalKg > 0 ? totalKg / unidades : 0;

  // Días al primer flush
  let diasPrimerFlush = "—";
  if (fechaIngreso && flushes.length > 0 && flushes[0].fecha) {
    const diff = Math.round((new Date(flushes[0].fecha) - new Date(fechaIngreso)) / 86400000);
    if (!isNaN(diff) && diff >= 0) diasPrimerFlush = `${diff} días`;
  }

  // Intervalo promedio entre flushes
  let intervaloPromedio = "—";
  let proximoFlushEst   = "—";
  if (flushes.length >= 2) {
    const intervalos = [];
    for (let i = 1; i < flushes.length; i++) {
      if (flushes[i].fecha && flushes[i-1].fecha) {
        const d = Math.round((new Date(flushes[i].fecha) - new Date(flushes[i-1].fecha)) / 86400000);
        if (!isNaN(d) && d > 0) intervalos.push(d);
      }
    }
    if (intervalos.length > 0) {
      const avg = intervalos.reduce((a, b) => a + b, 0) / intervalos.length;
      intervaloPromedio = `${avg.toFixed(0)} días`;
      const lastFlush = flushes[flushes.length - 1];
      if (lastFlush.fecha) {
        const proxFecha = new Date(lastFlush.fecha);
        proxFecha.setDate(proxFecha.getDate() + Math.round(avg));
        proximoFlushEst = proxFecha.toLocaleDateString("es-AR", { day:"2-digit", month:"2-digit", year:"numeric" });
      }
    }
  }

  // Guardar estado
  activeBatch.fructificacion.totalKg = totalKg;
  activeBatch.fructificacion.rendimientoBiologico = rendimiento;
  activeBatch.fructificacion.fechaIngreso = fechaIngreso;

  // Semáforo
  const pinChecks = {
    pileoDeformado:   document.getElementById("pileoDeformado")?.checked || false,
    hongosSecos:      document.getElementById("hongosSecos")?.checked    || false,
    primordiosAborto: document.getElementById("primordiosAborto")?.checked || false,
    pinLento:         document.getElementById("pinLento")?.checked        || false,
  };
  const sem = calcularSemaforoFruct(flushes, rendimiento, pinChecks);

  // Colores rendimiento
  const rendColor  = rendimiento >= 80 ? "var(--accent)" : rendimiento >= 40 ? "var(--accent3)" : rendimiento > 0 ? "var(--danger)" : "var(--muted)";
  const rendBarPct = Math.min(100, rendimiento);

  // Meta vs real
  let metaTexto = "";
  if (produccionEsperada > 0 && totalKg > 0) {
    const diff = totalKg - produccionEsperada;
    metaTexto = diff >= 0
      ? `+${diff.toFixed(2)} kg sobre la meta (${produccionEsperada.toFixed(2)} kg esperados)`
      : `${diff.toFixed(2)} kg bajo la meta (${produccionEsperada.toFixed(2)} kg esperados)`;
  }

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  const setStyle = (id, prop, val) => { const el = document.getElementById(id); if (el) el.style[prop] = val; };

  // Semáforo
  set("fructSemaforoEstado", sem.estado);
  set("fructSemaforoDetalle", sem.detalle);

  // Rendimiento
  set("fructRendimientoValor", totalKg > 0 ? `${rendimiento.toFixed(1)}%` : "—");
  setStyle("fructRendimientoValor", "color", rendColor);
  setStyle("fructRendimientoBarra", "width", rendBarPct + "%");
  setStyle("fructRendimientoBarra", "background", rendColor);
  set("fructRendimientoMeta", metaTexto);

  // Métricas
  set("fructTotalKg",       totalKg       > 0 ? `${totalKg.toFixed(2)} kg`       : "—");
  set("fructNumFlushes",    flushes.length > 0 ? `${flushes.length}`              : "—");
  set("fructMejorFlush",    mejorFlush         ? `F${mejorFlush.numero} · ${mejorFlush.kg.toFixed(2)} kg` : "—");
  set("fructPromedioFlush", promedioFlush  > 0 ? `${promedioFlush.toFixed(2)} kg` : "—");
  set("fructKgUnidad",      kgUnidad       > 0 ? `${kgUnidad.toFixed(3)} kg`      : "—");
  set("fructDiasPrimerFlush", diasPrimerFlush);
  set("fructIntervaloPromedio", intervaloPromedio);
  set("fructProximoFlush",   proximoFlushEst);
  set("produccionEsperada",  produccionEsperada > 0 ? `${produccionEsperada.toFixed(2)} kg` : "—");
  set("kgPorUnidadEsperado", (produccionEsperada > 0 && unidades > 0) ? `${(produccionEsperada / unidades).toFixed(3)} kg` : "—");

  // Estado del lote
  const estadoEl = document.getElementById("fructEstadoLote");
  if (estadoEl) {
    const estadoMap = { activo:"🟢 Activo", agotado:"✅ Agotado", descartado:"⛔ Descartado" };
    estadoEl.textContent = estadoMap[fructMeta.estado] || "🟢 Activo";
  }

  // Progreso de flushes vs esperados
  const flushEsp = fructMeta.flushesEsperados;
  if (flushEsp > 0) {
    const progPct = Math.min(100, (flushes.length / flushEsp) * 100);
    setStyle("fructFlushProgresoBarra", "width", progPct + "%");
    set("fructFlushProgresoLabel", `${flushes.length} / ${flushEsp} flushes`);
  } else {
    setStyle("fructFlushProgresoBarra", "width", "0%");
    set("fructFlushProgresoLabel", flushes.length > 0 ? `${flushes.length} flushes` : "—");
  }

  // Gráfico
  renderFlushChart(flushes, totalKg);
}

function agregarFlush() {
  const numero  = parseInt(document.getElementById("flushNumero")?.value, 10);
  const kg      = parseFloat(document.getElementById("kgFlush")?.value);
  const fecha   = document.getElementById("fechaFlush")?.value || "";
  const calidad = document.getElementById("calidadFlush")?.value || "";
  const obs     = document.getElementById("obsFlush")?.value?.trim() || "";

  const pesoSecoInput = parseFloat(document.getElementById("pesoSeco")?.value);
  if (!isNaN(pesoSecoInput) && pesoSecoInput > 0) _lastPesoSeco = pesoSecoInput;

  if (!numero || isNaN(numero) || isNaN(kg) || kg <= 0) {
    alert("Completá el número de flush y los kg cosechados.");
    return;
  }
  if (_lastPesoSeco <= 0) {
    alert("Ingresá el peso seco total del lote antes de registrar cosechas.");
    return;
  }

  const existing = activeBatch.fructificacion.flushes.findIndex(f => f.numero === numero);
  if (existing >= 0) {
    activeBatch.fructificacion.flushes[existing] = { numero, kg, fecha, calidad, obs };
  } else {
    activeBatch.fructificacion.flushes.push({ numero, kg, fecha, calidad, obs });
  }
  activeBatch.fructificacion.flushes.sort((a, b) => a.numero - b.numero);

  saveFlushes();
  calcularFructificacion();
  renderFlushList();

  // Auto-incrementar número de flush
  document.getElementById("flushNumero").value = numero + 1;
  document.getElementById("kgFlush").value    = "";
  document.getElementById("obsFlush").value   = "";
  document.getElementById("calidadFlush").value = "";
  // Mantener la fecha para flushes del mismo día

  // Feedback visual
  const btn = document.getElementById("btnAgregarFlush");
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✔ Cosecha guardada";
    btn.style.background = "#3a5c0a";
    setTimeout(() => { btn.textContent = orig; btn.style.background = ""; }, 1400);
  }
}

function exportarJSON() {
  // Enriquecer el export con datos de fructificación
  const exportData = {
    ...activeBatch,
    fructificacion: {
      ...activeBatch.fructificacion,
      metaLote: { ...fructMeta },
    },
  };
  const dataStr = JSON.stringify(exportData, null, 2);
  const blob    = new Blob([dataStr], { type: "application/json" });
  const url     = URL.createObjectURL(blob);
  const a       = document.createElement("a");
  const filename = activeBatch.id?.trim()
    ? `lote_${activeBatch.id.trim()}_${new Date().toISOString().slice(0,10)}.json`
    : `lote_${new Date().toISOString().slice(0, 10)}.json`;
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

/* ========================= */
/* EXPORT XLSX               */
/* ========================= */
function exportarXLSX() {
  const loteId     = activeBatch.id?.trim() || "—";
  const pesoSeco   = _lastPesoSeco;
  const flushes    = activeBatch.fructificacion.flushes;
  const totalKg    = flushes.reduce((s, f) => s + f.kg, 0);
  const rendBio    = pesoSeco > 0 ? (totalKg / pesoSeco * 100).toFixed(2) : "—";
  const estado     = fructMeta.estado || "activo";
  const fechaHoy   = new Date().toLocaleDateString("es-AR");

  function doExport() {
    const XLSX = window.XLSX;
    const wb = XLSX.utils.book_new();

    // ── Hoja 1: RESUMEN DEL LOTE ──
    const resumenData = [
      ["Campo", "Valor"],
      ["ID del Lote",               loteId],
      ["Fecha de exportación",      fechaHoy],
      ["Peso seco sustrato (kg)",   pesoSeco || "—"],
      ["Total producido (kg)",      parseFloat(totalKg.toFixed(3))],
      ["Rendimiento biológico (%)", rendBio],
      ["Estado del lote",           estado],
      ["Flushes registrados",       flushes.length],
      ["Flushes esperados",         fructMeta.flushesEsperados || "—"],
    ];

    if (flushes.length > 0) {
      const mejor = flushes.reduce((a, b) => b.kg > a.kg ? b : a);
      resumenData.push(["Mejor flush", `F${mejor.numero} — ${mejor.kg.toFixed(3)} kg`]);
      resumenData.push(["Promedio por flush (kg)", parseFloat((totalKg / flushes.length).toFixed(3))]);
    }

    const fechaIngreso = document.getElementById("fechaIngreso")?.value || "";
    if (fechaIngreso) resumenData.push(["Fecha ingreso a sala", fechaIngreso]);
    if (fechaIngreso && flushes.length > 0 && flushes[0].fecha) {
      const diff = Math.round((new Date(flushes[0].fecha) - new Date(fechaIngreso)) / 86400000);
      if (!isNaN(diff) && diff >= 0) resumenData.push(["Días al primer flush", diff]);
    }

    if (flushes.length >= 2) {
      const intervalos = [];
      for (let i = 1; i < flushes.length; i++) {
        if (flushes[i].fecha && flushes[i-1].fecha) {
          const d = Math.round((new Date(flushes[i].fecha) - new Date(flushes[i-1].fecha)) / 86400000);
          if (!isNaN(d) && d > 0) intervalos.push(d);
        }
      }
      if (intervalos.length > 0) {
        const avg = parseFloat((intervalos.reduce((a, b) => a + b, 0) / intervalos.length).toFixed(1));
        resumenData.push(["Intervalo promedio entre flushes (días)", avg]);
      }
    }

    const wsResumen = XLSX.utils.aoa_to_sheet(resumenData);
    wsResumen["!cols"] = [{ wch: 42 }, { wch: 22 }];
    XLSX.utils.book_append_sheet(wb, wsResumen, "Resumen");

    // ── Hoja 2: DETALLE DE FLUSHES ──
    const flushHeaders = ["N° Flush","Fecha cosecha","Kg cosechados","% del total","Variación vs anterior (kg)","Calidad","Observaciones"];
    const flushRows = flushes.map((f, i) => {
      const pctTotal = totalKg > 0 ? parseFloat(((f.kg / totalKg) * 100).toFixed(1)) : "—";
      let variacion = "—";
      if (i > 0) {
        const delta = f.kg - flushes[i-1].kg;
        variacion = (delta >= 0 ? "+" : "") + delta.toFixed(3);
      }
      return [`F${f.numero}`, f.fecha || "—", parseFloat(f.kg.toFixed(3)), pctTotal, variacion, f.calidad || "—", f.obs || ""];
    });

    const wsFlushes = XLSX.utils.aoa_to_sheet([flushHeaders, ...flushRows]);
    wsFlushes["!cols"] = flushHeaders.map((h, i) => {
      const maxLen = Math.max(h.length, ...flushRows.map(r => String(r[i] ?? "").length));
      return { wch: Math.min(maxLen + 2, 30) };
    });
    XLSX.utils.book_append_sheet(wb, wsFlushes, "Flushes");

    // ── Hoja 3: CONDICIONES DE SALA ──
    const salaData = [["Campo", "Valor"]];
    const camposSala = [
      ["Temperatura sala (°C)",     "tempFruct"],
      ["Humedad relativa sala (%)", "hrFruct"],
      ["Ventilación / CO₂",         "ventFruct"],
      ["Fotoperíodo",               "luzFruct"],
      ["Técnica de inducción",      "tecnicaInduccion"],
      ["Densidad de pinning",       "densidadPinning"],
      ["Fecha primordios",          "fechaPrimordios"],
      ["Días hasta primordios",     "diasPrimordios"],
    ];
    camposSala.forEach(([label, id]) => {
      salaData.push([label, document.getElementById(id)?.value || "—"]);
    });

    salaData.push(["", ""]);
    salaData.push(["=== OBSERVACIONES DE PINNING ===", ""]);
    salaData.push(["Observación", "Estado"]);
    const checkPinning = [
      ["Pinning uniforme",           "pinUniforme"],
      ["Primordios sanos",           "primordiosSanos"],
      ["Pinning lento",              "pinLento"],
      ["Aborto de primordios",       "primordiosAborto"],
      ["Píleo deformado (CO₂ alto)", "pileoDeformado"],
      ["Cuerpos fructíferos secos",  "hongosSecos"],
    ];
    checkPinning.forEach(([label, id]) => {
      salaData.push([label, document.getElementById(id)?.checked ? "Sí" : "No"]);
    });

    const wsSala = XLSX.utils.aoa_to_sheet(salaData);
    wsSala["!cols"] = [{ wch: 42 }, { wch: 22 }];
    XLSX.utils.book_append_sheet(wb, wsSala, "Condiciones de sala");

    const filename = loteId !== "—"
      ? `lote_${loteId}_${new Date().toISOString().slice(0,10)}.xlsx`
      : `produccion_${new Date().toISOString().slice(0,10)}.xlsx`;
    XLSX.writeFile(wb, filename);
  }

  if (window.XLSX) {
    doExport();
  } else {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
    script.onload = doExport;
    script.onerror = () => alert("No se pudo cargar la librería de exportación. Verificá tu conexión.");
    document.head.appendChild(script);
  }
}
// Alias de compatibilidad — por si el HTML usa onclick="exportarCSV()"
const exportarCSV = exportarXLSX;

/* ========================= */
/* FRUCTIFICACIÓN — ESTADO   */
/* ========================= */
function syncEstadoBotones() {
  const estado = fructMeta.estado || "activo";
  const btnActivo    = document.getElementById("btnEstadoActivo");
  const btnAgotado   = document.getElementById("btnEstadoAgotado");
  const btnDescartado= document.getElementById("btnEstadoDescartado");
  [btnActivo, btnAgotado, btnDescartado].forEach(b => b && b.classList.remove("estado-btn--active"));
  if (estado === "activo"     && btnActivo)     btnActivo.classList.add("estado-btn--active");
  if (estado === "agotado"    && btnAgotado)    btnAgotado.classList.add("estado-btn--active");
  if (estado === "descartado" && btnDescartado) btnDescartado.classList.add("estado-btn--active");
  const flushEspEl = document.getElementById("flushesEsperados");
  if (flushEspEl && fructMeta.flushesEsperados > 0) flushEspEl.value = fructMeta.flushesEsperados;
}

/* ========================= */
/* PREPARACIÓN - SUSTRATOS   */
/* ========================= */
/* ========================= */
/* SUSTRATOS PERSONALIZADOS  */
/* ========================= */
const CUSTOM_SUSTRATO_KEY = "hongosCustomSustratos";

const SUSTRATO_DEFAULT = new Set([
  "Paja de trigo","Paja de arroz","Paja de cebada","Paja de avena","Paja de centeno",
  "Aserrín de roble","Aserrín de haya","Aserrín de álamo","Aserrín de eucalipto",
  "Viruta de madera","Pellets de madera","Mazorca de maíz triturada","Rastrojo de maíz",
  "Bagazo de caña de azúcar","Cáscara de girasol","Cáscara de soja",
  "Pulpa de café","Cartón corrugado","Papel periódico triturado",
]);

function loadCustomSustratos() {
  try {
    const saved = localStorage.getItem(CUSTOM_SUSTRATO_KEY);
    if (saved) return JSON.parse(saved);
  } catch {}
  return [];
}

function saveCustomSustratos(lista) {
  localStorage.setItem(CUSTOM_SUSTRATO_KEY, JSON.stringify(lista));
}

function guardarSustrato(block) {
  const input = block?.querySelector('input[name="tipoSustrato"]');
  const val = input?.value.trim();
  if (!val) return;

  const lista = loadCustomSustratos();
  if (SUSTRATO_DEFAULT.has(val) || lista.includes(val)) {
    // Ya existe — feedback sin guardar
    const btn = block.querySelector(".btn-guardar-sustrato");
    if (btn) {
      const orig = btn.textContent;
      btn.textContent = "Ya existe";
      setTimeout(() => { btn.textContent = orig; }, 1400);
    }
    return;
  }

  lista.unshift(val); // más reciente primero
  saveCustomSustratos(lista);

  // Agregar al datalist global
  agregarSustratoAlDatalist(val);
  renderSustratosChips();

  // Feedback
  const btn = block.querySelector(".btn-guardar-sustrato");
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✔ Guardado";
    btn.style.borderColor = "var(--accent)";
    btn.style.color = "var(--accent)";
    setTimeout(() => {
      btn.textContent = orig;
      btn.style.borderColor = "";
      btn.style.color = "";
    }, 1500);
  }
}

function eliminarSustrato(val) {
  const lista = loadCustomSustratos().filter(x => x !== val);
  saveCustomSustratos(lista);
  // Quitar del datalist
  const dl = document.getElementById("sustratos-list");
  if (dl) {
    const opt = [...dl.options].find(o => o.value === val);
    if (opt) opt.remove();
  }
  renderSustratosChips();
}

function agregarSustratoAlDatalist(val) {
  const dl = document.getElementById("sustratos-list");
  if (!dl) return;
  if ([...dl.options].some(o => o.value === val)) return;
  const opt = document.createElement("option");
  opt.value = val;
  dl.prepend(opt);
}

function renderSustratosChips() {
  const lista = loadCustomSustratos();
  // Renderizar en TODOS los bloques de sustrato visibles
  document.querySelectorAll(".sustrato-chips-area").forEach(container => {
    if (lista.length === 0) {
      container.innerHTML = "";
      return;
    }

    container.innerHTML = `
      <div class="custom-sust-header">📦 Mis sustratos guardados</div>
      <div class="custom-sust-inner">
        ${lista.map(v => `
          <div class="custom-sust-chip">
            <button type="button" class="chip-select chip-select-sust" data-val="${v.replace(/"/g,'&quot;')}">${v}</button>
            <button type="button" class="chip-del chip-del-sust" data-val="${v.replace(/"/g,'&quot;')}" title="Eliminar">✕</button>
          </div>
        `).join("")}
      </div>`;

    // Clic en chip → rellena el input de ESE bloque
    container.querySelectorAll(".chip-select-sust").forEach(btn => {
      btn.addEventListener("click", () => {
        const block = btn.closest(".substrate-block");
        const input = block?.querySelector('input[name="tipoSustrato"]');
        if (input) input.value = btn.dataset.val;
      });
    });

    // Clic en ✕ → eliminar
    container.querySelectorAll(".chip-del-sust").forEach(btn => {
      btn.addEventListener("click", () => {
        if (confirm(`¿Eliminar "${btn.dataset.val}" de tu lista?`)) {
          eliminarSustrato(btn.dataset.val);
        }
      });
    });
  });
}

function initCustomSustratos() {
  // Inyectar guardados al datalist al inicio
  loadCustomSustratos().forEach(agregarSustratoAlDatalist);
  renderSustratosChips();

  // Wiring del botón guardar del bloque estático (index 0)
  const staticBlock = document.querySelector('.substrate-block[data-substrate-index="0"]');
  if (staticBlock) {
    staticBlock.querySelector(".btn-guardar-sustrato")
      ?.addEventListener("click", () => guardarSustrato(staticBlock));
  }
}

function createSustratoBlock(index) {
  const block = document.createElement("div");
  block.className = "block-card substrate-block";
  block.dataset.substrateIndex = String(index);
  block.innerHTML = `
    <div class="substrate-header">
      <h4>Sustrato ${index + 1}</h4>
      <button type="button" class="remove-substrate-btn">Eliminar</button>
    </div>
    <div class="row">
      <label>Tipo de Sustrato
        <div class="sust-input-wrap">
          <input type="text" name="tipoSustrato" placeholder="Paja de trigo" list="sustratos-list" required autocomplete="off" />
          <button type="button" class="btn-guardar-sust btn-guardar-sustrato" title="Guardar en mi lista">＋ Guardar</button>
        </div>
      </label>
      <label>Peso Seco (kg)<input type="number" name="pesoSeco" min="0" step="0.01" placeholder="10" required /></label>
    </div>
    <div class="custom-sust-chips sustrato-chips-area"></div>
    <label class="full">Nutrientes Adicionales
      <input type="text" name="nutrientes" placeholder="Salvado de trigo, yeso" list="nutrientes-list" autocomplete="off" />
    </label>
  `;
  // Wiring del botón guardar en el bloque recién creado
  const btn = block.querySelector(".btn-guardar-sustrato");
  btn?.addEventListener("click", () => guardarSustrato(block));
  renderSustratosChips(); // refrescar chips en todos los bloques
  return block;
}

function normalizeSubstrateHeadings(container) {
  const blocks = container.querySelectorAll(".substrate-block");
  blocks.forEach((block, index) => {
    block.dataset.substrateIndex = String(index);
    const heading = block.querySelector("h4");
    if (!heading) return;
    heading.textContent = index === 0 ? "Sustrato base" : `Sustrato ${index + 1}`;
  });
}

function getSustratosFromForm(container) {
  const blocks = container.querySelectorAll(".substrate-block");
  return Array.from(blocks)
    .map((block) => ({
      tipoSustrato: block.querySelector('input[name="tipoSustrato"]')?.value.trim() || "",
      pesoSeco: Number(block.querySelector('input[name="pesoSeco"]')?.value) || 0,
      nutrientes: block.querySelector('input[name="nutrientes"]')?.value.trim() || "",
    }))
    .filter(s => s.tipoSustrato || s.pesoSeco > 0);
}

function resetSustratos(container) {
  const blocks = container.querySelectorAll(".substrate-block");
  blocks.forEach((block, index) => {
    if (index === 0) {
      block.querySelectorAll("input").forEach(i => { i.value = ""; });
    } else {
      block.remove();
    }
  });
  normalizeSubstrateHeadings(container);
}

/* ========================= */
/* PREPARACIÓN - ENTRIES     */
/* ========================= */
function loadEntries() {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return [];
  try {
    const parsed = JSON.parse(saved);
    if (Array.isArray(parsed)) return parsed.map(e => ({
      ...e,
      sustratos: Array.isArray(e.sustratos) ? e.sustratos : [],
    }));
  } catch { }
  return [];
}

function saveEntries(entries) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
}

function renderEntries(entries, tableBody, totalEl, allEntries) {
  // allEntries = full unfiltered list (for delete by real index)
  const source = allEntries || entries;
  tableBody.innerHTML = "";

  if (entries.length === 0) {
    tableBody.innerHTML = `<tr><td colspan="8" class="empty-row">Sin resultados para los filtros aplicados.</td></tr>`;
    if (totalEl) totalEl.textContent = `Entradas: 0 / ${source.length}`;
    return;
  }

  entries.forEach((entry) => {
    // Find real index in full list to delete correctly
    const realIndex = source.indexOf(entry);
    const sustratos = Array.isArray(entry.sustratos) ? entry.sustratos : [];
    const sustratoTexto = sustratos.map(s => s.tipoSustrato || "-").join(", ") || entry.tipoSustrato || "-";
    const pesoTotal = sustratos.reduce((acc, s) => acc + (Number(s.pesoSeco) || 0), 0) || Number(entry.pesoSeco) || 0;

    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${entry.fecha}</td>
      <td>${entry.hora}</td>
      <td>${entry.hongo}</td>
      <td>${entry.cepa}</td>
      <td>${sustratoTexto}</td>
      <td>${pesoTotal.toFixed(2)} kg</td>
      <td>${entry.obs || "-"}</td>
      <td><button type="button" class="action-btn" data-index="${realIndex}">✕</button></td>
    `;
    tableBody.appendChild(row);
  });

  const shown = entries.length;
  const total = source.length;
  if (totalEl) totalEl.textContent = shown === total
    ? `Entradas: ${total}`
    : `Mostrando ${shown} de ${total}`;
}

/* ── Filtros del historial ── */
function applyHistorialFilters(allEntries, tableBody, totalEl) {
  const hongo  = document.getElementById("filterHongo")?.value.trim().toLowerCase() || "";
  const desde  = document.getElementById("filterDesde")?.value || "";
  const hasta  = document.getElementById("filterHasta")?.value || "";

  let filtered = allEntries;

  if (hongo)  filtered = filtered.filter(e => e.hongo?.toLowerCase().includes(hongo));
  if (desde)  filtered = filtered.filter(e => e.fecha >= desde);
  if (hasta)  filtered = filtered.filter(e => e.fecha <= hasta);

  renderEntries(filtered, tableBody, totalEl, allEntries);

  // Status badge
  const statusEl = document.getElementById("filterStatus");
  const active = hongo || desde || hasta;
  if (statusEl) {
    if (active) {
      const parts = [];
      if (hongo) parts.push(`hongo: "${hongo}"`);
      if (desde) parts.push(`desde: ${desde}`);
      if (hasta) parts.push(`hasta: ${hasta}`);
      statusEl.textContent = `Filtros activos — ${parts.join(" · ")}`;
      statusEl.style.display = "block";
    } else {
      statusEl.style.display = "none";
    }
  }
}

/* ========================= */
/* RANGOS IDEALES POR HONGO  */
/* ========================= */
const RANGOS_POR_HONGO = {
  "pleurotus":           { tempMin:20, tempMax:26, hrMin:65, hrMax:80, diasMin:10, diasMax:18, label:"Pleurotus spp." },
  "lentinula edodes":    { tempMin:15, tempMax:20, hrMin:60, hrMax:75, diasMin:30, diasMax:60, label:"Shiitake" },
  "hericium erinaceus":  { tempMin:18, tempMax:24, hrMin:70, hrMax:85, diasMin:14, diasMax:25, label:"Melena de León" },
  "ganoderma":           { tempMin:24, tempMax:28, hrMin:70, hrMax:80, diasMin:20, diasMax:40, label:"Reishi" },
  "agaricus":            { tempMin:22, tempMax:26, hrMin:70, hrMax:80, diasMin:10, diasMax:16, label:"Champiñón" },
  "flammulina velutipes":{ tempMin:10, tempMax:15, hrMin:80, hrMax:90, diasMin:20, diasMax:35, label:"Enoki" },
  "trametes versicolor": { tempMin:20, tempMax:28, hrMin:65, hrMax:80, diasMin:25, diasMax:50, label:"Cola de Pavo" },
  "inonotus obliquus":   { tempMin:15, tempMax:22, hrMin:65, hrMax:75, diasMin:90, diasMax:180,label:"Chaga" },
  "cordyceps militaris": { tempMin:18, tempMax:22, hrMin:75, hrMax:90, diasMin:20, diasMax:35, label:"Cordyceps" },
  "auricularia":         { tempMin:20, tempMax:28, hrMin:75, hrMax:90, diasMin:14, diasMax:25, label:"Oreja de Judas" },
  "stropharia":          { tempMin:15, tempMax:24, hrMin:65, hrMax:80, diasMin:14, diasMax:30, label:"King Stropharia" },
  "hypsizygus":          { tempMin:15, tempMax:20, hrMin:75, hrMax:85, diasMin:25, diasMax:45, label:"Shimeji" },
  "pholiota nameko":     { tempMin:12, tempMax:18, hrMin:80, hrMax:90, diasMin:30, diasMax:50, label:"Nameko" },
  "agrocybe aegerita":   { tempMin:18, tempMax:24, hrMin:70, hrMax:80, diasMin:20, diasMax:35, label:"Pioppino" },
  "tremella fuciformis": { tempMin:22, tempMax:28, hrMin:80, hrMax:90, diasMin:20, diasMax:40, label:"Tremella" },
  "default":             { tempMin:18, tempMax:26, hrMin:65, hrMax:85, diasMin:14, diasMax:30, label:"Hongo genérico" },
};

function getRangosHongo(hongoStr) {
  if (!hongoStr) return RANGOS_POR_HONGO["default"];
  const lower = hongoStr.toLowerCase();
  if (lower.includes("pleurotus")) return RANGOS_POR_HONGO["pleurotus"];
  if (lower.includes("lentinula") || lower.includes("shiitake")) return RANGOS_POR_HONGO["lentinula edodes"];
  if (lower.includes("hericium") || lower.includes("melena")) return RANGOS_POR_HONGO["hericium erinaceus"];
  if (lower.includes("ganoderma") || lower.includes("reishi")) return RANGOS_POR_HONGO["ganoderma"];
  if (lower.includes("agaricus")) return RANGOS_POR_HONGO["agaricus"];
  if (lower.includes("flammulina") || lower.includes("enoki")) return RANGOS_POR_HONGO["flammulina velutipes"];
  if (lower.includes("trametes") || lower.includes("cola de pavo")) return RANGOS_POR_HONGO["trametes versicolor"];
  if (lower.includes("inonotus") || lower.includes("chaga")) return RANGOS_POR_HONGO["inonotus obliquus"];
  if (lower.includes("cordyceps")) return RANGOS_POR_HONGO["cordyceps militaris"];
  if (lower.includes("auricularia") || lower.includes("oreja")) return RANGOS_POR_HONGO["auricularia"];
  if (lower.includes("stropharia") || lower.includes("vino tinto")) return RANGOS_POR_HONGO["stropharia"];
  if (lower.includes("hypsizygus") || lower.includes("shimeji")) return RANGOS_POR_HONGO["hypsizygus"];
  if (lower.includes("pholiota") || lower.includes("nameko")) return RANGOS_POR_HONGO["pholiota nameko"];
  if (lower.includes("agrocybe") || lower.includes("pioppino")) return RANGOS_POR_HONGO["agrocybe aegerita"];
  if (lower.includes("tremella") || lower.includes("nieve")) return RANGOS_POR_HONGO["tremella fuciformis"];
  return RANGOS_POR_HONGO["default"];
}

/* ========================= */
/* INCUBACIÓN - STATE        */
/* ========================= */
let incubControles = [];

function loadIncubControles() {
  const data = loadActiveBatchData();
  incubControles = data?.incubacion?.controles || [];
}

function saveIncubControles() {
  const data = loadActiveBatchData() || emptyBatchData(getActiveBatchId());
  if (!data.incubacion) data.incubacion = {};
  data.incubacion.controles = incubControles;
  saveActiveBatchData(data);
}

/* ========================= */
/* INCUBACIÓN - GAUGES       */
/* ========================= */
function updateGauge(barId, labelId, value, min, max) {
  const bar = document.getElementById(barId);
  const label = document.getElementById(labelId);
  if (!bar || !label || !value) {
    if (bar) bar.style.width = "0%";
    if (label) label.textContent = "";
    return;
  }
  // Map value within a safe visual range (min-5 to max+5)
  const visMin = Math.max(0, min - 8);
  const visMax = max + 8;
  const pct = Math.min(100, Math.max(0, ((value - visMin) / (visMax - visMin)) * 100));
  bar.style.width = pct + "%";

  if (value < min) {
    bar.style.background = "var(--accent2)"; // too low → cyan
    label.textContent = `${value} — Por debajo del rango ideal (${min}–${max})`;
    label.style.color = "var(--accent2)";
  } else if (value > max) {
    bar.style.background = "var(--danger)";  // too high → red
    label.textContent = `${value} — Por encima del rango ideal (${min}–${max})`;
    label.style.color = "var(--danger)";
  } else {
    bar.style.background = "var(--accent)";  // ok → green
    label.textContent = `${value} — ✔ Dentro del rango ideal (${min}–${max})`;
    label.style.color = "var(--accent)";
  }
}

function actualizarRangosIncubacion(hongoStr) {
  const rangos = getRangosHongo(hongoStr);
  const hintEl = document.getElementById("incubRangosText");
  const hintBox = document.getElementById("incubRangosHint");
  if (hintEl) {
    if (hongoStr && hongoStr.trim()) {
      hintEl.textContent = `${rangos.label} — Temp ideal: ${rangos.tempMin}–${rangos.tempMax} °C · HR: ${rangos.hrMin}–${rangos.hrMax}% · Colonización: ${rangos.diasMin}–${rangos.diasMax} días`;
      hintBox && hintBox.classList.add("has-hongo");
    } else {
      hintEl.textContent = "Seleccioná un hongo en Preparación para ver rangos ideales.";
      hintBox && hintBox.classList.remove("has-hongo");
    }
  }
  // Re-run gauges if values exist
  const temp = parseFloat(document.getElementById("tempAmbiente")?.value);
  const hr = parseFloat(document.getElementById("humedadRelativa")?.value);
  if (!isNaN(temp)) updateGauge("tempGaugeBar", "tempGaugeLabel", temp, rangos.tempMin, rangos.tempMax);
  if (!isNaN(hr))   updateGauge("humedadGaugeBar", "humedadGaugeLabel", hr, rangos.hrMin, rangos.hrMax);
}

/* ========================= */
/* INCUBACIÓN - COLONIZACIÓN */
/* ========================= */
function updateColonizacionBarra(pct) {
  const barra = document.getElementById("colonizacionBarra");
  const label = document.getElementById("colonizacionBarraPct");
  if (!barra || !label) return;
  const p = Math.min(100, Math.max(0, pct || 0));
  barra.style.width = p + "%";
  if (p >= 85) barra.style.background = "var(--accent)";
  else if (p >= 50) barra.style.background = "var(--accent3)";
  else barra.style.background = "var(--danger)";
  label.textContent = p + "%";
}

/* ========================= */
/* INCUBACIÓN - MÉTRICAS     */
/* ========================= */
function updateIncubacionMetricas() {
  const cantidadUnidades = Number(document.getElementById("cantidadUnidadesIncubacion")?.value) || 0;
  const pesoHumedoUnidad  = Number(document.getElementById("pesoHumedoUnidad")?.value) || 0;
  const colonizacionEstimada = Number(document.getElementById("colonizacionEstimada")?.value) || 0;
  const bolsasContaminadas = Number(document.getElementById("bolsasContaminadas")?.value) || 0;
  const descarteLoteManual = Number(document.getElementById("descarteLote")?.value) || 0;
  const diasColonizacionTotal = Number(document.getElementById("diasColonizacionTotal")?.value) || 0;
  const fechaInicio = document.getElementById("fechaInicioIncubacion")?.value || "";
  const diasEstimados = Number(document.getElementById("diasEstimadosColonizacion")?.value) || 0;

  // Checkboxes de observaciones visuales — afectan al semáforo
  const manchasVerdes  = document.getElementById("obsManchasVerdes")?.checked;
  const manchasNegras  = document.getElementById("obsManchasNegras")?.checked;
  const manchasNaranja = document.getElementById("obsManchasNaranjas")?.checked;
  const olorExtrano    = document.getElementById("obsOlorExtrano")?.checked;
  const excesoHumedad  = document.getElementById("obsExcesoHumedad")?.checked;
  const micelioDebil   = document.getElementById("obsMicelioDébil")?.checked;

  // ── Cálculos ──
  const pesoHumedoTotal = cantidadUnidades * pesoHumedoUnidad;
  const tasaContaminacion = cantidadUnidades > 0 ? (bolsasContaminadas / cantidadUnidades) * 100 : 0;
  const descarteLote = descarteLoteManual > 0 ? descarteLoteManual : tasaContaminacion;
  const eficienciaLote = Math.max(0, 100 - descarteLote);

  // Fecha fin estimada
  let fechaFinEstimada = "—";
  if (fechaInicio && diasEstimados > 0) {
    const fin = new Date(fechaInicio);
    fin.setDate(fin.getDate() + diasEstimados);
    fechaFinEstimada = fin.toLocaleDateString("es-AR", { day:"2-digit", month:"2-digit", year:"numeric" });
  }

  // ── Semáforo inteligente ──
  const hayDatos = colonizacionEstimada > 0 || cantidadUnidades > 0;
  const hayContaminacionVisible = manchasVerdes || manchasNegras || manchasNaranja || olorExtrano;
  const hayAlerta = excesoHumedad || micelioDebil;

  let semaforo = "⚪ Sin datos aún";
  let detalle = "";

  if (hayDatos || hayContaminacionVisible) {
    if (hayContaminacionVisible || tasaContaminacion >= 15 || descarteLote >= 15 || (colonizacionEstimada > 0 && colonizacionEstimada < 40)) {
      semaforo = "🔴 Contaminación / Problema grave";
      const causas = [];
      if (manchasVerdes) causas.push("Trichoderma detectado");
      if (manchasNegras) causas.push("Manchas negras");
      if (manchasNaranja) causas.push("Neurospora detectada");
      if (olorExtrano) causas.push("Olor extraño");
      if (tasaContaminacion >= 15) causas.push(`${tasaContaminacion.toFixed(1)}% de unidades contaminadas`);
      if (colonizacionEstimada > 0 && colonizacionEstimada < 40) causas.push("Colonización muy baja");
      detalle = causas.join(" · ");
    } else if (hayAlerta || tasaContaminacion >= 5 || descarteLote >= 5 || (colonizacionEstimada > 0 && colonizacionEstimada < 70)) {
      semaforo = "🟡 Atención requerida";
      const causas = [];
      if (excesoHumedad) causas.push("Exceso de humedad");
      if (micelioDebil) causas.push("Micelio débil");
      if (tasaContaminacion >= 5) causas.push(`${tasaContaminacion.toFixed(1)}% contaminación`);
      if (colonizacionEstimada > 0 && colonizacionEstimada < 70) causas.push("Colonización lenta");
      detalle = causas.join(" · ");
    } else {
      semaforo = "🟢 Colonización normal";
      if (colonizacionEstimada >= 100) {
        semaforo = "✅ Listo para fructificación";
        detalle = "Colonización completa";
      } else if (colonizacionEstimada > 0) {
        detalle = `${colonizacionEstimada}% colonizado`;
      }
    }
  }

  // ── Actualizar DOM ──
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };

  set("semaforoEstado", semaforo);
  set("semaforoDetalle", detalle);
  set("promedioColonizacion", diasColonizacionTotal > 0 ? `${diasColonizacionTotal} días` : "—");
  set("eficienciaLote", cantidadUnidades > 0 ? `${eficienciaLote.toFixed(1)}%` : "—");
  set("tasaContaminacion", cantidadUnidades > 0 ? `${tasaContaminacion.toFixed(1)}%` : "—");
  set("pesoHumedoTotal", pesoHumedoTotal > 0 ? `${pesoHumedoTotal.toFixed(1)} kg` : "—");
  set("metricPesoTotal", pesoHumedoTotal > 0 ? `${pesoHumedoTotal.toFixed(1)} kg` : "—");
  set("metricFechaFin", fechaFinEstimada);
  set("metricColonizacion", colonizacionEstimada > 0 ? `${colonizacionEstimada}%` : "—");
  set("fechaFinEstimada", fechaFinEstimada);

  // Barra de colonización
  updateColonizacionBarra(colonizacionEstimada);

  // Gauges de temperatura y humedad
  const hongo = document.getElementById("hongo")?.value || "";
  const rangos = getRangosHongo(hongo);
  const temp = parseFloat(document.getElementById("tempAmbiente")?.value);
  const hr = parseFloat(document.getElementById("humedadRelativa")?.value);
  if (!isNaN(temp)) updateGauge("tempGaugeBar", "tempGaugeLabel", temp, rangos.tempMin, rangos.tempMax);
  if (!isNaN(hr))   updateGauge("humedadGaugeBar", "humedadGaugeLabel", hr, rangos.hrMin, rangos.hrMax);
}

/* ========================= */
/* INCUBACIÓN - HISTORIAL    */
/* ========================= */
function renderHistorialIncubacion() {
  const container = document.getElementById("historialIncubacion");
  if (!container) return;

  if (incubControles.length === 0) {
    container.innerHTML = `<p class="empty-msg">No hay controles registrados aún.</p>`;
    return;
  }

  container.innerHTML = incubControles.slice().reverse().map((c, i) => {
    const idx = incubControles.length - 1 - i;
    const obs = [];
    if (c.micelioUniforme) obs.push("✔ Micelio uniforme");
    if (c.miceliodenso)    obs.push("✔ Micelio denso");
    if (c.excesoHumedad)   obs.push("⚠ Exc. humedad");
    if (c.micelioDebil)    obs.push("⚠ Micelio débil");
    if (c.manchasVerdes)   obs.push("🔴 Trichoderma");
    if (c.manchasNegras)   obs.push("🔴 Manchas negras");
    if (c.olorExtrano)     obs.push("🔴 Olor extraño");
    if (c.manchasNaranjas) obs.push("🔴 Neurospora");

    const colonPct = c.colonizacion || 0;
    const colonColor = colonPct >= 85 ? "var(--accent)" : colonPct >= 50 ? "var(--accent3)" : "var(--danger)";

    return `
      <div class="historial-incub-row">
        <div class="historial-incub-header">
          <span class="historial-incub-dia">Día ${c.dia}</span>
          <span class="historial-incub-fecha">${c.fecha || ""}</span>
          <span class="historial-incub-colon" style="color:${colonColor}">${colonPct}%</span>
          <button class="action-btn" data-incub-idx="${idx}" title="Eliminar control">✕</button>
        </div>
        <div class="historial-incub-meta">
          ${c.temp ? `🌡 ${c.temp}°C` : ""} ${c.hr ? `· 💧 ${c.hr}%` : ""}
          ${obs.length ? `· ${obs.join(" · ")}` : ""}
        </div>
        <div class="historial-incub-barra-wrap">
          <div class="historial-incub-barra" style="width:${colonPct}%; background:${colonColor};"></div>
        </div>
      </div>
    `;
  }).join("");

  // Bind delete buttons
  container.querySelectorAll("button[data-incub-idx]").forEach(btn => {
    btn.addEventListener("click", () => {
      const idx = Number(btn.dataset.incubIdx);
      incubControles.splice(idx, 1);
      saveIncubControles();
      renderHistorialIncubacion();
    });
  });
}

function guardarControlDiario() {
  const dia = Number(document.getElementById("diaDesdeInoculacion")?.value);
  const colonizacion = Number(document.getElementById("colonizacionEstimada")?.value) || 0;
  const temp = document.getElementById("tempAmbiente")?.value;
  const hr = document.getElementById("humedadRelativa")?.value;

  if (!dia && colonizacion === 0) {
    alert("Ingresá al menos el día y el % de colonización antes de guardar.");
    return;
  }

  const control = {
    dia: dia || 0,
    fecha: new Date().toLocaleDateString("es-AR"),
    colonizacion,
    temp: temp ? Number(temp) : null,
    hr: hr ? Number(hr) : null,
    micelioUniforme: document.getElementById("obsMicelioUniforme")?.checked || false,
    miceliodenso:    document.getElementById("obsMicelioDenso")?.checked || false,
    excesoHumedad:   document.getElementById("obsExcesoHumedad")?.checked || false,
    micelioDebil:    document.getElementById("obsMicelioDébil")?.checked || false,
    manchasVerdes:   document.getElementById("obsManchasVerdes")?.checked || false,
    manchasNegras:   document.getElementById("obsManchasNegras")?.checked || false,
    olorExtrano:     document.getElementById("obsOlorExtrano")?.checked || false,
    manchasNaranjas: document.getElementById("obsManchasNaranjas")?.checked || false,
  };

  incubControles.push(control);
  saveIncubControles();
  renderHistorialIncubacion();

  // Feedback visual breve
  const btn = document.getElementById("guardarControlDiario");
  if (btn) {
    const orig = btn.textContent;
    btn.textContent = "✔ Guardado";
    btn.style.background = "#3a5c0a";
    setTimeout(() => { btn.textContent = orig; btn.style.background = ""; }, 1500);
  }
}


/* ========================= */
/* PWA — INSTALL PROMPT      */
/* ========================= */
let _deferredInstallPrompt = null;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  _deferredInstallPrompt = e;
  const btn = document.getElementById("btnInstalarPWA");
  if (btn) btn.style.display = "flex";
});

window.addEventListener("appinstalled", () => {
  _deferredInstallPrompt = null;
  const btn = document.getElementById("btnInstalarPWA");
  if (btn) btn.style.display = "none";
});

function initPWAInstallBtn() {
  document.getElementById("btnInstalarPWA")?.addEventListener("click", async () => {
    if (!_deferredInstallPrompt) return;
    _deferredInstallPrompt.prompt();
    const { outcome } = await _deferredInstallPrompt.userChoice;
    if (outcome === "accepted") {
      _deferredInstallPrompt = null;
      const btn = document.getElementById("btnInstalarPWA");
      if (btn) btn.style.display = "none";
    }
  });
}

/* ========================= */
/* INIT                      */
/* ========================= */
document.addEventListener("DOMContentLoaded", () => {
  // Footer year
  const footerYear = document.getElementById("footerYear");
  if (footerYear) footerYear.textContent = new Date().getFullYear();

  // Set today's date defaults
  const today = new Date().toISOString().slice(0, 10);
  const fechaInput = document.getElementById("fecha");
  if (fechaInput && !fechaInput.value) fechaInput.value = today;

  // ── PREPARACIÓN FORM ──
  initCustomSustratos();
  const form = document.getElementById("entryForm");
  const clearBtn = document.getElementById("clearBtn");
  const addSustratoBtn = document.getElementById("addSustratoBtn");
  const sustratosContainer = document.getElementById("sustratosContainer");
  const tableBody = document.querySelector("#entriesTable tbody");
  const totalEl = document.getElementById("totalEntradas");

  if (form && tableBody) {
    let entries = loadEntries();
    applyHistorialFilters(entries, tableBody, totalEl);

    // ── Filtros ──
    const rerender = () => applyHistorialFilters(entries, tableBody, totalEl);
    document.getElementById("filterHongo")?.addEventListener("input", rerender);
    document.getElementById("filterDesde")?.addEventListener("input", rerender);
    document.getElementById("filterHasta")?.addEventListener("input", rerender);
    document.getElementById("btnLimpiarFiltros")?.addEventListener("click", () => {
      const fh = document.getElementById("filterHongo");
      const fd = document.getElementById("filterDesde");
      const fk = document.getElementById("filterHasta");
      if (fh) fh.value = "";
      if (fd) fd.value = "";
      if (fk) fk.value = "";
      rerender();
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const sustratos = getSustratosFromForm(sustratosContainer);
      if (sustratos.length === 0) return;

      const entry = {
        fecha: document.getElementById("fecha").value,
        hora: document.getElementById("hora").value,
        hongo: document.getElementById("hongo").value.trim(),
        cepa: document.getElementById("cepa").value.trim(),
        tipoSustrato: sustratos[0].tipoSustrato,
        pesoSeco: sustratos[0].pesoSeco,
        nutrientes: sustratos[0].nutrientes,
        sustratos,
        humectacion: Number(document.getElementById("humectacion").value) || 0,
        esterilizacion: document.getElementById("esterilizacion").value.trim(),
        tiempoProceso: document.getElementById("tiempoProceso").value,
        obs: document.getElementById("obs").value.trim(),
      };

      entries.unshift(entry);
      saveEntries(entries);
      applyHistorialFilters(entries, tableBody, totalEl);
      form.reset();
      resetSustratos(sustratosContainer);

      // Reset date to today after clear
      if (fechaInput) fechaInput.value = today;
    });

    clearBtn?.addEventListener("click", () => {
      form.reset();
      resetSustratos(sustratosContainer);
      if (fechaInput) fechaInput.value = today;
    });

    addSustratoBtn?.addEventListener("click", () => {
      const nextIndex = sustratosContainer.querySelectorAll(".substrate-block").length;
      sustratosContainer.appendChild(createSustratoBlock(nextIndex));
      normalizeSubstrateHeadings(sustratosContainer);
    });

    sustratosContainer?.addEventListener("click", (event) => {
      const button = event.target.closest(".remove-substrate-btn");
      if (!button) return;
      const block = button.closest(".substrate-block");
      if (!block) return;
      block.remove();
      normalizeSubstrateHeadings(sustratosContainer);
    });

    tableBody.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-index]");
      if (!button) return;
      const index = Number(button.dataset.index);
      if (!Number.isInteger(index)) return;
      if (!confirm("¿Eliminar este registro?")) return;
      entries.splice(index, 1);
      saveEntries(entries);
      applyHistorialFilters(entries, tableBody, totalEl);
    });
  }

  // ── INCUBACIÓN: cargar historial ──
  loadIncubControles();
  renderHistorialIncubacion();

  // Campos que disparan recálculo de métricas
  const incubInputIds = [
    "cantidadUnidadesIncubacion", "pesoHumedoUnidad",
    "colonizacionEstimada", "bolsasContaminadas",
    "descarteLote", "diasColonizacionTotal",
    "fechaInicioIncubacion", "diasEstimadosColonizacion",
    "tempAmbiente", "humedadRelativa",
  ];
  incubInputIds.forEach(id => {
    document.getElementById(id)?.addEventListener("input", updateIncubacionMetricas);
  });

  // Checkboxes también disparan el semáforo
  const checkboxIds = [
    "obsMicelioUniforme", "obsMicelioDenso", "obsExcesoHumedad",
    "obsMicelioDébil", "obsManchasVerdes", "obsManchasNegras",
    "obsOlorExtrano", "obsManchasNaranjas",
  ];
  checkboxIds.forEach(id => {
    document.getElementById(id)?.addEventListener("change", updateIncubacionMetricas);
  });

  // Botón guardar control diario
  document.getElementById("guardarControlDiario")?.addEventListener("click", guardarControlDiario);

  updateIncubacionMetricas();

  // ── Gestión de lotes ──
  initBatchManager();

  // ── Sync loteId → activeBatch.id (también persiste) ──
  document.getElementById("loteId")?.addEventListener("input", (e) => {
    activeBatch.id = e.target.value.trim();
  });

  // ── Conectar campo hongo con Inoculación e Incubación ──
  const hongoInput = document.getElementById("hongo");
  if (hongoInput) {
    hongoInput.addEventListener("input", (e) => {
      actualizarMetodosInoculacion(e.target.value);
      actualizarRangosIncubacion(e.target.value);
      updateIncubacionMetricas();
    });
    actualizarMetodosInoculacion(hongoInput.value);
    actualizarRangosIncubacion(hongoInput.value);
    document.getElementById("tabIncubacion")?.addEventListener("click", () => {
      actualizarRangosIncubacion(hongoInput.value);
      updateIncubacionMetricas();
      refreshUnidadesTab();
    });
  }

  // ── FRUCTIFICACIÓN ──
  loadFlushes();

  // Auto-completar fecha de cosecha con hoy
  const fechaFlushEl = document.getElementById("fechaFlush");
  if (fechaFlushEl && !fechaFlushEl.value) fechaFlushEl.value = today;

  // Auto-completar primer flush número
  const flushNumeroEl = document.getElementById("flushNumero");
  if (flushNumeroEl && !flushNumeroEl.value) flushNumeroEl.value = 1;

  renderFlushList();
  calcularFructificacion();

  // Botones de exportación a Excel
  document.getElementById("btnExportarXLSX")?.addEventListener("click", exportarXLSX);
  document.getElementById("btnExportCSV")?.addEventListener("click", exportarXLSX);
  document.getElementById("btnExportarExcel")?.addEventListener("click", exportarXLSX);
  document.getElementById("btnExportJSON")?.addEventListener("click", exportarJSON);

  // Botón agregar flush
  document.getElementById("btnAgregarFlush")?.addEventListener("click", agregarFlush);

  // Recalcular al cambiar datos del lote
  ["pesoSeco", "rendimientoEsperado", "unidadesFruct", "fechaIngreso", "fechaPrimordios"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", calcularFructificacion);
  });

  // Checkboxes de pinning → semáforo
  ["pileoDeformado", "hongosSecos", "primordiosAborto", "pinLento", "pinUniforme", "primordiosSanos"].forEach(id => {
    document.getElementById(id)?.addEventListener("change", calcularFructificacion);
  });

  // Gauges sala de fructificación
  document.getElementById("tempFruct")?.addEventListener("input", () => {
    const rangos = getRangosFruct(document.getElementById("hongo")?.value || "");
    const v = parseFloat(document.getElementById("tempFruct").value);
    if (!isNaN(v)) updateGauge("tempFructGaugeBar", "tempFructGaugeLabel", v, rangos.tempMin, rangos.tempMax);
  });
  document.getElementById("hrFruct")?.addEventListener("input", () => {
    const rangos = getRangosFruct(document.getElementById("hongo")?.value || "");
    const v = parseFloat(document.getElementById("hrFruct").value);
    if (!isNaN(v)) updateGauge("hrFructGaugeBar", "hrFructGaugeLabel", v, rangos.hrMin, rangos.hrMax);
  });

  // Estado del lote
  document.getElementById("btnEstadoAgotado")?.addEventListener("click", () => {
    fructMeta.estado = "agotado";
    saveFlushes();
    calcularFructificacion();
    syncEstadoBotones();
  });
  document.getElementById("btnEstadoDescartado")?.addEventListener("click", () => {
    if (!confirm("¿Marcar este lote como descartado?")) return;
    fructMeta.estado = "descartado";
    saveFlushes();
    calcularFructificacion();
    syncEstadoBotones();
  });
  document.getElementById("btnEstadoActivo")?.addEventListener("click", () => {
    fructMeta.estado = "activo";
    saveFlushes();
    calcularFructificacion();
    syncEstadoBotones();
  });
  document.getElementById("flushesEsperados")?.addEventListener("input", (e) => {
    fructMeta.flushesEsperados = Number(e.target.value) || 0;
    saveFlushes();
    calcularFructificacion();
  });

  // Actualizar rangos al entrar a la pestaña
  document.getElementById("tabFructificacion")?.addEventListener("click", () => {
    const hongo = document.getElementById("hongo")?.value || "";
    actualizarRangosFruct(hongo);
    calcularFructificacion();
    renderFructUnidades();
    // Redibujar gráfico (canvas puede necesitar resize)
    setTimeout(() => renderFlushChart(activeBatch.fructificacion.flushes, activeBatch.fructificacion.totalKg), 50);
  });

  // Botón cosecha por unidad (fructificación)
  document.getElementById("btnGuardarFlushUnidad")?.addEventListener("click", guardarFlushUnidad);

  // Conectar hongo con rangos de fructificación
  document.getElementById("hongo")?.addEventListener("input", (e) => {
    actualizarRangosFruct(e.target.value);
  });

  syncEstadoBotones();

  // ── Unidades ──
  initUnidadesTab();

  // ── Estadísticas ──
  initEstadisticas();

  // ── PWA install button ──
  initPWAInstallBtn();

  // ── DEFAULT TAB ──
  showTab("lotes");
});

/* ========================= */
/* GESTIÓN DE LOTES          */
/* ========================= */

function renderBatchSelector() {
  const container = document.getElementById("batchSelectorContainer");
  if (!container) return;

  const all    = loadAllBatches();
  const ids    = Object.keys(all).sort((a, b) => {
    const da = all[a].createdAt || "";
    const db = all[b].createdAt || "";
    return db.localeCompare(da);
  });
  const active = getActiveBatchId();

  if (ids.length === 0) {
    container.innerHTML = `<p class="batch-empty-msg">No hay lotes creados aún. Usá el campo de arriba para crear el primero.</p>`;
    return;
  }

  container.innerHTML = ids.map(id => {
    const b = all[id];
    const flushes = b.fructificacion?.flushes || [];
    const totalKg = flushes.reduce((s, f) => s + (f.kg || 0), 0);
    const estado  = b.fructMeta?.estado || "activo";
    const estadoMap = { activo:"🟢", agotado:"✅", descartado:"⛔" };
    const icon    = estadoMap[estado] || "🟢";
    const fecha   = b.createdAt ? new Date(b.createdAt).toLocaleDateString("es-AR", { day:"2-digit", month:"2-digit", year:"numeric" }) : "";
    const isActive = id === active;

    return `
      <div class="batch-card ${isActive ? "batch-card--active" : ""}" data-batch-id="${id}">
        <div class="batch-card-top">
          <span class="batch-icon">${icon}</span>
          <span class="batch-id">${id}</span>
          ${isActive ? '<span class="batch-badge-active">ACTIVO</span>' : ""}
        </div>
        <div class="batch-card-meta">
          ${fecha ? `<span>📅 ${fecha}</span>` : ""}
          <span>🍄 ${flushes.length} flush${flushes.length !== 1 ? "es" : ""}</span>
          ${totalKg > 0 ? `<span>⚖ ${totalKg.toFixed(2)} kg</span>` : ""}
        </div>
        <div class="batch-card-actions">
          ${!isActive ? `<button type="button" class="btn-batch-select" data-batch-id="${id}">Seleccionar</button>` : ""}
          <button type="button" class="btn-batch-delete" data-batch-id="${id}" title="Eliminar lote">✕</button>
        </div>
      </div>`;
  }).join("");

  // Seleccionar lote
  container.querySelectorAll(".btn-batch-select").forEach(btn => {
    btn.addEventListener("click", () => switchBatch(btn.dataset.batchId));
  });

  // Click en la tarjeta también selecciona
  container.querySelectorAll(".batch-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.closest(".btn-batch-delete") || e.target.closest(".btn-batch-select")) return;
      switchBatch(card.dataset.batchId);
    });
  });

  // Eliminar lote
  container.querySelectorAll(".btn-batch-delete").forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      const id = btn.dataset.batchId;
      if (!confirm(`¿Eliminar el lote "${id}"? Se perderán todos sus datos.`)) return;
      const all = loadAllBatches();
      delete all[id];
      saveAllBatches(all);
      if (getActiveBatchId() === id) {
        const remaining = Object.keys(all);
        setActiveBatchId(remaining.length ? remaining[0] : "");
        loadBatchIntoUI();
      }
      renderBatchSelector();
    });
  });
}

function switchBatch(id) {
  setActiveBatchId(id);
  activeBatch.id = id;
  loadBatchIntoUI();
  renderBatchSelector();
  // feedback
  const banner = document.getElementById("batchActiveBanner");
  if (banner) {
    banner.textContent = `✔ Lote activo: ${id}`;
    banner.style.display = "block";
    setTimeout(() => { banner.style.display = "none"; }, 2000);
  }
}

function createNewBatch() {
  const input = document.getElementById("newBatchId");
  const id    = input?.value.trim();
  if (!id) { alert("Ingresá un ID para el nuevo lote."); return; }
  const all = loadAllBatches();
  if (all[id]) { alert(`Ya existe un lote con el ID "${id}".`); return; }

  all[id] = emptyBatchData(id);
  saveAllBatches(all);
  setActiveBatchId(id);
  activeBatch.id = id;
  if (input) input.value = "";

  loadBatchIntoUI();
  renderBatchSelector();

  const banner = document.getElementById("batchActiveBanner");
  if (banner) {
    banner.textContent = `✔ Nuevo lote creado: ${id}`;
    banner.style.display = "block";
    setTimeout(() => { banner.style.display = "none"; }, 2500);
  }
}

// Cargar datos del lote activo en todos los campos de UI
function loadBatchIntoUI() {
  const data = loadActiveBatchData();

  // Reset en memoria
  activeBatch.fructificacion.flushes = [];
  fructMeta.estado = "activo";
  fructMeta.flushesEsperados = 0;
  fructMeta.observacionCierre = "";
  incubControles = [];
  _lastPesoSeco = 0;

  if (data) {
    if (Array.isArray(data.fructificacion?.flushes))
      activeBatch.fructificacion.flushes = data.fructificacion.flushes;
    if (data.fructMeta) Object.assign(fructMeta, data.fructMeta);
    incubControles = data.incubacion?.controles || [];

    // Rellenar campos de inoculación
    const inoc = data.inoculacion || {};
    setField("loteId",           data.id || "");
    setField("numeroUnidades",    inoc.numeroUnidades   || "");
    setField("loteMicelio",       inoc.loteMicelio      || "");
    setField("cantidadMicelio",   inoc.cantidadMicelio  || "");
    setField("metodoInoculacion", inoc.metodo           || "");
    setField("ratioInoculo",      inoc.ratio            || "");
    if (inoc.unidadMicelio) {
      const sel = document.getElementById("unidadMicelio");
      if (sel) sel.value = inoc.unidadMicelio;
    }

    // Rellenar campos de incubación
    const incub = data.incubacion || {};
    setField("cantidadUnidadesIncubacion", incub.cantidadUnidades    || "");
    setField("pesoHumedoUnidad",           incub.pesoHumedoUnidad    || "");
    setField("fechaInicioIncubacion",      incub.fechaInicio         || "");
    setField("diasEstimadosColonizacion",  incub.diasEstimados       || "");
    setField("tempAmbiente",               incub.temp                || "");
    setField("humedadRelativa",            incub.hr                  || "");
    setField("bolsasContaminadas",         incub.bolsasContaminadas  || "");
    setField("descarteLote",               incub.descarteLote        || "");
    setField("diasColonizacionTotal",      incub.diasColonizacionTotal || "");
    setField("colonizacionEstimada",       incub.colonizacionEstimada || "");
    if (incub.ventilacion) {
      const sel = document.getElementById("ventilacionIncubacion");
      if (sel) sel.value = incub.ventilacion;
    }

    // Fructificación
    const fruct = data.fructificacion || {};
    setField("pesoSeco",           fruct.pesoSeco           || "");
    setField("rendimientoEsperado", fruct.rendimientoEsperado || "");
    setField("unidadesFruct",      fruct.unidadesFruct       || "");
    setField("fechaIngreso",       fruct.fechaIngreso        || "");
    setField("flushesEsperados",   data.fructMeta?.flushesEsperados || "");
    if (fruct.pesoSeco) _lastPesoSeco = Number(fruct.pesoSeco) || 0;
  }

  renderHistorialIncubacion();
  renderFlushList();
  calcularFructificacion();
  syncEstadoBotones();
  updateIncubacionMetricas();
  if (typeof renderFructUnidades === "function") renderFructUnidades();
  if (typeof refreshUnidadesTab === "function") refreshUnidadesTab();
  if (typeof renderEstadisticas === "function") renderEstadisticas();

  // Actualizar loteId header
  const loteIdBadge = document.getElementById("activeLoteIdBadge");
  if (loteIdBadge) loteIdBadge.textContent = getActiveBatchId() || "—";
}

function setField(id, val) {
  const el = document.getElementById(id);
  if (el) el.value = val;
}

// Persistir campos de inoculación al cambiar
function wireInoculacionPersist() {
  const fields = [
    ["loteId",           d => d.inoculacion.loteId          = document.getElementById("loteId")?.value.trim()],
    ["numeroUnidades",   d => d.inoculacion.numeroUnidades   = document.getElementById("numeroUnidades")?.value],
    ["loteMicelio",      d => d.inoculacion.loteMicelio      = document.getElementById("loteMicelio")?.value.trim()],
    ["cantidadMicelio",  d => d.inoculacion.cantidadMicelio  = document.getElementById("cantidadMicelio")?.value],
    ["unidadMicelio",    d => d.inoculacion.unidadMicelio    = document.getElementById("unidadMicelio")?.value],
    ["metodoInoculacion",d => d.inoculacion.metodo           = document.getElementById("metodoInoculacion")?.value.trim()],
    ["ratioInoculo",     d => d.inoculacion.ratio            = document.getElementById("ratioInoculo")?.value.trim()],
  ];
  fields.forEach(([id, updater]) => {
    document.getElementById(id)?.addEventListener("input", () => {
      const data = loadActiveBatchData();
      if (!data) return;
      if (!data.inoculacion) data.inoculacion = {};
      updater(data);
      saveActiveBatchData(data);
    });
  });
}

function wireIncubacionPersist() {
  const fields = [
    ["cantidadUnidadesIncubacion", (d, v) => d.incubacion.cantidadUnidades    = v],
    ["pesoHumedoUnidad",           (d, v) => d.incubacion.pesoHumedoUnidad    = v],
    ["fechaInicioIncubacion",      (d, v) => d.incubacion.fechaInicio         = v],
    ["diasEstimadosColonizacion",  (d, v) => d.incubacion.diasEstimados       = v],
    ["tempAmbiente",               (d, v) => d.incubacion.temp                = v],
    ["humedadRelativa",            (d, v) => d.incubacion.hr                  = v],
    ["bolsasContaminadas",         (d, v) => d.incubacion.bolsasContaminadas  = v],
    ["descarteLote",               (d, v) => d.incubacion.descarteLote        = v],
    ["diasColonizacionTotal",      (d, v) => d.incubacion.diasColonizacionTotal = v],
    ["colonizacionEstimada",       (d, v) => d.incubacion.colonizacionEstimada = v],
    ["ventilacionIncubacion",      (d, v) => d.incubacion.ventilacion         = v],
  ];
  fields.forEach(([id, updater]) => {
    document.getElementById(id)?.addEventListener("input", () => {
      const data = loadActiveBatchData();
      if (!data) return;
      if (!data.incubacion) data.incubacion = {};
      updater(data, document.getElementById(id)?.value);
      saveActiveBatchData(data);
    });
    document.getElementById(id)?.addEventListener("change", () => {
      const data = loadActiveBatchData();
      if (!data) return;
      if (!data.incubacion) data.incubacion = {};
      updater(data, document.getElementById(id)?.value);
      saveActiveBatchData(data);
    });
  });
}

function wireFructificacionPersist() {
  const fields = ["pesoSeco", "rendimientoEsperado", "unidadesFruct", "fechaIngreso", "fechaPrimordios"];
  fields.forEach(id => {
    document.getElementById(id)?.addEventListener("input", () => {
      const data = loadActiveBatchData();
      if (!data) return;
      if (!data.fructificacion) data.fructificacion = {};
      data.fructificacion[id] = document.getElementById(id)?.value;
      if (id === "pesoSeco") _lastPesoSeco = Number(document.getElementById(id)?.value) || _lastPesoSeco;
      saveActiveBatchData(data);
    });
  });
}

/* ========================= */
/* INIT BATCH MANAGER        */
/* ========================= */
function initBatchManager() {
  // Si no hay lote activo, crear uno por defecto vacío
  if (!getActiveBatchId()) {
    const id = "LOTE-001";
    const all = loadAllBatches();
    if (!all[id]) {
      all[id] = emptyBatchData(id);
      saveAllBatches(all);
    }
    setActiveBatchId(id);
  }
  activeBatch.id = getActiveBatchId();

  // Botón crear nuevo lote
  document.getElementById("btnCrearLote")?.addEventListener("click", createNewBatch);
  document.getElementById("newBatchId")?.addEventListener("keydown", (e) => {
    if (e.key === "Enter") createNewBatch();
  });

  // Wire persistencia
  wireInoculacionPersist();
  wireIncubacionPersist();
  wireFructificacionPersist();

  // Cargar UI con lote activo
  loadBatchIntoUI();

  // Render selector
  renderBatchSelector();
}

/* ===================================== */
/* UNIDADES — gestión por tarro/bolsa    */
/* ===================================== */

// ── Storage ──────────────────────────────────────────────────
function loadUnidades() {
  const data = loadActiveBatchData();
  return Array.isArray(data?.unidades) ? data.unidades : [];
}

function saveUnidades(list) {
  const data = loadActiveBatchData() || emptyBatchData(getActiveBatchId());
  data.unidades = list;
  saveActiveBatchData(data);
}

// ── Métricas resumen ─────────────────────────────────────────
function calcularMetricasUnidades(list) {
  if (list.length === 0) return null;

  const contaminadas = list.filter(u => u.contaminacion === "si").length;
  const pesoTotal    = list.reduce((s, u) => s + (Number(u.pesoInicial) || 0), 0);
  const kgTotal      = list.reduce((s, u) => s + totalFlushesUnidad(u), 0);
  const rendimiento  = pesoTotal > 0 ? (kgTotal / pesoTotal * 100) : 0;

  const conProduccion = list.filter(u => totalFlushesUnidad(u) > 0);
  const mejor = conProduccion.length
    ? conProduccion.reduce((a, b) => totalFlushesUnidad(b) > totalFlushesUnidad(a) ? b : a)
    : null;
  const promedio = conProduccion.length ? kgTotal / conProduccion.length : 0;

  return { contaminadas, pesoTotal, kgTotal, rendimiento, mejor, promedio };
}

function totalFlushesUnidad(u) {
  return (Number(u.f1) || 0) + (Number(u.f2) || 0) + (Number(u.f3) || 0);
}

function renderMetricasUnidades(list) {
  const el = document.getElementById("unidadesMetricas");
  const m  = calcularMetricasUnidades(list);
  if (!m || list.length === 0) { if (el) el.style.display = "none"; return; }
  if (el) el.style.display = "block";

  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  const pctCont = list.length > 0 ? (m.contaminadas / list.length * 100).toFixed(1) : "0";

  set("umTotal",       list.length);
  set("umContaminadas", m.contaminadas);
  set("umPctCont",     `${pctCont}%`);
  set("umPesoTotal",   m.pesoTotal > 0 ? `${m.pesoTotal.toFixed(2)} kg` : "—");
  set("umKgTotal",     m.kgTotal   > 0 ? `${m.kgTotal.toFixed(3)} kg`  : "—");
  set("umRendimiento", m.pesoTotal > 0 ? `${m.rendimiento.toFixed(1)}%` : "—");
  set("umMejor",       m.mejor ? `${m.mejor.numero} · ${totalFlushesUnidad(m.mejor).toFixed(3)} kg` : "—");
  set("umPromedio",    m.promedio > 0 ? `${m.promedio.toFixed(3)} kg` : "—");
}

function renderUnidadesTabla(list, filtro = "") {
  const tbody   = document.getElementById("unidadesTbody");
  const emptyEl = document.getElementById("unidadesEmptyMsg");
  const table   = document.getElementById("unidadesTable");
  if (!tbody) return;

  const f = filtro.trim().toLowerCase();
  const visible = f
    ? list.filter(u =>
        (u.numero || "").toLowerCase().includes(f) ||
        (u.obs    || "").toLowerCase().includes(f))
    : list;

  if (list.length === 0) {
    tbody.innerHTML = "";
    if (emptyEl) emptyEl.style.display = "block";
    if (table)   table.style.display   = "none";
    return;
  }
  if (emptyEl) emptyEl.style.display = "none";
  if (table)   table.style.display   = "";

  tbody.innerHTML = visible.map((u) => {
    const realIdx  = list.indexOf(u);
    const contTag  = u.contaminacion === "si"
      ? `<span class="u-cont-badge u-cont-si">🔴</span>`
      : `<span class="u-cont-badge u-cont-no">✅</span>`;

    return `<tr class="${u.contaminacion === 'si' ? 'u-row-cont' : ''}">
      <td class="u-td-num">${u.numero || "—"}</td>
      <td>${u.pesoInicial ? Number(u.pesoInicial).toFixed(2) : "—"}</td>
      <td>${contTag}</td>
      <td>${u.contaminacion === "si" && u.contPct ? u.contPct + "%" : "—"}</td>
      <td class="u-td-obs">${u.obs || ""}</td>
      <td>
        <button class="action-btn u-btn-edit" data-idx="${realIdx}" title="Editar">✏</button>
        <button class="action-btn u-btn-del"  data-idx="${realIdx}" title="Eliminar">✕</button>
      </td>
    </tr>`;
  }).join("");

  // Edit
  tbody.querySelectorAll(".u-btn-edit").forEach(btn => {
    btn.addEventListener("click", () => {
      const u = list[Number(btn.dataset.idx)];
      if (!u) return;
      document.getElementById("uNumero").value        = u.numero       || "";
      document.getElementById("uPesoInicial").value   = u.pesoInicial  || "";
      document.getElementById("uContaminacion").value = u.contaminacion || "no";
      document.getElementById("uContPct").value       = u.contPct      || "";
      document.getElementById("uObs").value           = u.obs          || "";
      syncContPctVisibility();
      document.getElementById("btnGuardarUnidad").dataset.editIdx = btn.dataset.idx;
      document.getElementById("btnGuardarUnidad").textContent = "💾 Actualizar unidad";
      document.getElementById("uNumero").focus();
    });
  });

  // Delete
  tbody.querySelectorAll(".u-btn-del").forEach(btn => {
    btn.addEventListener("click", () => {
      if (!confirm("¿Eliminar esta unidad?")) return;
      list.splice(Number(btn.dataset.idx), 1);
      saveUnidades(list);
      renderUnidadesTabla(list, document.getElementById("uFiltro")?.value || "");
      renderMetricasUnidades(list);
    });
  });
}

// ── Guardar unidad ────────────────────────────────────────────
function guardarUnidad() {
  const numero       = document.getElementById("uNumero")?.value.trim();
  const pesoInicial  = document.getElementById("uPesoInicial")?.value;
  const contaminacion= document.getElementById("uContaminacion")?.value || "no";
  const contPct      = document.getElementById("uContPct")?.value;
  const obs          = document.getElementById("uObs")?.value.trim();

  if (!numero) { alert("Ingresá un número o identificador para la unidad."); return; }

  const list = loadUnidades();
  const btn  = document.getElementById("btnGuardarUnidad");
  const editIdx = btn?.dataset.editIdx !== undefined && btn.dataset.editIdx !== ""
    ? Number(btn.dataset.editIdx) : -1;

  const entry = {
    numero,
    pesoInicial: Number(pesoInicial) || 0,
    f1: editIdx >= 0 ? (list[editIdx]?.f1 || 0) : 0,
    f2: editIdx >= 0 ? (list[editIdx]?.f2 || 0) : 0,
    f3: editIdx >= 0 ? (list[editIdx]?.f3 || 0) : 0,
    contaminacion, contPct: Number(contPct) || 0, obs
  };

  if (editIdx >= 0 && editIdx < list.length) {
    list[editIdx] = entry;
  } else {
    const dup = list.findIndex(u => u.numero === numero);
    if (dup >= 0) {
      if (!confirm(`Ya existe la unidad "${numero}". ¿Sobreescribir?`)) return;
      // Preserve existing flushes on overwrite
      entry.f1 = list[dup].f1 || 0;
      entry.f2 = list[dup].f2 || 0;
      entry.f3 = list[dup].f3 || 0;
      list[dup] = entry;
    } else {
      list.push(entry);
      list.sort((a, b) => a.numero.localeCompare(b.numero, undefined, { numeric: true }));
    }
  }

  saveUnidades(list);
  limpiarFormUnidad();
  renderUnidadesTabla(list, document.getElementById("uFiltro")?.value || "");
  renderMetricasUnidades(list);

  if (btn) {
    btn.textContent = "✔ Guardado";
    btn.style.background = "#3a5c0a";
    setTimeout(() => { btn.textContent = "+ Guardar unidad"; btn.style.background = ""; }, 1400);
  }
}

function limpiarFormUnidad() {
  ["uNumero","uPesoInicial","uContPct","uObs"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  const sel = document.getElementById("uContaminacion");
  if (sel) sel.value = "no";
  syncContPctVisibility();
  const btn = document.getElementById("btnGuardarUnidad");
  if (btn) { delete btn.dataset.editIdx; btn.textContent = "+ Guardar unidad"; }
}

function syncContPctVisibility() {
  const val  = document.getElementById("uContaminacion")?.value;
  const wrap = document.getElementById("uPctWrap");
  if (wrap) wrap.style.display = val === "si" ? "flex" : "none";
}

// ── Exportar XLSX ──────────────────────────────────────────────
function exportarUnidadesXLSX() {
  const list   = loadUnidades();
  const loteId = getActiveBatchId() || "lote";
  if (list.length === 0) { alert("No hay unidades para exportar."); return; }

  // Cargar SheetJS dinámicamente si no está disponible
  function doExport() {
    const XLSX = window.XLSX;

    const headers = ["N° Unidad","Peso inicial (kg)","Flush 1 (kg)","Flush 2 (kg)","Flush 3 (kg)",
                     "Total cosechado (kg)","Rendimiento bio. (%)","Contaminación","% Contam.","Observaciones"];

    const dataRows = list.map(u => {
      const total = totalFlushesUnidad(u);
      const rb    = u.pesoInicial > 0 ? parseFloat((total / u.pesoInicial * 100).toFixed(1)) : "";
      return [
        u.numero,
        u.pesoInicial || "",
        u.f1 || "",
        u.f2 || "",
        u.f3 || "",
        parseFloat(total.toFixed(3)),
        rb,
        u.contaminacion === "si" ? "Sí" : "No",
        u.contaminacion === "si" ? (u.contPct || "") : "",
        u.obs || "",
      ];
    });

    const wsData = [headers, ...dataRows];
    const ws = XLSX.utils.aoa_to_sheet(wsData);

    // Ancho de columnas automático
    ws["!cols"] = headers.map((h, i) => {
      const maxLen = Math.max(h.length, ...dataRows.map(r => String(r[i] ?? "").length));
      return { wch: Math.min(maxLen + 2, 30) };
    });

    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Unidades");

    const filename = `unidades_${loteId}_${new Date().toISOString().slice(0,10)}.xlsx`;
    XLSX.writeFile(wb, filename);
  }

  if (window.XLSX) {
    doExport();
  } else {
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
    script.onload = doExport;
    script.onerror = () => alert("No se pudo cargar la librería de exportación. Verificá tu conexión.");
    document.head.appendChild(script);
  }
}

// ── Init unidades (integradas en incubación) ──────────────────
function initUnidadesTab() {
  document.getElementById("btnGuardarUnidad")?.addEventListener("click", guardarUnidad);
  document.getElementById("btnLimpiarUnidad")?.addEventListener("click", limpiarFormUnidad);
  document.getElementById("btnExportUnidades")?.addEventListener("click", exportarUnidadesXLSX);
  document.getElementById("uContaminacion")?.addEventListener("change", syncContPctVisibility);
  document.getElementById("uFiltro")?.addEventListener("input", () => {
    const list = loadUnidades();
    renderUnidadesTabla(list, document.getElementById("uFiltro").value);
  });
  refreshUnidadesTab();
}

function refreshUnidadesTab() {
  const list = loadUnidades();
  renderUnidadesTabla(list, document.getElementById("uFiltro")?.value || "");
  renderMetricasUnidades(list);
  syncContPctVisibility();
}

/* ===================================== */
/* FRUCTIFICACIÓN — COSECHA POR UNIDAD   */
/* ===================================== */

function renderFructUnidades() {
  const list   = loadUnidades();
  const tbody  = document.getElementById("fructUnidadesTbody");
  const emptyEl= document.getElementById("fructUnidadesEmptyMsg");
  const table  = document.getElementById("fructUnidadesTable");
  const metrics= document.getElementById("fructUnidadesMetricas");
  if (!tbody) return;

  const conFlush = list.filter(u => u.f1 || u.f2 || u.f3);

  if (conFlush.length === 0) {
    tbody.innerHTML = "";
    if (table)  table.style.display  = "none";
    if (emptyEl) emptyEl.style.display = "block";
    if (metrics) metrics.style.display = "none";
    return;
  }
  if (table)  table.style.display  = "";
  if (emptyEl) emptyEl.style.display = "none";
  if (metrics) metrics.style.display = "block";

  // Métricas
  const kgTotal   = list.reduce((s, u) => s + totalFlushesUnidad(u), 0);
  const pesoTotal = list.reduce((s, u) => s + (Number(u.pesoInicial) || 0), 0);
  const rend      = pesoTotal > 0 ? (kgTotal / pesoTotal * 100).toFixed(1) : "—";
  const mejor     = conFlush.reduce((a, b) => totalFlushesUnidad(b) > totalFlushesUnidad(a) ? b : a);
  const promedio  = conFlush.length > 0 ? kgTotal / conFlush.length : 0;

  const set = (id, v) => { const e = document.getElementById(id); if (e) e.textContent = v; };
  set("fuKgTotal",   kgTotal   > 0 ? kgTotal.toFixed(3) + " kg" : "—");
  set("fuRendimiento", rend !== "—" ? rend + "%" : "—");
  set("fuMejor",     mejor ? `${mejor.numero} · ${totalFlushesUnidad(mejor).toFixed(3)} kg` : "—");
  set("fuPromedio",  promedio > 0 ? promedio.toFixed(3) + " kg" : "—");

  tbody.innerHTML = list.map((u, idx) => {
    const total  = totalFlushesUnidad(u);
    const rb     = u.pesoInicial > 0 ? (total / u.pesoInicial * 100).toFixed(1) : "—";
    const rbCol  = rb === "—" ? "" : Number(rb) >= 60 ? "style='color:var(--accent)'" : Number(rb) >= 30 ? "style='color:var(--accent3)'" : "style='color:var(--danger)'";
    return `<tr>
      <td class="u-td-num">${u.numero || "—"}</td>
      <td class="u-td-flush">${u.f1 ? Number(u.f1).toFixed(3) : "—"}</td>
      <td class="u-td-flush">${u.f2 ? Number(u.f2).toFixed(3) : "—"}</td>
      <td class="u-td-flush">${u.f3 ? Number(u.f3).toFixed(3) : "—"}</td>
      <td class="u-td-total">${total > 0 ? total.toFixed(3) : "—"}</td>
      <td ${rbCol}>${rb !== "—" ? rb + "%" : "—"}</td>
      <td>
        <button class="action-btn fu-btn-edit" data-idx="${idx}" title="Editar flushes">✏</button>
      </td>
    </tr>`;
  }).join("");

  // Bind edit buttons — carga datos en el formulario de cosecha por unidad
  tbody.querySelectorAll(".fu-btn-edit").forEach(btn => {
    btn.addEventListener("click", () => {
      const u = list[Number(btn.dataset.idx)];
      if (!u) return;
      const numEl = document.getElementById("uFructNumero");
      if (numEl) numEl.value = u.numero || "";
      const f1El = document.getElementById("uF1");
      const f2El = document.getElementById("uF2");
      const f3El = document.getElementById("uF3");
      if (f1El) f1El.value = u.f1 || "";
      if (f2El) f2El.value = u.f2 || "";
      if (f3El) f3El.value = u.f3 || "";
      const saveBtn = document.getElementById("btnGuardarFlushUnidad");
      if (saveBtn) { saveBtn.dataset.editIdx = btn.dataset.idx; saveBtn.textContent = "💾 Actualizar flushes"; }
      numEl?.focus();
    });
  });
}

function guardarFlushUnidad() {
  const numero = document.getElementById("uFructNumero")?.value.trim();
  const f1 = parseFloat(document.getElementById("uF1")?.value) || 0;
  const f2 = parseFloat(document.getElementById("uF2")?.value) || 0;
  const f3 = parseFloat(document.getElementById("uF3")?.value) || 0;

  if (!numero) { alert("Ingresá el N° de tarro/bolsa."); return; }

  const list = loadUnidades();
  const saveBtn = document.getElementById("btnGuardarFlushUnidad");
  const editIdx = saveBtn?.dataset.editIdx !== undefined && saveBtn.dataset.editIdx !== ""
    ? Number(saveBtn.dataset.editIdx) : -1;

  let targetIdx = editIdx >= 0 ? editIdx : list.findIndex(u => u.numero === numero);

  if (targetIdx < 0) {
    // Crear unidad nueva si no existe
    list.push({ numero, pesoInicial: 0, f1, f2, f3, contaminacion: "no", contPct: 0, obs: "" });
    list.sort((a, b) => a.numero.localeCompare(b.numero, undefined, { numeric: true }));
  } else {
    list[targetIdx] = { ...list[targetIdx], f1, f2, f3 };
  }

  saveUnidades(list);
  renderFructUnidades();
  calcularFructificacion();

  // Limpiar form
  ["uFructNumero","uF1","uF2","uF3"].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = "";
  });
  if (saveBtn) { delete saveBtn.dataset.editIdx; saveBtn.textContent = "+ Guardar cosecha de unidad"; }

  if (saveBtn) {
    saveBtn.textContent = "✔ Guardado";
    saveBtn.style.background = "#3a5c0a";
    setTimeout(() => { saveBtn.textContent = "+ Guardar cosecha de unidad"; saveBtn.style.background = ""; }, 1400);
  }
}

/* ===================================== */
/* ESTADÍSTICAS COMPARATIVAS             */
/* ===================================== */

function calcularEstadisticas() {
  const all     = loadAllBatches();
  const ids     = Object.keys(all);
  const entries = loadEntries(); // registros de preparación

  if (ids.length === 0) return null;

  // ── Por lote: rendimiento biológico, flushes, unidades ──────
  const loteStats = ids.map(id => {
    const b       = all[id];
    const flushes = b.fructificacion?.flushes || [];
    const totalKg = flushes.reduce((s, f) => s + (f.kg || 0), 0);
    const pesoSeco = Number(b.fructificacion?.pesoSeco) || 0;
    const rb       = pesoSeco > 0 ? (totalKg / pesoSeco * 100) : 0;
    const unidades = Array.isArray(b.unidades) ? b.unidades : [];
    const contaminadas = unidades.filter(u => u.contaminacion === "si").length;
    const pctCont  = unidades.length > 0 ? (contaminadas / unidades.length * 100) : 0;
    const estado   = b.fructMeta?.estado || "activo";
    const hongo    = b.inoculacion?.hongo || "";
    const cepa     = b.inoculacion?.cepa  || "";
    const sustrato = b.inoculacion?.sustrato || "";
    const createdAt = b.createdAt || "";
    return { id, totalKg, pesoSeco, rb, flushes: flushes.length,
             unidades: unidades.length, contaminadas, pctCont,
             estado, hongo, cepa, sustrato, createdAt };
  });

  // ── Por cepa (desde preparación entries) ─────────────────────
  const cepas = {};
  entries.forEach(e => {
    const cepa = (e.cepa || "").trim() || "Sin cepa";
    if (!cepas[cepa]) cepas[cepa] = { cepa, lotes: 0, pesoTotal: 0, kgTotal: 0, entradas: 0 };
    cepas[cepa].entradas++;
    const sustratos = Array.isArray(e.sustratos) ? e.sustratos : [];
    const peso = sustratos.reduce((s, x) => s + (Number(x.pesoSeco) || 0), 0) || Number(e.pesoSeco) || 0;
    cepas[cepa].pesoTotal += peso;
  });
  // Enriquecer cepas con producción de lotes que tengan esa cepa
  loteStats.forEach(ls => {
    // buscar entradas de preparación con esa cepa
    const match = entries.find(e => (e.cepa||"").trim() === ls.cepa);
    if (match && ls.cepa) {
      const key = ls.cepa || "Sin cepa";
      if (!cepas[key]) cepas[key] = { cepa: key, lotes: 0, pesoTotal: 0, kgTotal: 0, entradas: 0 };
      cepas[key].lotes++;
      cepas[key].kgTotal += ls.totalKg;
    }
  });

  // ── Por sustrato ──────────────────────────────────────────────
  const sustratos = {};
  entries.forEach(e => {
    const ss = Array.isArray(e.sustratos) ? e.sustratos : [{ tipoSustrato: e.tipoSustrato }];
    ss.forEach(s => {
      const nombre = (s.tipoSustrato || "").trim() || "Sin sustrato";
      if (!sustratos[nombre]) sustratos[nombre] = { nombre, entradas: 0, pesoTotal: 0 };
      sustratos[nombre].entradas++;
      sustratos[nombre].pesoTotal += Number(s.pesoSeco) || 0;
    });
  });

  // ── Por hongo ─────────────────────────────────────────────────
  const hongos = {};
  entries.forEach(e => {
    const h = (e.hongo || "").trim() || "Sin hongo";
    if (!hongos[h]) hongos[h] = { hongo: h, entradas: 0, pesoTotal: 0 };
    hongos[h].entradas++;
    const ss = Array.isArray(e.sustratos) ? e.sustratos : [];
    hongos[h].pesoTotal += ss.reduce((s, x) => s + (Number(x.pesoSeco) || 0), 0) || Number(e.pesoSeco) || 0;
  });
  // Enriquecer con producción real
  loteStats.forEach(ls => {
    const h = (ls.hongo || "").trim();
    if (h && hongos[h]) {
      hongos[h].kgTotal = (hongos[h].kgTotal || 0) + ls.totalKg;
      hongos[h].lotes   = (hongos[h].lotes   || 0) + 1;
    }
  });

  // ── Totales globales ──────────────────────────────────────────
  const totalKgGlobal  = loteStats.reduce((s, l) => s + l.totalKg, 0);
  const lotesActivos   = loteStats.filter(l => l.estado === "activo").length;
  const lotesAgotados  = loteStats.filter(l => l.estado === "agotado").length;
  const mejorLote      = loteStats.filter(l => l.rb > 0).sort((a, b) => b.rb - a.rb)[0] || null;
  const mayorProduccion= loteStats.filter(l => l.totalKg > 0).sort((a, b) => b.totalKg - a.totalKg)[0] || null;
  const rbPromedio     = loteStats.filter(l => l.rb > 0).reduce((s, l, _, a) => s + l.rb / a.length, 0);
  const contPctGlobal  = loteStats.reduce((s, l) => s + l.pctCont, 0) /
                         (loteStats.filter(l => l.unidades > 0).length || 1);

  return {
    loteStats,
    cepas: Object.values(cepas).sort((a, b) => b.kgTotal - a.kgTotal),
    sustratos: Object.values(sustratos).sort((a, b) => b.entradas - a.entradas),
    hongos: Object.values(hongos).sort((a, b) => (b.kgTotal || 0) - (a.kgTotal || 0)),
    totales: { totalKgGlobal, lotesActivos, lotesAgotados, mejorLote,
               mayorProduccion, rbPromedio, contPctGlobal, totalLotes: ids.length },
  };
}

/* ── Render ─────────────────────────────────────────────────── */
function renderEstadisticas() {
  const stats = calcularEstadisticas();
  const cont  = document.getElementById("statsContainer");
  if (!cont) return;

  if (!stats || stats.loteStats.length === 0) {
    cont.innerHTML = `<div class="stats-empty">
      <span class="stats-empty-icon">📊</span>
      <p>Todavía no hay datos para comparar.<br>Creá al menos un lote con producción registrada.</p>
    </div>`;
    return;
  }

  const { totales, loteStats, cepas, sustratos, hongos } = stats;
  const fmt = (n, dec = 2) => Number(n).toFixed(dec);
  const pct = n => `${fmt(n, 1)}%`;

  cont.innerHTML = `

    <!-- ══ TOTALES GLOBALES ══ -->
    <div class="stats-section">
      <div class="stats-section-title">🌐 Resumen global</div>
      <div class="stats-kpi-grid">
        <div class="stats-kpi">
          <div class="stats-kpi-val">${totales.totalLotes}</div>
          <div class="stats-kpi-label">Lotes totales</div>
        </div>
        <div class="stats-kpi">
          <div class="stats-kpi-val stats-green">${totales.lotesActivos}</div>
          <div class="stats-kpi-label">Activos</div>
        </div>
        <div class="stats-kpi">
          <div class="stats-kpi-val stats-cyan">${totales.lotesAgotados}</div>
          <div class="stats-kpi-label">Agotados</div>
        </div>
        <div class="stats-kpi">
          <div class="stats-kpi-val stats-green">${fmt(totales.totalKgGlobal)} kg</div>
          <div class="stats-kpi-label">Producción total</div>
        </div>
        <div class="stats-kpi">
          <div class="stats-kpi-val ${totales.rbPromedio >= 50 ? 'stats-green' : totales.rbPromedio > 0 ? 'stats-yellow' : ''}">${totales.rbPromedio > 0 ? pct(totales.rbPromedio) : '—'}</div>
          <div class="stats-kpi-label">RB promedio</div>
        </div>
        <div class="stats-kpi">
          <div class="stats-kpi-val ${totales.contPctGlobal >= 15 ? 'stats-red' : totales.contPctGlobal > 0 ? 'stats-yellow' : 'stats-green'}">${totales.contPctGlobal > 0 ? pct(totales.contPctGlobal) : '0%'}</div>
          <div class="stats-kpi-label">Contam. promedio</div>
        </div>
      </div>
      ${totales.mejorLote ? `
      <div class="stats-highlight-row">
        <div class="stats-highlight">
          <span class="stats-hl-icon">🏆</span>
          <span class="stats-hl-text">Mejor rendimiento: <strong>${totales.mejorLote.id}</strong> — ${pct(totales.mejorLote.rb)} RB</span>
        </div>
        ${totales.mayorProduccion ? `
        <div class="stats-highlight">
          <span class="stats-hl-icon">⚖</span>
          <span class="stats-hl-text">Mayor producción: <strong>${totales.mayorProduccion.id}</strong> — ${fmt(totales.mayorProduccion.totalKg)} kg</span>
        </div>` : ''}
      </div>` : ''}
    </div>

    <!-- ══ COMPARATIVA POR LOTE ══ -->
    <div class="stats-section">
      <div class="stats-section-title">📋 Comparativa por lote</div>
      <div class="stats-table-wrap">
        <table class="stats-table">
          <thead>
            <tr>
              <th>Lote</th>
              <th>Estado</th>
              <th>Flushes</th>
              <th>Kg totales</th>
              <th>Peso seco</th>
              <th>RB %</th>
              <th>Unidades</th>
              <th>% Contam.</th>
            </tr>
          </thead>
          <tbody>
            ${loteStats.sort((a, b) => b.rb - a.rb).map(l => {
              const rbCol = l.rb >= 60 ? 'stats-green' : l.rb >= 30 ? 'stats-yellow' : l.rb > 0 ? 'stats-red' : '';
              const contCol = l.pctCont >= 15 ? 'stats-red' : l.pctCont > 0 ? 'stats-yellow' : 'stats-green';
              const estadoMap = { activo:'🟢', agotado:'✅', descartado:'⛔' };
              return `<tr>
                <td class="stats-td-id">${l.id}</td>
                <td>${estadoMap[l.estado] || '🟢'} ${l.estado}</td>
                <td>${l.flushes || '—'}</td>
                <td>${l.totalKg > 0 ? fmt(l.totalKg) + ' kg' : '—'}</td>
                <td>${l.pesoSeco > 0 ? fmt(l.pesoSeco) + ' kg' : '—'}</td>
                <td class="${rbCol}">${l.rb > 0 ? pct(l.rb) : '—'}</td>
                <td>${l.unidades || '—'}</td>
                <td class="${l.unidades > 0 ? contCol : ''}">${l.unidades > 0 ? pct(l.pctCont) : '—'}</td>
              </tr>`;
            }).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- ══ POR HONGO ══ -->
    ${hongos.length > 0 ? `
    <div class="stats-section">
      <div class="stats-section-title">🍄 Rendimiento por hongo</div>
      <div class="stats-bar-list">
        ${hongos.filter(h => h.entradas > 0).map(h => {
          const maxKg = Math.max(...hongos.map(x => x.kgTotal || 0), 0.01);
          const pctBar = maxKg > 0 ? Math.min(100, ((h.kgTotal || 0) / maxKg * 100)) : 0;
          return `
          <div class="stats-bar-row">
            <div class="stats-bar-label">${h.hongo}</div>
            <div class="stats-bar-wrap">
              <div class="stats-bar-fill stats-bar-green" style="width:${pctBar}%"></div>
            </div>
            <div class="stats-bar-meta">
              ${h.entradas} preparación${h.entradas !== 1 ? 'es' : ''}
              ${h.kgTotal > 0 ? ` · ${fmt(h.kgTotal)} kg cosechados` : ''}
              ${h.pesoTotal > 0 ? ` · ${fmt(h.pesoTotal)} kg sustrato` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>` : ''}

    <!-- ══ POR CEPA ══ -->
    ${cepas.length > 0 ? `
    <div class="stats-section">
      <div class="stats-section-title">🧬 Rendimiento por cepa</div>
      <div class="stats-bar-list">
        ${cepas.filter(c => c.entradas > 0 || c.kgTotal > 0).map(c => {
          const maxKg = Math.max(...cepas.map(x => x.kgTotal || 0), 0.01);
          const pctBar = Math.min(100, ((c.kgTotal || 0) / maxKg * 100));
          const rb = c.pesoTotal > 0 && c.kgTotal > 0
            ? (c.kgTotal / c.pesoTotal * 100).toFixed(1) : null;
          return `
          <div class="stats-bar-row">
            <div class="stats-bar-label">${c.cepa}</div>
            <div class="stats-bar-wrap">
              <div class="stats-bar-fill stats-bar-cyan" style="width:${pctBar}%"></div>
            </div>
            <div class="stats-bar-meta">
              ${c.entradas} preparación${c.entradas !== 1 ? 'es' : ''}
              ${c.kgTotal > 0 ? ` · ${fmt(c.kgTotal)} kg cosechados` : ''}
              ${rb ? ` · RB ${rb}%` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>` : ''}

    <!-- ══ POR SUSTRATO ══ -->
    ${sustratos.length > 0 ? `
    <div class="stats-section">
      <div class="stats-section-title">🌾 Uso de sustratos</div>
      <div class="stats-bar-list">
        ${sustratos.map(s => {
          const maxE = Math.max(...sustratos.map(x => x.entradas), 1);
          const pctBar = Math.min(100, (s.entradas / maxE * 100));
          return `
          <div class="stats-bar-row">
            <div class="stats-bar-label">${s.nombre}</div>
            <div class="stats-bar-wrap">
              <div class="stats-bar-fill stats-bar-yellow" style="width:${pctBar}%"></div>
            </div>
            <div class="stats-bar-meta">
              ${s.entradas} uso${s.entradas !== 1 ? 's' : ''}
              ${s.pesoTotal > 0 ? ` · ${fmt(s.pesoTotal)} kg total` : ''}
            </div>
          </div>`;
        }).join('')}
      </div>
    </div>` : ''}

  `;
}

function initEstadisticas() {
  document.getElementById("tabEstadisticas")
    ?.addEventListener("click", renderEstadisticas);
  renderEstadisticas();
}
