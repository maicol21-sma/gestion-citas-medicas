const formulario = document.getElementById("formCita");

formulario.addEventListener("submit", function (evento) {
    evento.preventDefault();

    const paciente = document.getElementById("paciente").value;
    const medico = document.getElementById("medico").value;
    const fecha = document.getElementById("fecha").value;
    const hora = document.getElementById("hora").value;

    if (paciente === "" || medico === "" || fecha === "" || hora === "") {
        alert("Por favor complete todos los campos");
    } else {
        alert("Cita registrada correctamente");
        formulario.reset();
    }
});
