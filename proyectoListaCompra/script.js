const lista = document.getElementById("lista")
const botonAñadirElemento = document.querySelector("button")
const botonBorrarTodo = document.getElementById("borrarTodo")
let todosLi = document.querySelectorAll("#lista li")
const textoFiltrar = document.getElementById("filtrar")
let liseleccionado = null
const valorTexto = document.getElementById
    ("textoEngadirElemento")
valorTexto.value = ""
const arrayValores = []


let listaCompra = JSON.parse(localStorage.getItem('lista', lista)) || []

for (const element of listaCompra) {
    const li = document.createElement("li")
    const botonBorrar = document.createElement("button")
    botonBorrar.append("X")
    li.append(document.createTextNode(element))
    li.append(botonBorrar)
    lista.append(li)
    botonBorrarTodo.type = "button"

}


function engadirElementos() {
    let todosLi = document.querySelectorAll("#lista li")
    let arrayLi = Array.from(todosLi)
    const li = document.createElement("li")
    const valorTexto = document.getElementById
        ("textoEngadirElemento")
    const botonBorrar = document.createElement("button")
    botonBorrar.append("X")
    for (const element of arrayLi) {
        arrayValores.push(element.firstChild.textContent.trim())
    }
    if (arrayValores.includes(valorTexto.value)) {
        window.alert("El elemento ya existe")
    } else {
        li.append(document.createTextNode(valorTexto.value))
        li.append(botonBorrar)
        lista.append(li)
        botonBorrarTodo.type = "button"
        engadirLocalStorage()

    }
    valorTexto.value = ""
}

function engadirLocalStorage() {
    let arrayLi = Array.from(lista.children)
    const arrayValores = []
    for (const element of arrayLi) {
        arrayValores.push(element.firstChild.textContent.trim())
    }
    const listaLocal = JSON.stringify(arrayValores)
    localStorage.setItem('lista', listaLocal)

}




function borrarElementos(e) {
    if (e.target.tagName == "BUTTON") {
        const confirmacion = window.confirm("Seguro que quieres eliminar este elemento de la lista")
        if (confirmacion) {
            parent = e.target.parentElement
            parent.remove()
            engadirLocalStorage()

        }
        if (lista.children.length == 0) {
            botonBorrarTodo.type = "hidden"

        }

    }
}
function borrarTodo() {
    lista.innerHTML = ""

    botonBorrarTodo.type = "hidden"

    localStorage.removeItem("lista")


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

    if (e.target.tagName == "LI") {
        if (liseleccionado) {
            liseleccionado.style.backgroundColor = ""
            liseleccionado.classList.remove("colorFondo")
        }
        liseleccionado = e.target
        liseleccionado.classList.add('colorFondo')
        botonAñadirElemento.removeEventListener('click', engadirElementos)
        const valorTexto = document.getElementById
            ("textoEngadirElemento")
        botonAñadirElemento.innerText = "Actualizar elemento";
        valorTexto.value = e.target.firstChild.textContent
        botonAñadirElemento.addEventListener('click', cambiarTexto)
    }






}

function init() {
    lista.addEventListener('click', actualizarElemento)

    textoFiltrar.addEventListener('keyup', filtrarElemento)

    botonAñadirElemento.addEventListener('click', engadirElementos)

    lista.addEventListener("click", borrarElementos)

    botonBorrarTodo.addEventListener('click', borrarTodo)
}

init()



