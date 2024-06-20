import { funciones } from "./orden.js";

// Función pura para obtener la mensualidad basada en el periodo seleccionado
const obtenerMensualidadPorPeriodo = (vehiculo, periodo) => {
	const mensualidades = vehiculo.PagoMensual;
	const indice = periodo === "24" ? 0 : 1;
	// Si no hay un segundo valor, dividir entre 2 el primer pago
	return (
		mensualidades[indice] ||
		"$" + (parseFloat(mensualidades[0].replace("$", "")) / 2).toFixed(2)
	);
};
// Función para actualizar la mensualidad en el DOM
const actualizarMensualidadDOM = (mensualidad) => {
	document.getElementById("inputMensualidad").value = mensualidad;
};

// Función de orden superior para manejar el evento change del select de periodos
const manejarCambioDePeriodo = (vehiculo) => (evento) => {
	const periodoSeleccionado = evento.target.value;
	const mensualidad = obtenerMensualidadPorPeriodo(
		vehiculo,
		periodoSeleccionado
	);
	actualizarMensualidadDOM(mensualidad);
};

// Función para inicializar el select de periodos y asignar el event handler
const inicializarSelectPeriodoDeMeses = (vehiculo) => {
	const selectPeriodoDeMeses = document.getElementById("selectPeriodoDeMeses");
	selectPeriodoDeMeses.addEventListener(
		"change",
		manejarCambioDePeriodo(vehiculo)
	);
};

// Ejemplo de uso:
// // Suponiendo que 'financiamiento' es tu objeto con la información de los vehículos
// const vehiculoSeleccionado = financiamiento.vehiculos[0]; // Obtener el vehículo seleccionado
// inicializarSelectPeriodoDeMeses(vehiculoSeleccionado);
function mostrarDatosSeleccionados(financiamiento) {
	// Obtener los valores seleccionados
	const marcaSeleccionada = document.getElementById("selectMarca").value;
	const modeloSeleccionado = document.getElementById("selectModelo").value;
	const añoSeleccionado = document.getElementById("selectYear").value;

	// Validar que todos los selects estén seleccionados
	if (marcaSeleccionada && modeloSeleccionado && añoSeleccionado) {
		// Buscar el vehículo correspondiente
		const vehiculoEncontrado = financiamiento.vehiculos.find(
			(vehiculo) =>
				vehiculo.Marca === marcaSeleccionada &&
				vehiculo.Modelo === modeloSeleccionado &&
				vehiculo.Year === añoSeleccionado
		);
		// Si se encuentra el vehículo, mostrar los datos
		if (vehiculoEncontrado) {
			document.getElementById("inputInicial").value =
				vehiculoEncontrado.Inicial;
			funciones.agregarOpcionesSelect(
				"selectPeriodoDeMeses",
				vehiculoEncontrado.Periodos
			);
			inicializarSelectPeriodoDeMeses(vehiculoEncontrado);
			document.getElementById("inputMensualidad").value =
				vehiculoEncontrado.PagoMensual.join(" o ");
			document.getElementById("inputInteresTotal").value =
				vehiculoEncontrado.Tasa_interes + "%";
			document.getElementById("inputPagosTotales").value =
				vehiculoEncontrado.Precio_con_financiamiento;
		}
	} else {
		// Limpiar los campos si no están todos seleccionados
		document.getElementById("inputInicial").value = "";
		document.getElementById("selectPeriodoDeMeses").value = "";
		document.getElementById("inputMensualidad").value = "";
		document.getElementById("inputInteresTotal").value = "";
		document.getElementById("inputPagosTotales").value = "";
	}
}
export default mostrarDatosSeleccionados;
