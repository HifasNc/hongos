const STORAGE_KEY = "hongosEntries";

function showTab(tabName) {
  const isRegistro = tabName === "registro";

  document.getElementById("registroTab").style.display = isRegistro ? "block" : "none";
  document.getElementById("calculadoraTab").style.display = isRegistro ? "none" : "block";

  document.getElementById("tabRegistro").classList.toggle("active", isRegistro);
  document.getElementById("tabCalculadora").classList.toggle("active", !isRegistro);
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

  // Referencia rápida para hongos ostra: ~0.10 a 0.20 kg frescos por litro de sustrato preparado.
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
  const tableBody = document.querySelector("#entriesTable tbody");

  const fields = {
    fecha: document.getElementById("fecha"),
    lote: document.getElementById("lote"),
    tarros: document.getElementById("tarros"),
    peso: document.getElementById("peso"),
    humedad: document.getElementById("humedad"),
    obs: document.getElementById("obs"),
  };

  let entries = [];

  const saveEntries = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(entries));
  };

  const updateTotals = () => {
    const totalEntradas = entries.length;
    const totalPeso = entries.reduce((sum, entry) => sum + entry.peso, 0);
    const totalTarros = entries.reduce((sum, entry) => sum + entry.tarros, 0);
    const promedio = totalTarros > 0 ? totalPeso / totalTarros : 0;

    document.getElementById("totalEntradas").textContent = `Entradas: ${totalEntradas}`;
    document.getElementById("totalPeso").textContent = `Peso total: ${totalPeso.toFixed(2)} kg`;
    document.getElementById("pesoPromedio").textContent = `Promedio por tarro: ${promedio.toFixed(3)} kg`;
  };

  const renderEntries = () => {
    tableBody.innerHTML = "";

    entries.forEach((entry, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${entry.fecha}</td>
        <td>${entry.lote || "-"}</td>
        <td>${entry.tarros}</td>
        <td>${entry.peso.toFixed(2)} kg</td>
        <td>${entry.humedad !== null ? `${entry.humedad}%` : "-"}</td>
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
          tarros: Number(entry.tarros) || 0,
          peso: Number(entry.peso) || 0,
          humedad: entry.humedad === null || entry.humedad === "" ? null : Number(entry.humedad),
        }));
      }
    } catch {
      entries = [];
    }
  };

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const entry = {
      fecha: fields.fecha.value,
      lote: fields.lote.value.trim(),
      tarros: Number(fields.tarros.value) || 0,
      peso: Number(fields.peso.value) || 0,
      humedad: fields.humedad.value === "" ? null : Number(fields.humedad.value),
      obs: fields.obs.value.trim(),
    };

    entries.unshift(entry);
    saveEntries();
    renderEntries();
    form.reset();
  });

  clearBtn.addEventListener("click", () => form.reset());

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
  calcularPasteurizacion();
  calcularEncalado();
});
