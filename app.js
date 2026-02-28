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
const STORAGE_KEY = "hongosEntries";
const TAB_KEYS = ["calculadora", "preparacion", "inoculacion", "incubacion", "fructificacion"];

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

/* ========================= */
/* CALCULADORA - PASTEURIZACIÓN */
/* ========================= */
function calcularPasteurizacion() {
  const paja = Number(document.getElementById("paja").value) || 0;
  const avenaPct = Number(document.getElementById("avenaPct").value) || 0;
  const aguaKg = Number(document.getElementById("aguaKg").value) || 0;
  const yesoPct = Number(document.getElementById("yesoPct").value) || 0;
  const calPct = Number(document.getElementById("calPct").value) || 0;
  const capTarro = Number(document.getElementById("capTarro").value) || 0;
  const densidad = Number(document.getElementById("densidad").value) || 0;

  const avenaKg = paja * (avenaPct / 100);
  const aguaLitros = paja * aguaKg;
  const yesoKg = paja * (yesoPct / 100);
  const calKg = paja * (calPct / 100);
  const mezclaKg = paja + avenaKg + yesoKg + calKg;
  const volumenLitros = densidad > 0 ? mezclaKg / densidad : 0;
  const tarros = capTarro > 0 ? volumenLitros / capTarro : 0;

  document.getElementById("resultadoPasteurizacion").innerHTML = `
    <h3>Resultado</h3>
    <p><span>Avena</span><strong>${avenaKg.toFixed(2)} kg</strong></p>
    <p><span>Agua</span><strong>${aguaLitros.toFixed(2)} L</strong></p>
    <p><span>Yeso</span><strong>${yesoKg.toFixed(2)} kg</strong></p>
    <p><span>Carbonato</span><strong>${calKg.toFixed(2)} kg</strong></p>
    <p><span>Mezcla estimada</span><strong>${mezclaKg.toFixed(2)} kg</strong></p>
    <p><span>Volumen estimado</span><strong>${volumenLitros.toFixed(2)} L</strong></p>
    <p><span>Tarros estimados</span><strong>${Math.ceil(tarros)}</strong></p>
  `;
}

/* ========================= */
/* CALCULADORA - ALCALINA    */
/* ========================= */
function calcularEncalado() {
  const cantidadTarros = Number(document.getElementById("tarrosEncalado").value) || 0;
  const volumenPorTarro = Number(document.getElementById("volumenTarroEncalado").value) || 0;
  const spawnPct = Number(document.getElementById("spawnEncaladoPct").value) || 0;
  const aguaEncalado = Number(document.getElementById("aguaEncalado").value) || 0;
  const gramosCalLitro = Number(document.getElementById("gramosCalLitro").value) || 0;

  const volumenTotalSustrato = cantidadTarros * volumenPorTarro;
  const spawnNecesarioKg = volumenTotalSustrato * (spawnPct / 100);
  const calNecesariaKg = (aguaEncalado * gramosCalLitro) / 1000;
  const produccionMinKg = volumenTotalSustrato * 0.1;
  const produccionMaxKg = volumenTotalSustrato * 0.2;

  document.getElementById("resultadoEncalado").innerHTML = `
    <h3>Resultados automáticos</h3>
    <p><span>Volumen total sustrato</span><strong>${volumenTotalSustrato.toFixed(2)} L</strong></p>
    <p><span>Spawn necesario (aprox)</span><strong>${spawnNecesarioKg.toFixed(2)} kg</strong></p>
    <p><span>Cal necesaria</span><strong>${calNecesariaKg.toFixed(2)} kg</strong></p>
    <p><span>Producción mínima estimada</span><strong>${produccionMinKg.toFixed(2)} kg</strong></p>
    <p><span>Producción máxima estimada</span><strong>${produccionMaxKg.toFixed(2)} kg</strong></p>
  `;
}

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
const FRUCT_KEY     = "hongosFlushes";
const FRUCT_META_KEY = "hongosFructMeta";
let _lastPesoSeco = 0;

// Estado del lote
const fructMeta = { estado: "activo", flushesEsperados: 0, observacionCierre: "" };

