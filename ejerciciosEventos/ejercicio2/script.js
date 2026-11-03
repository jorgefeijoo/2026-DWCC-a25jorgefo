
const boton = document.getElementById("boton")
const input = document.querySelector("input")
input.focus()
function engadirElemento() {
    const valorTexto = document.getElementById("texto").value
    const lista = document.getElementById("lista")
    const li = document.createElement("li")
    li.append(document.createTextNode(valorTexto))
    lista.append(li)
    input.value = ''

}


boton.addEventListener("click", engadirElemento)