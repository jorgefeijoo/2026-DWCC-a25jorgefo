const data = [
    "car",
    "car",
    "truck",
    "truck",
    "bike",
    "walk",
    "car",
    "van",
    "bike",
    "walk",
    "car",
    "van",
    "car",
    "truck",
    "pogostick",
];

let numeroTransportes = {}
function reducer(accumulator, currentValue, index) {
    if (!Object.hasOwn(numeroTransportes, currentValue)) {
        numeroTransportes[currentValue] = 1;
    } else {
        numeroTransportes[currentValue]++;
    }
    return numeroTransportes
}

const sumaNumeros = data.reduce(reducer, 0)

console.log(sumaNumeros);