function loadFlushes() {
  try {
    const saved = localStorage.getItem(FRUCT_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (Array.isArray(parsed)) activeBatch.fructificacion.flushes = parsed;
    }
    const meta = localStorage.getItem(FRUCT_META_KEY);
    if (meta) Object.assign(fructMeta, JSON.parse(meta));
  } catch {}
  if (!Array.isArray(activeBatch.fructificacion.flushes)) activeBatch.fructificacion.flushes = [];
}

function saveFlushes() {
  localStorage.setItem(FRUCT_KEY, JSON.stringify(activeBatch.fructificacion.flushes));
  localStorage.setItem(FRUCT_META_KEY, JSON.stringify(fructMeta));
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
    "Premium": "#4ade80",
    "Estándar": "#22d3ee",
    "Descarte parcial": "#f59e0b",
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
    btn.style.background = "#166534";
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
        <input type="text" name="tipoSustrato" placeholder="Paja de trigo" list="sustratos-list" required autocomplete="off" />
      </label>
      <label>Peso Seco (kg)<input type="number" name="pesoSeco" min="0" step="0.01" placeholder="10" required /></label>
    </div>
    <label class="full">Nutrientes Adicionales
      <input type="text" name="nutrientes" placeholder="Salvado de trigo, yeso" list="nutrientes-list" autocomplete="off" />
    </label>
  `;
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

function renderEntries(entries, tableBody, totalEl) {
  tableBody.innerHTML = "";
  entries.forEach((entry, index) => {
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
      <td><button type="button" class="action-btn" data-index="${index}">✕</button></td>
    `;
    tableBody.appendChild(row);
  });

  if (totalEl) totalEl.textContent = `Entradas: ${entries.length}`;
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
const INCUB_KEY = "hongosIncubacionControles";
let incubControles = [];

function loadIncubControles() {
  try {
    const saved = localStorage.getItem(INCUB_KEY);
    if (saved) incubControles = JSON.parse(saved) || [];
  } catch { incubControles = []; }
}

function saveIncubControles() {
  localStorage.setItem(INCUB_KEY, JSON.stringify(incubControles));
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
    btn.style.background = "#166534";
    setTimeout(() => { btn.textContent = orig; btn.style.background = ""; }, 1500);
  }
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
  const form = document.getElementById("entryForm");
  const clearBtn = document.getElementById("clearBtn");
  const addSustratoBtn = document.getElementById("addSustratoBtn");
  const sustratosContainer = document.getElementById("sustratosContainer");
  const tableBody = document.querySelector("#entriesTable tbody");
  const totalEl = document.getElementById("totalEntradas");

  if (form && tableBody) {
    let entries = loadEntries();
    renderEntries(entries, tableBody, totalEl);

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
      renderEntries(entries, tableBody, totalEl);
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
      renderEntries(entries, tableBody, totalEl);
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

  // ── Sync loteId → activeBatch.id ──
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
    document.getElementById("tabInoculacion")?.addEventListener("click", () => {
      actualizarMetodosInoculacion(hongoInput.value);
    });
    document.getElementById("tabIncubacion")?.addEventListener("click", () => {
      actualizarRangosIncubacion(hongoInput.value);
      updateIncubacionMetricas();
    });
    actualizarMetodosInoculacion(hongoInput.value);
    actualizarRangosIncubacion(hongoInput.value);
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
    // Redibujar gráfico (canvas puede necesitar resize)
    setTimeout(() => renderFlushChart(activeBatch.fructificacion.flushes, activeBatch.fructificacion.totalKg), 50);
  });

  // Conectar hongo con rangos de fructificación
  document.getElementById("hongo")?.addEventListener("input", (e) => {
    actualizarRangosFruct(e.target.value);
  });

  syncEstadoBotones();

  // ── DEFAULT TAB & CALCS ──
  showTab("calculadora");
  calcularPasteurizacion();
  calcularEncalado();

  // Auto-recalculate on input
  ["paja", "avenaPct", "aguaKg", "yesoPct", "calPct", "capTarro", "densidad"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", calcularPasteurizacion);
  });
  ["tarrosEncalado", "volumenTarroEncalado", "spawnEncaladoPct", "aguaEncalado", "gramosCalLitro"].forEach(id => {
    document.getElementById(id)?.addEventListener("input", calcularEncalado);
  });
});
