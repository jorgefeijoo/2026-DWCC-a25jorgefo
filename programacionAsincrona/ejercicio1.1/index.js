const xhr = new XMLHttpRequest();
xhr.open('GET', 'gatas.json');
xhr.responseType = 'json';
xhr.send();


xhr.addEventListener('load', function () {
    const obxecto = xhr.response;
    const arrayNombres = []
    let cadena = ''
    let cadenaCantidad
    const paragrafo = document.createElement("p")

    for (const element of obxecto) {
        arrayNombres.push(element.name)
    }
    for (const element of arrayNombres) {
        cadena += element + ' , '
    }
    console.log(cadena);

    paragrafo.append(cadena)
    document.body.append(paragrafo)

});