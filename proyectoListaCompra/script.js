const lista = document.getElementById("lista")
const botonAñadirElemento = document.querySelector("button")
const botonBorrarTodo = document.getElementById("borrarTodo")
const todosLi = document.querySelectorAll("#lista li")
const textoFiltrar = document.getElementById("filtrar")



if (lista.children.length > 0) {
    botonBorrarTodo.type = "button"
}

function engadirElementos() {
    const arrayLi = Array.from(todosLi)
    const li = document.createElement("li")
    const valorTexto = document.getElementById
        ("textoEngadirElemento")
    const botonBorrar = document.createElement("button")
    botonBorrar.append("X")
    const arrayValores = []
    for (const element of arrayLi) {
        arrayValores.push(element.firstChild.textContent.trim())
    }
    if (arrayValores.includes(valorTexto.value)) {
        window.alert("El elemento ya existe")
    } else {
        li.append(document.createTextNode(valorTexto.value))
        li.append(botonBorrar)
        lista.append(li)
    }
    valorTexto.value = ""
}




function borrarElementos(e) {
    if (e.target.tagName == "BUTTON") {
        const confirmacion = window.confirm("Seguro que quieres eliminar este elemento de la lista")
        if (confirmacion) {
            parent = e.target.parentElement
            parent.remove()
        }

    }
}
function borrarTodo() {
    for (const element of todosLi) {
        element.remove()
    }
}

function filtrarElemento() {

    const li = document.querySelectorAll("#lista li")
    const arrayLi = Array.from(li)

    for (const element of arrayLi) {

        const coincidencia = element.firstChild.textContent.toLowerCase().toString()

        if (!coincidencia.startsWith(textoFiltrar.value)) {
            element.style.display = "none"
        } else {
            element.style.display = "list-item"
        }
    }
}


function cambiarTexto() {
    const valorTexto = document.getElementById
        ("textoEngadirElemento")

    let liPulsado = document.querySelector(".colorFondo")
    liPulsado.firstChild.textContent = valorTexto.value
    valorTexto.value = ""
}

function actualizarElemento(e) {
    let liPulsado = e.target
    liPulsado.classList.add('colorFondo')
    liPulsado.style.backgroundColor == "yellow"
    console.log(liPulsado);

    botonAñadirElemento.removeEventListener('click', engadirElementos)
    const valorTexto = document.getElementById
        ("textoEngadirElemento")
    if (e.target.tagName == "LI") {
        botonAñadirElemento.innerText = "Actualizar elemento";
        valorTexto.value = e.target.firstChild.textContent
    }
    botonAñadirElemento.addEventListener('click', cambiarTexto)





}

lista.addEventListener('click', actualizarElemento)

textoFiltrar.addEventListener('keyup', filtrarElemento)

botonAñadirElemento.addEventListener('click', engadirElementos)

lista.addEventListener("click", borrarElementos)

botonBorrarTodo.addEventListener('click', borrarTodo)

