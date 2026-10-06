const suma = (...numeros) => {
    let resultado = 0
    for (const element of numeros) {
        resultado+=element
    }
    return resultado
}

console.log(suma(1,2,3,4));
