const STORAGE_KEY = "hongosEntries";

const TAB_KEYS = ["calculadora", "preparacion", "inoculacion", "incubacion", "fructificacion"];

const activeBatch = {
  fructificacion: {
    fechaIngreso: "",
    fechaInicioPrimordios: "",
    flushes: [],
    totalKg: 0,
    rendimientoBiologico: 0,
  },
};

function agregarFlush() {
  const numero = parseInt(document.getElementById("flushNumero")?.value, 10);
  const kg = parseFloat(document.getElementById("kgFlush")?.value);
  const pesoSeco = parseFloat(document.getElementById("pesoSeco")?.value);

  if (!numero || !kg || !pesoSeco) {
    alert("Completar todos los campos");
    return;
  }

  activeBatch.fructificacion.flushes.push({
    numero,
    kg,
  });

  calcularFructificacion(pesoSeco);
}

function calcularFructificacion(pesoSeco) {
  const totalKg = activeBatch.fructificacion.flushes
    .reduce((sum, f) => sum + f.kg, 0);

  const rendimiento = (totalKg / pesoSeco) * 100;

  activeBatch.fructificacion.totalKg = totalKg;
  activeBatch.fructificacion.rendimientoBiologico = rendimiento;

  const fechaIngreso = document.getElementById("fechaIngreso")?.value || "";
  activeBatch.fructificacion.fechaIngreso = fechaIngreso;

  const resumen = document.getElementById("resumenFructificacion");
  if (resumen) {
    resumen.innerHTML = `
      <p><strong>Total producido:</strong> ${totalKg.toFixed(2)} kg</p>
      <p><strong>Rendimiento biológico:</strong> ${rendimiento.toFixed(2)} %</p>
    `;
  }
}
function exportarJSON() {
  const dataStr = JSON.stringify(activeBatch, null, 2);
  const blob = new Blob([dataStr], { type: "application/json" });

  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");

  a.href = url;
  a.download = `lote_${activeBatch.id || "registro"}.json`;
  a.click();

  URL.revokeObjectURL(url);
}

function capitalize(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
}

