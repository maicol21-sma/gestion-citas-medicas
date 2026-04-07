let pacientes = JSON.parse(localStorage.getItem("pacientes")) || [];
let pacienteEditando = null;

// ================= GUARDAR =================
function guardarPaciente() {

    let paciente = {
        id: Date.now(),
        nombre: document.getElementById("nombre").value,
        apellido: document.getElementById("apellido").value,
        tipoDoc: document.getElementById("tipoDoc").value,
        documento: document.getElementById("documento").value,
        correo: document.getElementById("correo").value,
        direccion: document.getElementById("direccion").value,
        telefono: document.getElementById("telefono").value,
        genero: document.getElementById("genero").value,
        eps: document.getElementById("eps").value,
    }

    if (!paciente.nombre || !paciente.documento) {
        alert("Campos obligatorios faltantes");
        return;
    }

    pacientes.push(paciente);
    guardarLocal();
    mostrarPacientes();
    limpiarFormulario();
}
// ================= MOSTRAR =================
function mostrarPacientes() {

    let tbody = document.querySelector("#tablaPacientes tbody");
    tbody.innerHTML = "";

    pacientes.forEach(p => {
        let fila = `
            <tr>
                <td>${p.nombre} ${p.apellido}</td>
                <td>${p.documento}</td>
                <td>${p.telefono}</td>
                <td>${p.correo}</td>
                <td>${p.eps}</td>
                <td>
                    <button onclick="editar(${p.id})">Editar</button>
                    <button onclick="borrar(${p.id})">Eliminar</button>
                </td>
            </tr>
        `;
        tbody.innerHTML += fila;
    });
}

// ================= EDITAR =================
function editar(id) {

    let p = pacientes.find(p => p.id === id);

    document.getElementById("nombre").value = p.nombre;
    document.getElementById("apellido").value = p.apellido;
    document.getElementById("tipoDoc").value = p.tipoDoc;
    document.getElementById("documento").value = p.documento;
    document.getElementById("correo").value = p.correo;
    document.getElementById("direccion").value = p.direccion;
    document.getElementById("telefono").value = p.telefono;
    document.getElementById("genero").value = p.genero;
    document.getElementById("eps").value = p.eps;

    pacienteEditando = id;
}

// ================= ELIMINAR =================
function borrar(id) {

    let confirmar = confirm("¿Seguro que desea eliminar este paciente?");

    if (!confirmar) return;

    pacientes = pacientes.filter(p => p.id !== id);

    guardarLocal();
    mostrarPacientes();

    mostrarMensaje("Paciente eliminado", "ok");
}

// ================= LOCAL STORAGE =================
function guardarLocal() {
    localStorage.setItem("pacientes", JSON.stringify(pacientes));
}

// ================= LIMPIAR =================
function limpiarFormulario() {
    document.querySelectorAll("input").forEach(i => i.value = "");
}

// ================= INICIAR =================
mostrarPacientes();

function mostrarMensaje(texto, tipo) {

    let div = document.getElementById("mensaje");
    div.innerText = texto;

    if (tipo === "ok") {
        div.style.color = "green";
    } else {
        div.style.color = "red";
    }

    setTimeout(() => {
        div.innerText = "";
    }, 3000);
}
function validarNumero(input) {
    input.value = input.value.replace(/[^0-9]/g, "");
}

