const xhr = new XMLHttpRequest();
xhr.open('GET', 'gatas.json');
xhr.responseType = 'json';
xhr.send();


xhr.addEventListener('load', function () {
    const obxecto = xhr.response;
    const arrayNombres = []
    let cadena = ''
    let cantidad = []
    let cadenaCantidad
    const paragrafo = document.createElement("p")
    const paragrafo2 = document.createElement("p")

    let hombres = 0
    let mujeres = 0

    for (const element of obxecto) {
        arrayNombres.push(element.name)
    }
    for (let i = 0; i < arrayNombres.length; i++) {
        const element = arrayNombres[i];
        cadena += element
        if (i == arrayNombres.length - 1) {
            cadena += '.'
        } else if (i == arrayNombres.length - 2) {
            cadena += ' e '
        } else {
            cadena += ' , '
        }
    }

    for (let i = 0; i < obxecto.length; i++) {
        for (let j = 0; j < obxecto[i].kittens.length; j++) {
            const element = obxecto[i].kittens[j];
            cantidad.push(element)
            console.log(element);
            if (element.gender == "m") {
                hombres += 1
            }
            if (element.gender == "f") {
                mujeres += 1
            }

        }

        cadenaCantidad = 'Hai ' + cantidad.length + ' gatiños: ' + mujeres + ' femias e ' + hombres + ' machos'

    }

    paragrafo.append(cadena)
    document.body.append(paragrafo)
    paragrafo2.append(cadenaCantidad)
    document.body.append(paragrafo2)

});