function showTab(tabName) {
  TAB_KEYS.forEach((key) => {
    const section = document.getElementById(`${key}Tab`);
    const button = document.getElementById(`tab${capitalize(key)}`);
    const isActive = key === tabName;

    if (section) section.style.display = isActive ? "block" : "none";
    if (button) button.classList.toggle("active", isActive);
  });
}

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
    <p>Avena: <strong>${avenaKg.toFixed(2)} kg</strong></p>
    <p>Agua: <strong>${aguaLitros.toFixed(2)} L</strong></p>
    <p>Yeso: <strong>${yesoKg.toFixed(2)} kg</strong></p>
    <p>Carbonato: <strong>${calKg.toFixed(2)} kg</strong></p>
    <p>Mezcla estimada: <strong>${mezclaKg.toFixed(2)} kg</strong></p>
    <p>Volumen estimado: <strong>${volumenLitros.toFixed(2)} L</strong></p>
    <p>Tarros estimados: <strong>${tarros.toFixed(0)}</strong></p>
  `;
}

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
    <p>Volumen total de sustrato: <strong>${volumenTotalSustrato.toFixed(2)} L</strong></p>
    <p>Spawn necesario (aprox): <strong>${spawnNecesarioKg.toFixed(2)} kg</strong></p>
    <p>Cal necesaria: <strong>${calNecesariaKg.toFixed(2)} kg</strong></p>
    <p>Producción estimada mínima: <strong>${produccionMinKg.toFixed(2)} kg</strong></p>
    <p>Producción estimada máxima: <strong>${produccionMaxKg.toFixed(2)} kg</strong></p>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("entryForm");
  const clearBtn = document.getElementById("clearBtn");
  const addSustratoBtn = document.getElementById("addSustratoBtn");
  const sustratosContainer = document.getElementById("sustratosContainer");
  const tableBody = document.querySelector("#entriesTable tbody");

  if (form && clearBtn && tableBody) {
    const fields = {
      fecha: document.getElementById("fecha"),
      hora: document.getElementById("hora"),
      hongo: document.getElementById("hongo"),
      cepa: document.getElementById("cepa"),
      humectacion: document.getElementById("humectacion"),
      esterilizacion: document.getElementById("esterilizacion"),
      tiempoProceso: document.getElementById("tiempoProceso"),
      obs: document.getElementById("obs"),
    };

    const createSustratoBlock = (index) => {
      const block = document.createElement("div");
      block.className = "block-card substrate-block";
      block.dataset.substrateIndex = String(index);
      block.innerHTML = `
        <div class="substrate-header">
          <h4>Sustrato ${index + 1}</h4>
          <button type="button" class="remove-substrate-btn">Eliminar</button>
        </div>
        <div class="row">
          <label>Tipo de Sustrato<input type="text" name="tipoSustrato" placeholder="Ej: Paja de trigo" required /></label>
          <label>Peso Seco (kg)<input type="number" name="pesoSeco" min="0" step="0.01" placeholder="Ej: 10" required /></label>
        </div>
        <label class="full">Nutrientes Adicionales<input type="text" name="nutrientes" placeholder="Ej: Salvado de trigo, yeso" /></label>
      `;
      return block;
    };

    const normalizeSubstrateHeadings = () => {
      const blocks = sustratosContainer.querySelectorAll(".substrate-block");
      blocks.forEach((block, index) => {
        block.dataset.substrateIndex = String(index);
        const heading = block.querySelector("h4");
        if (!heading) return;
        heading.textContent = index === 0 ? "Sustrato base" : `Sustrato ${index + 1}`;
      });
    };

    const getSustratosFromForm = () => {
      const blocks = sustratosContainer.querySelectorAll(".substrate-block");
      return Array.from(blocks)
        .map((block) => {
          const tipo = block.querySelector('input[name="tipoSustrato"]')?.value.trim() || "";
          const pesoSeco = Number(block.querySelector('input[name="pesoSeco"]')?.value) || 0;
          const nutrientes = block.querySelector('input[name="nutrientes"]')?.value.trim() || "";

          return { tipoSustrato: tipo, pesoSeco, nutrientes };
        })
        .filter((sustrato) => sustrato.tipoSustrato || sustrato.pesoSeco > 0 || sustrato.nutrientes);
    };

    const resetSustratos = () => {
      const blocks = sustratosContainer.querySelectorAll(".substrate-block");
      blocks.forEach((block, index) => {
        if (index === 0) {
          block.querySelectorAll("input").forEach((input) => {
            input.value = "";
          });
        } else {
          block.remove();
        }
      });
      normalizeSubstrateHeadings();
    };

    let entries = [];

    const saveEntries = () => {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
    };

    const updateTotals = () => {
      const totalEntradas = entries.length;
     
      document.getElementById("totalEntradas").textContent = `Entradas: ${totalEntradas}`;
          };

    const renderEntries = () => {
      tableBody.innerHTML = "";

      entries.forEach((entry, index) => {
        const row = document.createElement("tr");
        const sustratos = Array.isArray(entry.sustratos)
          ? entry.sustratos
          : [{
              tipoSustrato: entry.tipoSustrato || "-",
              pesoSeco: Number(entry.pesoSeco) || 0,
              nutrientes: entry.nutrientes || "",
            }];
        const sustratoTexto = sustratos
          .map((sustrato) => sustrato.tipoSustrato || "-")
          .join(", ");
        const pesoTotal = sustratos.reduce((acc, sustrato) => acc + (Number(sustrato.pesoSeco) || 0), 0);

        row.innerHTML = `
          <td>${entry.fecha}</td>
       <td>${entry.hora}</td>
          <td>${entry.hongo}</td>
          <td>${entry.cepa}</td>
          <td>${sustratoTexto}</td>
          <td>${pesoTotal.toFixed(2)} kg</td>   
 <td>${entry.obs || "-"}</td>
          <td>
            <button type="button" class="action-btn" data-index="${index}">
              Eliminar
            </button>
          </td>
        `;
        tableBody.appendChild(row);
      });

      updateTotals();
    };

    const loadEntries = () => {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved) return;

      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          entries = parsed.map((entry) => ({
            ...entry,
            pesoSeco: Number(entry.pesoSeco) || 0,
            sustratos: Array.isArray(entry.sustratos)
              ? entry.sustratos.map((sustrato) => ({
                  tipoSustrato: sustrato.tipoSustrato || "",
                  pesoSeco: Number(sustrato.pesoSeco) || 0,
                  nutrientes: sustrato.nutrientes || "",
                }))
              : undefined,
          }));
        }
      } catch {
        entries = [];
      }
    };

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const sustratos = getSustratosFromForm();
      if (sustratos.length === 0) {
        return;
      }

      const entry = {
        fecha: fields.fecha.value,
        hora: fields.hora.value,
        hongo: fields.hongo.value.trim(),
        cepa: fields.cepa.value.trim(),
        tipoSustrato: sustratos[0].tipoSustrato,
        pesoSeco: sustratos[0].pesoSeco,
        nutrientes: sustratos[0].nutrientes,
        sustratos,
        humectacion: Number(fields.humectacion.value) || 0,
        esterilizacion: fields.esterilizacion.value.trim(),
        tiempoProceso: fields.tiempoProceso.value,
        obs: fields.obs.value.trim(),
      };

      entries.unshift(entry);
      saveEntries();
      renderEntries();
      form.reset();
      resetSustratos();
    });

    clearBtn.addEventListener("click", () => {
      form.reset();
      resetSustratos();
    });

    addSustratoBtn?.addEventListener("click", () => {
      const nextIndex = sustratosContainer.querySelectorAll(".substrate-block").length;
      sustratosContainer.appendChild(createSustratoBlock(nextIndex));
      normalizeSubstrateHeadings();
    });

    sustratosContainer?.addEventListener("click", (event) => {
      const button = event.target.closest(".remove-substrate-btn");
      if (!button) return;

      const block = button.closest(".substrate-block");
      if (!block) return;

      block.remove();
      normalizeSubstrateHeadings();
    });

    tableBody.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-index]");
      if (!button) return;

      const index = Number(button.dataset.index);
      if (!Number.isInteger(index)) return;

      entries.splice(index, 1);
      saveEntries();
      renderEntries();
    });

    loadEntries();
    renderEntries();
  }

  const incubacionFields = {
    cantidadUnidades: document.getElementById("cantidadUnidadesIncubacion"),
    pesoHumedoUnidad: document.getElementById("pesoHumedoUnidad"),
    colonizacionEstimada: document.getElementById("colonizacionEstimada"),
    bolsasContaminadas: document.getElementById("bolsasContaminadas"),
    descarteLote: document.getElementById("descarteLote"),
    diasColonizacionTotal: document.getElementById("diasColonizacionTotal"),
    semaforoEstado: document.getElementById("semaforoEstado"),
    promedioColonizacion: document.getElementById("promedioColonizacion"),
    eficienciaLote: document.getElementById("eficienciaLote"),
    tasaContaminacion: document.getElementById("tasaContaminacion"),
  };

  const updateIncubacionMetricas = () => {
    const cantidadUnidades = Number(incubacionFields.cantidadUnidades?.value) || 0;
    const colonizacionEstimada = Number(incubacionFields.colonizacionEstimada?.value) || 0;
    const bolsasContaminadas = Number(incubacionFields.bolsasContaminadas?.value) || 0;
    const descarteLoteManual = Number(incubacionFields.descarteLote?.value) || 0;
    const diasColonizacionTotal = Number(incubacionFields.diasColonizacionTotal?.value) || 0;

    const tasaContaminacion = cantidadUnidades > 0
      ? (bolsasContaminadas / cantidadUnidades) * 100
      : 0;
    const descarteLote = descarteLoteManual > 0 ? descarteLoteManual : tasaContaminacion;
    const eficienciaLote = Math.max(0, 100 - descarteLote);

    let semaforo = "🟢 Colonización normal";
    if (
      colonizacionEstimada < 60 ||
      tasaContaminacion >= 15 ||
      descarteLote >= 15
    ) {
      semaforo = "🔴 Posible contaminación";
    } else if (
      colonizacionEstimada < 85 ||
      tasaContaminacion >= 5 ||
      descarteLote >= 5
    ) {
      semaforo = "🟡 Lenta";
    }

    if (incubacionFields.semaforoEstado) {
      incubacionFields.semaforoEstado.textContent = semaforo;
    }
    if (incubacionFields.promedioColonizacion) {
      incubacionFields.promedioColonizacion.textContent = `Tiempo promedio de colonización: ${diasColonizacionTotal.toFixed(0)} días`;
    }
    if (incubacionFields.eficienciaLote) {
      incubacionFields.eficienciaLote.textContent = `% de eficiencia del lote: ${eficienciaLote.toFixed(2)}%`;
    }
    if (incubacionFields.tasaContaminacion) {
      incubacionFields.tasaContaminacion.textContent = `Tasa de contaminación: ${tasaContaminacion.toFixed(2)}%`;
    }
  };

  [
    incubacionFields.cantidadUnidades,
    incubacionFields.colonizacionEstimada,
    incubacionFields.bolsasContaminadas,
    incubacionFields.descarteLote,
    incubacionFields.diasColonizacionTotal,
  ].forEach((field) => {
    field?.addEventListener("input", updateIncubacionMetricas);
  });

  updateIncubacionMetricas();

  showTab("calculadora");
  calcularPasteurizacion();
  calcularEncalado();
});
;
