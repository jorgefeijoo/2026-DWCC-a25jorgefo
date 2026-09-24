function areaCirculo(radio) {
    let resultado;
    if (Number.isNaN(radio)) {
        console.log('debes introducir un numero');

    } else {
        resultado =  Math.PI * (radio*radio);
        return resultado
    }
}

console.log('el area del circulo es: ' + areaCirculo(4));

function perimetroCirculo(radio) {
     let resultado;
    if (Number.isNaN(radio)) {
        console.log('debes introducir un numero');

    } else {
        resultado = 2 * Math.PI * radio;
        return resultado
    }
}

console.log('El perimetro del circulo es: '+perimetroCirculo(2));
