// Creamos constante "formDatos" que reciba del documento (HTML) el ID del formulario (mediante un querySelector)
const formDatos = document.querySelector("#formulario");

// Creamos constante "imprimirDatos" que se encargue de manejar el evento del formulario
const imprimirDatos = (event) => {
    event.preventDefault(); // evita que se envíe de forma predeterminada

    const info = new FormData(event.target); // crea nuevo objeto tipo FormData con los valores recibidos del evento

    const datos = Object.fromEntries(info.entries()); // transforma los valores de cada input en un objeto tipo clave-valor

    console.log(JSON.stringify(datos)); // muestra por consola los datos del objeto transformados en JSON
}

formDatos.addEventListener("submit", imprimirDatos); // escucha el evento "submit" (del botón) y ejecuta la función imprimirDaots

/**
 * Resultado esperado 1: objeto
 * {
 *     nombre: "Maia",
 *     apellido: "Ulloa"
 * }
 * 
 * Resultado esperado 2: JSON
 * {"nombre": "Maia", "apellido": "Ulloa"}
 */
