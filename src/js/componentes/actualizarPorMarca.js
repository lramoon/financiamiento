import { funciones } from "./orden.js";
// Función para actualizar los selects de modelos y años basado en la marca seleccionada
const actualizarSelectsPorMarca = (marcaSeleccionada, financiamiento) => {
	// Filtrar modelos y años basados en la marca seleccionada
	const modelosDeMarca = financiamiento.vehiculos
		.filter((vehiculo) => vehiculo.Marca === marcaSeleccionada)
		.map((vehiculo) => vehiculo.Modelo);
	const añosDeMarca = financiamiento.vehiculos
		.filter((vehiculo) => vehiculo.Marca === marcaSeleccionada)
		.map((vehiculo) => vehiculo.Year);

	// Obtener valores únicos
	const modelosUnicosDeMarca = [...new Set(modelosDeMarca)];
	const añosUnicosDeMarca = [...new Set(añosDeMarca)];

	// Limpiar selects anteriores
	document.getElementById("selectModelo").innerHTML = "";
	document.getElementById("selectYear").innerHTML = "";

	// Agregar opciones al select de modelos
	funciones.agregarOpcionesSelect("selectModelo", modelosUnicosDeMarca);
	// Agregar opciones al select de años
	funciones.agregarOpcionesSelect("selectYear", añosUnicosDeMarca);
};

export default actualizarSelectsPorMarca;
