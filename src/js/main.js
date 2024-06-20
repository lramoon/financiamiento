async function fetchData() {
    try {
        const response = await fetch('../../financiamiento.json');
        const data = await response.json();
        return data
        // Aquí puedes manipular los datos obtenidos
    } catch (error) {
        console.error('Error al realizar la petición:', error);
        // Aquí puedes manejar el error, por ejemplo, mostrar un mensaje al usuario
    }
}


window.addEventListener('DOMContentLoaded', async (e) => {
    let x = await fetchData();
    console.log(x)
    e.preventDefault()
})