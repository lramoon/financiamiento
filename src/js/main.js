import financiamiento from "../config/info.js";
import { funciones } from "./componentes/orden.js";
import actualizarSelectsPorMarca from "./componentes/actualizarPorMarca.js";
import mostrarDatosSeleccionados from "./componentes/mostrarDatos.js";
window.addEventListener("DOMContentLoaded", (e) => {
	funciones.ordenarYmostrar(financiamiento);
	// Event listener para el select de marcas
	document.getElementById("selectMarca").addEventListener("change", (e) => {
		actualizarSelectsPorMarca(e.target.value, financiamiento);
	});
	// Agregar event listeners a los selects para ejecutar la función cuando se haga una selección
	document.getElementById("selectModelo").addEventListener("change", () => {
		mostrarDatosSeleccionados(financiamiento);
	});
	document.getElementById("selectYear").addEventListener("change", () => {
		mostrarDatosSeleccionados(financiamiento);
	});

	funciones.mostrarBancos(financiamiento);
	e.preventDefault();
});
