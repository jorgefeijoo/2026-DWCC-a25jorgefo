const parrafo = document.querySelector("span")
const lista = document.querySelector("ul")

function mostrarLista() {
    if (lista.style.display == "none") {
        lista.style.display = "block"
        lista.style.listStyle = 'none'
    } else {
        lista.style.display = "none"
    }
}

parrafo.addEventListener("click", mostrarLista)