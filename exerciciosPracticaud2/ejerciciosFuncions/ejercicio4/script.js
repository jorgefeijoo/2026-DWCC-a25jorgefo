const media = (...numeros) => {
    let resultado = 0
    for (const element of numeros) {
        resultado+=element
    }
    resultado = resultado / numeros.length
    return resultado
}

console.log(media(1,2,3,4));
