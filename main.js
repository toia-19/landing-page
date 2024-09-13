// Alerta de botón "Inscripción"
function alerta(){
    Swal.fire({
        title: "¡Oh no!",
        text: "En reparación :(",
        icon: "error"
    });
}

// Funcionalidad para "Ver más/ menos" en párrafo
const content = document.getElementById('text');
const button = document.getElementById('toggleButton');

// Cuando el botón escucha "click" se ejecuta modificación en texto
button.addEventListener('click', () => {
    content.classList.toggle('expanded');
    button.textContent = content.classList.contains('expanded') ? 'Ver menos' : 'Ver más';
});