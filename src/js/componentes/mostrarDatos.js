function mostrarDatosSeleccionados(financiamiento) {
	// Obtener los valores seleccionados
	const marcaSeleccionada = document.getElementById("selectMarca").value;
	const modeloSeleccionado = document.getElementById("selectModelo").value;
	const añoSeleccionado = document.getElementById("selectYear").value;
	debugger;
	// Validar que todos los selects estén seleccionados
	if (marcaSeleccionada && modeloSeleccionado && añoSeleccionado) {
		debugger;
		// Buscar el vehículo correspondiente
		const vehiculoEncontrado = financiamiento.vehiculos.find(
			(vehiculo) =>
				vehiculo.Marca === marcaSeleccionada &&
				vehiculo.Modelo === modeloSeleccionado &&
				vehiculo.Year === añoSeleccionado
		);
		console.log(vehiculoEncontrado);
		debugger;
		// Si se encuentra el vehículo, mostrar los datos
		if (vehiculoEncontrado) {
			document.getElementById("inputInicial").value =
				vehiculoEncontrado.Inicial;
			document.getElementById("inputPeriodoDeMeses").value =
				vehiculoEncontrado.Periodos.join(" o ");
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
		document.getElementById("inputPeriodoDeMeses").value = "";
		document.getElementById("inputMensualidad").value = "";
		document.getElementById("inputInteresTotal").value = "";
		document.getElementById("inputPagosTotales").value = "";
	}
}
export default mostrarDatosSeleccionados;
