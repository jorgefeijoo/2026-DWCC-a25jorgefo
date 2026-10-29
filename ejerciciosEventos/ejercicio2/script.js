
const boton = document.getElementById("boton")

function engadirElemento() {
    const valorTexto = document.getElementById("texto").value
    const lista = document.getElementById("lista")
    const li = document.createElement("li")
    li.append(document.createTextNode(valorTexto))
    lista.append(li)
}


boton.addEventListener("click", engadirElemento)