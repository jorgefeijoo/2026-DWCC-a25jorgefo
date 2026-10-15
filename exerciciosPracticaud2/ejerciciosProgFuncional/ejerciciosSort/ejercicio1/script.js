const notas = [4, 8, 3, 10, 5]
function compareNumbers(a, b) {
    if (a < b) return -1;
    else if (a > b) return 1;
    else return 0;
}
const arrayOrdenado = notas.sort(compareNumbers);

console.log(arrayOrdenado);
