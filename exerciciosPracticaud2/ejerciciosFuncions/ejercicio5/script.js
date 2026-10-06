const minMax = (arrayNumeros) => {
    let min = arrayNumeros[0]
    let max = arrayNumeros[0]
    let minimoMaximo={}
    for (const element of arrayNumeros) {
        if (element<min) {
            min = element
        }
        if (element > max) {
            max = element
        }
    }
    minimoMaximo['min'] = min
    minimoMaximo['max'] = max
    return minimoMaximo


}

console.log(minMax([1,2,3,4,5]));
