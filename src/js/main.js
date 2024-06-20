import financiamiento from "../config/info.js";
import { funciones } from "./componentes/orden.js";
import { filtros } from "./componentes/filtros.js";
import actualizarSelectsPorMarca from "./componentes/actualizarPorMarca.js";
import mostrarDatosSeleccionados from "./componentes/mostrarDatos.js";
window.addEventListener("DOMContentLoaded", (e) => {
	funciones.ordenarYmostrar(financiamiento);
	// Event listener para el select de marcas
	document.getElementById("selectMarca").addEventListener("change", (e) => {
		actualizarSelectsPorMarca(e.target.value, financiamiento);
		// Limpiar inputs
		document.getElementById("inputInicial").value = "";
		let select = document.getElementById("selectPeriodoDeMeses");
		const defaultOption = document.createElement("option");
		defaultOption.value = "";
		defaultOption.textContent = "Seleccione una opción";
		defaultOption.hidden = true;
		defaultOption.disabled = true;
		select.appendChild(defaultOption);
		document.getElementById("inputMensualidad").value = "";
		document.getElementById("inputInteresTotal").value = "";
		document.getElementById("inputPagosTotales").value = "";
	});
	// Agregar event listeners a los selects para ejecutar la función cuando se haga una selección
	document.getElementById("selectModelo").addEventListener("change", () => {
		filtros.actualizarAñosPorModelo(financiamiento.vehiculos);
		mostrarDatosSeleccionados(financiamiento);
		// Verificar que se haya seleccionado un modelo válido antes de habilitar el selectYear
		if (document.getElementById("selectModelo").value) {
			document.getElementById("selectYear").disabled = false;
		}
	});
	document.getElementById("selectYear").addEventListener("change", () => {
		mostrarDatosSeleccionados(financiamiento);
	});

	funciones.mostrarBancos(financiamiento);
	e.preventDefault();
});
