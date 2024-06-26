// Función para agregar opciones a un select
const agregarOpcionesSelect = (selectId, opciones) => {
	const select = document.getElementById(selectId);
	select.innerHTML = ""; // Limpiar opciones existentes

	// Crear y agregar la opción por defecto al principio si no es selectPeriodoDeMeses
	if (selectId !== "selectPeriodoDeMeses") {
		const defaultOption = document.createElement("option");
		defaultOption.value = "";
		defaultOption.textContent = "Seleccione una opción";
		defaultOption.hidden = true;
		defaultOption.disabled = true;
		defaultOption.selected = true;
		select.appendChild(defaultOption);
	}

	opciones.forEach((opcion) => {
		const elementoOpcion = document.createElement("option");
		elementoOpcion.value = opcion;
		elementoOpcion.textContent = opcion;
		select.appendChild(elementoOpcion);
	});

	// Establecer "24" como la opción predeterminada para selectPeriodoDeMeses
	if (selectId === "selectPeriodoDeMeses") {
		select.value = "24";
	}
};

// Función para obtener valores únicos
const obtenerValoresUnicos = (array, propiedad) => {
	return [...new Set(array.map((item) => item[propiedad]))];
};

const ordenarYmostrar = (info) => {
	const marcas = obtenerValoresUnicos(info.vehiculos, "Marca");
	agregarOpcionesSelect("selectMarca", marcas);
};

// FUnción para mostrar los bancos
const mostrarBancos = (info) => {
	const bancos = info.bancos;
	const inputBancos = window.document.getElementById("bancos");
	inputBancos.innerText = "Bancos para financiamiento: ";
	bancos.forEach((el) => {
		if (el) {
			inputBancos.innerText += " " + el + ",";
		}
	});
};

// Exportar todas las funciones en un objeto
export const funciones = {
	agregarOpcionesSelect,
	obtenerValoresUnicos,
	ordenarYmostrar,
	mostrarBancos,
};
