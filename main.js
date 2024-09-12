const boton = document.getElementById("btn-inscripcion");

/* Alerta de botón "Inscripción" */
function alerta(){
    Swal.fire({
        title: "¡Oh no!",
        text: "En reparación :(",
        icon: "error"
    });
}

/* Funcionalidad para "Ver más/ menos" */
const content = document.getElementById('text');
const button = document.getElementById('toggleButton');

button.addEventListener('click', () => {
    content.classList.toggle('expanded');
    button.textContent = content.classList.contains('expanded') ? 'Ver menos' : 'Ver más';
});