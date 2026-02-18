// ================================
// ESPERAR QUE CARGUE EL DOM
// ================================
document.addEventListener("DOMContentLoaded", function () {

  // ================================
  // 🔹 1. SISTEMA DE PESTAÑAS
  // ================================
  const tabs = document.querySelectorAll(".tab-btn");
  const sections = document.querySelectorAll(".tab-section");

  tabs.forEach(tab => {
    tab.addEventListener("click", () => {

      // Quitar clase activa a todos
      tabs.forEach(t => t.classList.remove("bg-blue-600", "text-white"));
      sections.forEach(s => s.classList.add("hidden"));

      // Activar actual
      tab.classList.add("bg-blue-600", "text-white");
      const target = tab.dataset.target;
      document.getElementById(target).classList.remove("hidden");
    });
  });

  // ================================
  // 🔹 2. GUARDADO AUTOMÁTICO
  // ================================
  const inputs = document.querySelectorAll("input, select, textarea");

  function guardarDatos() {
    let datos = {};

    inputs.forEach(input => {
      if (input.id) {
        datos[input.id] = input.value;
      }
    });

    localStorage.setItem("registroHongos", JSON.stringify(datos));
  }

  inputs.forEach(input => {
    input.addEventListener("input", guardarDatos);
  });

  // ================================
  // 🔹 3. CARGAR DATOS AL INICIAR
  // ================================
  function cargarDatos() {
    const datosGuardados = localStorage.getItem("registroHongos");

    if (!datosGuardados) return;

    const datos = JSON.parse(datosGuardados);

    inputs.forEach(input => {
      if (input.id && datos[input.id] !== undefined) {
        input.value = datos[input.id];
      }
    });
  }

  cargarDatos();

});
