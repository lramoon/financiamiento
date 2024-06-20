// Suponiendo que tienes un array de objetos 'vehiculos' disponible en tu alcance

// Función para filtrar modelos por año y marca
const filtrarModelosPorAñoYMarca = (año, marca, vehiculos) => {
	return vehiculos
		.filter((vehiculo) => vehiculo.Year === año && vehiculo.Marca === marca)
		.map((vehiculo) => vehiculo.Modelo);
};

// Función para actualizar el select de modelos después de seleccionar el año
const actualizarModelosPorAño = (vehiculos) => {
	const selectYear = document.getElementById("selectYear");
	const selectMarca = document.getElementById("selectMarca");
	const selectModelo = document.getElementById("selectModelo");

	// Limpiar el select de modelos
	selectModelo.innerHTML = "";

	// Obtener la marca seleccionada actualmente
	const marcaSeleccionada = selectMarca.value;
	const añoSeleccionado = selectYear.value;

	// Filtrar modelos por la marca y año seleccionados
	const modelosFiltrados = filtrarModelosPorAñoYMarca(
		añoSeleccionado,
		marcaSeleccionada,
		vehiculos
	);

	// Agregar los modelos filtrados al select de modelos
	modelosFiltrados.forEach((modelo) => {
		const opcion = document.createElement("option");
		opcion.value = modelo;
		opcion.textContent = modelo;
		selectModelo.appendChild(opcion);
	});
};

// Función para filtrar años por marca y modelo
const filtrarAñosPorMarcaYModelo = (marca, modelo, vehiculos) => {
	return vehiculos
		.filter(
			(vehiculo) => vehiculo.Marca === marca && vehiculo.Modelo === modelo
		)
		.map((vehiculo) => vehiculo.Year);
};

// Función para actualizar el select de años después de seleccionar el modelo
const actualizarAñosPorModelo = (vehiculos) => {
	const selectMarca = document.getElementById("selectMarca");
	const selectModelo = document.getElementById("selectModelo");
	const selectYear = document.getElementById("selectYear");

	// Limpiar el select de años
	selectYear.innerHTML = "";

	// Obtener la marca y el modelo seleccionados
	const marcaSeleccionada = selectMarca.value;
	const modeloSeleccionado = selectModelo.value;

	// Filtrar años por la marca y el modelo seleccionados
	const añosFiltrados = filtrarAñosPorMarcaYModelo(
		marcaSeleccionada,
		modeloSeleccionado,
		vehiculos
	);

	// Agregar los años filtrados al select de años
	añosFiltrados.forEach((año) => {
		const opcion = document.createElement("option");
		opcion.value = año;
		opcion.textContent = año;
		selectYear.appendChild(opcion);
	});
};

// Exportar todas las funciones en un objeto
export const filtros = {
	filtrarModelosPorAñoYMarca,
	actualizarModelosPorAño,
	filtrarAñosPorMarcaYModelo,
	actualizarAñosPorModelo,
};
