
function escribirNumero(desde, ata) {
    let contador = 0
    const intervalID = setInterval(myCallback, desde);
    function myCallback() {
        contador += 1
        console.log('contador: ' + contador);

    }
    setTimeout(() => {
        clearInterval(intervalID);
    }, ata)
}

escribirNumero(1000, 9000)