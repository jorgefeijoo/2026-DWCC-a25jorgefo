const numeros = [10, 30, 100, 500, 365]

function compareNumbers(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}
const arrayOrdenado = numeros.sort(compareNumbers);

let numeroMasAlto = arrayOrdenado[arrayOrdenado.length - 1]

console.log(numeroMasAlto);

