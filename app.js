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
/* FRUCTIFICACIÓN            */
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

  list.innerHTML = flushes.map(f => {
    const pct = (f.kg / maxKg * 100).toFixed(1);
    return `
      <div class="flush-item">
        <span class="flush-num">FLUSH ${f.numero}</span>
        <div class="flush-bar-wrap">
          <div class="flush-bar" style="width:${pct}%"></div>
        </div>
        <span class="flush-kg">${f.kg.toFixed(2)} kg</span>
      </div>
    `;
  }).join("");
}

// Persistent peso seco para fructificación (evita NaN si el campo se borra)
let _lastPesoSeco = 0;

function agregarFlush() {
  const numero = parseInt(document.getElementById("flushNumero")?.value, 10);
  const kg = parseFloat(document.getElementById("kgFlush")?.value);
  const pesoSecoInput = parseFloat(document.getElementById("pesoSeco")?.value);

  // Actualizar último valor válido de pesoSeco
  if (!isNaN(pesoSecoInput) && pesoSecoInput > 0) _lastPesoSeco = pesoSecoInput;
  const pesoSeco = _lastPesoSeco;

  if (!numero || isNaN(numero) || isNaN(kg) || kg <= 0) {
    alert("Completá el número de flush y los kg cosechados.");
    return;
  }
  if (pesoSeco <= 0) {
    alert("Ingresá el peso seco total del lote antes de registrar cosechas.");
    return;
  }

  // Actualizar o agregar flush
  const existing = activeBatch.fructificacion.flushes.findIndex(f => f.numero === numero);
  if (existing >= 0) {
    activeBatch.fructificacion.flushes[existing].kg = kg;
  } else {
    activeBatch.fructificacion.flushes.push({ numero, kg });
  }

  activeBatch.fructificacion.flushes.sort((a, b) => a.numero - b.numero);
  calcularFructificacion(pesoSeco);
  renderFlushList();

  document.getElementById("flushNumero").value = "";
  document.getElementById("kgFlush").value = "";
}

function calcularFructificacion(pesoSeco) {
  const totalKg = activeBatch.fructificacion.flushes.reduce((sum, f) => sum + f.kg, 0);
  const rendimiento = pesoSeco > 0 ? (totalKg / pesoSeco) * 100 : 0;

  activeBatch.fructificacion.totalKg = totalKg;
  activeBatch.fructificacion.rendimientoBiologico = rendimiento;
  activeBatch.fructificacion.fechaIngreso = document.getElementById("fechaIngreso")?.value || "";

  const resumen = document.getElementById("resumenFructificacion");
  if (resumen) {
    const color = rendimiento >= 50 ? "#4ade80" : rendimiento >= 25 ? "#f59e0b" : "#ef4444";
    resumen.innerHTML = `
      <h3>Resumen</h3>
      <p><span>Total producido</span><strong>${totalKg.toFixed(2)} kg</strong></p>
      <p><span>Rendimiento biológico</span><strong style="color:${color}">${rendimiento.toFixed(2)} %</strong></p>
      <p><span>Flushes registrados</span><strong>${activeBatch.fructificacion.flushes.length}</strong></p>
    `;
  }
}

function exportarJSON() {
  const dataStr = JSON.stringify(activeBatch, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  const filename = activeBatch.id && activeBatch.id.trim()
    ? `lote_${activeBatch.id.trim()}.json`
    : `lote_${new Date().toISOString().slice(0, 10)}.json`;
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
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
/* INCUBACIÓN - MÉTRICAS     */
/* ========================= */
function updateIncubacionMetricas() {
  const cantidadUnidades = Number(document.getElementById("cantidadUnidadesIncubacion")?.value) || 0;
  const colonizacionEstimada = Number(document.getElementById("colonizacionEstimada")?.value) || 0;
  const bolsasContaminadas = Number(document.getElementById("bolsasContaminadas")?.value) || 0;
  const descarteLoteManual = Number(document.getElementById("descarteLote")?.value) || 0;
  const diasColonizacionTotal = Number(document.getElementById("diasColonizacionTotal")?.value) || 0;

  const tasaContaminacion = cantidadUnidades > 0 ? (bolsasContaminadas / cantidadUnidades) * 100 : 0;
  const descarteLote = descarteLoteManual > 0 ? descarteLoteManual : tasaContaminacion;
  const eficienciaLote = Math.max(0, 100 - descarteLote);

  // Only evaluate semáforo when the user has actually entered data
  const hayDatos = colonizacionEstimada > 0 || cantidadUnidades > 0;
  let semaforo = "⚪ Sin datos aún";
  if (hayDatos) {
    semaforo = "🟢 Colonización normal";
    if (colonizacionEstimada > 0 && colonizacionEstimada < 60 || tasaContaminacion >= 15 || descarteLote >= 15) {
      semaforo = "🔴 Posible contaminación";
    } else if (colonizacionEstimada > 0 && colonizacionEstimada < 85 || tasaContaminacion >= 5 || descarteLote >= 5) {
      semaforo = "🟡 Colonización lenta";
    }
  }

  const semaforoEl = document.getElementById("semaforoEstado");
  const promedioEl = document.getElementById("promedioColonizacion");
  const eficienciaEl = document.getElementById("eficienciaLote");
  const tasaEl = document.getElementById("tasaContaminacion");

  if (semaforoEl) semaforoEl.textContent = semaforo;
  if (promedioEl) promedioEl.textContent = `${diasColonizacionTotal} días`;
  if (eficienciaEl) eficienciaEl.textContent = `${eficienciaLote.toFixed(2)}%`;
  if (tasaEl) tasaEl.textContent = `${tasaContaminacion.toFixed(2)}%`;
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

  // ── INCUBACIÓN ──
  [
    "cantidadUnidadesIncubacion",
    "colonizacionEstimada",
    "bolsasContaminadas",
    "descarteLote",
    "diasColonizacionTotal",
  ].forEach((id) => {
    document.getElementById(id)?.addEventListener("input", updateIncubacionMetricas);
  });

  updateIncubacionMetricas();

  // Sync loteId → activeBatch.id para que el export JSON use el ID correcto
  document.getElementById("loteId")?.addEventListener("input", (e) => {
    activeBatch.id = e.target.value.trim();
  });

  // Conectar campo hongo con la pestaña de Inoculación
  const hongoInput = document.getElementById("hongo");
  if (hongoInput) {
    // Actualizar métodos cuando cambia el hongo
    hongoInput.addEventListener("input", (e) => {
      actualizarMetodosInoculacion(e.target.value);
    });
    // También actualizar al cambiar de pestaña a Inoculación
    document.getElementById("tabInoculacion")?.addEventListener("click", () => {
      actualizarMetodosInoculacion(hongoInput.value);
    });
    // Inicializar con valor actual (si ya hay uno guardado en el form)
    actualizarMetodosInoculacion(hongoInput.value);
  }

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
