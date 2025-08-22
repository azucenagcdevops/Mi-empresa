document.getElementById("form-contacto").addEventListener("submit", function (event) {
    event.preventDefault();

    let nombre = document.getElementById("nombre").value.trim();
    let email = document.getElementById("email").value.trim();
    let mensaje = document.getElementById("mensaje").value.trim();

    if (nombre !== "" && email !== "" && mensaje !== "") {
        alert("Enviaste correctamente el mensaje.");
    } else {
        alert("Te faltan datos por llenar.");
    }
});