const numeros = [5, 2, 1, 4, 3]

function reducer(accumulator, currentValue, index) {
    let returns = accumulator;

    if (currentValue < returns) {
        returns = currentValue
    }

    return returns;
}

const minimoNumero = numeros.reduce(reducer)

console.log(minimoNumero);

