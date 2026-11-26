const botonIniciar = document.getElementById("iniciar")
const botonParar = document.getElementById("parar")
const titulo = document.querySelector("h1")

console.log(botonIniciar);
console.log(botonParar);

let intervalID


function cambiarColor(params) {
    intervalID = setInterval(myCallback, 1000);
    function myCallback() {
        titulo.classList.toggle("rojo")
    }

}

function parar(params) {
    clearTimeout(intervalID);
}

botonIniciar.addEventListener('click', cambiarColor)
botonParar.addEventListener('click', parar)