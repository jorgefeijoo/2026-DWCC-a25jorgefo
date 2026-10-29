const parrafo = document.querySelector("p")
const lista = document.querySelector("ul")

function mostrarLista() {
    lista.style.listStyle = "none"
    lista.style.display = "block"

}

parrafo.addEventListener("click", mostrarLista)