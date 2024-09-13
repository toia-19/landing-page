/* OBTENCIÓN DE DATOS del formulario */
const formDatos = document.querySelector("#formulario"); // formDatos se vincula al formulario

// Creamos constante "imprimirDatos" que se encargue de manejar el evento del formulario
const imprimirDatos = (event) => {
    event.preventDefault(); // Evita que se envíe de forma predeterminada

    const info = new FormData(event.target); // Crea nuevo objeto tipo FormData con los valores recibidos del evento

    const datos = Object.fromEntries(info.entries()); // Transforma los valores de cada input en un objeto tipo clave-valor

    console.log(JSON.stringify(datos)); // Muestra por consola los datos del objeto transformados en JSON
}

formDatos.addEventListener("submit", imprimirDatos); // Escucha el evento "submit" (del botón) y ejecuta la función imprimirDaots
