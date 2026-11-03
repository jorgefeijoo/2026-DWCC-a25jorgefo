const boton = document.querySelector("button");
const div = document.getElementById("texto")
const cajaTexto = document.querySelector("input")

function mouseDentro() {
    console.log('Mouse dentro');

}

function mouseFuera() {
    console.log('Mouse fuera');

}

function eliminarDiv() {
    div.style.display = 'none'
}

function cogerValorMostrar(e) {

    div.append(" Tecla: " + e.key)
    div.append(" Codigo:  " + e.code)



    if (div.style.display == 'none') {
        div.style.display = 'block'
    }
}

boton.addEventListener('mouseout', mouseFuera)
boton.addEventListener('mouseover', mouseDentro)
boton.addEventListener('click', eliminarDiv)
cajaTexto.addEventListener('keydown', cogerValorMostrar)