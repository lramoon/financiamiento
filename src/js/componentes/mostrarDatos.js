import { funciones } from "./orden.js";

//Función pura para obtener el pago total basdo en el periiodo seleccionado
const obtenerPagoTotalPorPeriodo = (vehiculo, periodo) => {
	const pagoTotal = vehiculo.Precio_con_financiamiento;
	const indice = periodo === "24" ? 0 : 1;
	// Si no hay un segundo valor, dividir entre 2 el primer pago
	let interesSegundoAno = (
		parseFloat(pagoTotal.replace("$", "")).toFixed(2) *
		(16 / 100)
	).toFixed(2);

	if (indice === 1) {
		return (
			"$" +
			Number(parseFloat(pagoTotal.replace("$", ""))) +
			Number(interesSegundoAno)
		);
	} else {
		return pagoTotal;
	}
};
// Función pura para obtener la mensualidad basada en el periodo seleccionado
const obtenerMensualidadPorPeriodo = (vehiculo, periodo) => {
	const mensualidades = vehiculo.PagoMensual;
	const indice = periodo === "24" ? 0 : 1;
	// Si no hay un segundo valor, dividir entre 2 el primer pago
	let pago48meses = (parseFloat(mensualidades[0].replace("$", "")) / 2).toFixed(
		2
	);
	let interesSegundoAno = (
		(parseFloat(mensualidades[0].replace("$", "")) / 2).toFixed(2) *
		(16 / 100)
	).toFixed(2);
	return (
		mensualidades[indice] ||
		"$" + (Number(pago48meses) + Number(interesSegundoAno)).toFixed(2)
	);
};
// Función para actualizar la mensualidad en el DOM
const actualizarMensualidadDOM = (mensualidad, inputID) => {
	document.getElementById(inputID).value = mensualidad;
};

// Función de orden superior para manejar el evento change del select de periodos
const manejarCambioDePeriodo = (vehiculo) => (evento) => {
	const periodoSeleccionado = evento.target.value;
	const mensualidad = obtenerMensualidadPorPeriodo(
		vehiculo,
		periodoSeleccionado
	);
	const pagoTotal = obtenerPagoTotalPorPeriodo(vehiculo, periodoSeleccionado);
	actualizarMensualidadDOM(mensualidad, "inputMensualidad");
	actualizarMensualidadDOM(pagoTotal, "inputPagosTotales");
};

// Función para inicializar el select de periodos y asignar el event handler
const inicializarSelectPeriodoDeMeses = (vehiculo) => {
	const selectPeriodoDeMeses = document.getElementById("selectPeriodoDeMeses");
	selectPeriodoDeMeses.addEventListener(
		"change",
		manejarCambioDePeriodo(vehiculo)
	);
};

// Suponiendo que 'financiamiento' es tu objeto con la información de los vehículos
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
