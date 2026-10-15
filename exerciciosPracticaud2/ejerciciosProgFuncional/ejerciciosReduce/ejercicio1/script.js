const objects = [{ price: 1 }, { price: 2 }, { price: 3 }];

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue.price;
    return returns;
}

const sumaNumeros = objects.reduce(reducer, 0)

console.log('la suma de los numeros es: ' + sumaNumeros);


