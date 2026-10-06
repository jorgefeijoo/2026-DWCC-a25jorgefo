const arrayEntrada = [10, 2, 3, 5, 7, 8, 23, 50];

const numerosImpares = (arrayEntrada) => {
    const impares=[];
    for (const element of arrayEntrada) {
        if (!(element % 2 == 0)) {
            impares.push(element)
        } 
    }
    return impares
}

console.log(numerosImpares(arrayEntrada));
