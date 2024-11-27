function alerta() {
    alert("Inicio de sesion exitoso")
}
function alertados() {
    alert("Registrado con exito")
}
function color(boton) {
    boton.style.backgroundColor = 'red';
    boton.innerHTML = 'No disponible';
    boton.disabled = true;
    boton.style.color = 'white';
}

function lisa(newTitle) {
      document.getElementById('titulo').textContent = newTitle;
    }