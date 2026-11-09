const input = document.querySelector("input")

function cambiarFondo(e) {
    e.target.style.backgroundColor = "peru"
}

function mensaje(e) {
    e.target.style.backgroundColor = "white"
    if (e.target.value == "") {
        console.log('El formulario no tiene foco y esta vacio');

    }
}

input.addEventListener('focus', cambiarFondo)
input.addEventListener('focusout', mensaje)