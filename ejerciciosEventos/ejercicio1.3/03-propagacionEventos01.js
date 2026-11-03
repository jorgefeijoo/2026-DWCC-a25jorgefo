'use strict';

// Engade un event listener ao botón con id "btnAccion" que mostre un alert ao facer click
const boton = document.getElementById("btnAccion")
function añadirAlert() {
    window.alert()
}

boton.addEventListener('click', añadirAlert)

// Cada vez que se fai click no botón "Alternar clase" fai que se engada/elimine a clase "resaltado" no div con id "mensaxe".
const alternarClase = document.getElementById("btnAlternar")
const div = document.getElementById("mensaxe")

function añadirOEliminarClase() {
    div.classList.toggle('resaltado')

}


alternarClase.addEventListener('click', añadirOEliminarClase)

// Mostra por consola o valor do input cando se pulse o botón "Enviar" do formulario. A continuación elimina o texto introducido no input


const submit = document.querySelector("form button")

function mostrarValorInput() {
    const input = document.getElementById("entradaTexto")
    console.log(input);
    let valor = input.value
    console.log(valor);
    input.value = ""

}

submit.addEventListener('click', mostrarValorInput)