const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Tu mensaje ha sido enviado con exito!");
    // Aquí podrías agregar el código para enviar los datos del formulario a un servidor
});