const span = document.getElementById("adicional")
const claseSpam = span.classList
const ligazon = document.getElementById("ligazon")

function ocultarLigazonMostrarContido() {
    ligazon.style.display = "none"
    claseSpam.toggle("oculto")
}

document.addEventListener("click", ocultarLigazonMostrarContido)