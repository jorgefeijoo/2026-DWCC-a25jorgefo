function buscarPatron(texto, patron) {
    let encontrados = 0
    let textoMayusculas = texto.toUpperCase()
    let patronMayusculas = patron.toUpperCase()


    for (let i = 0; i < textoMayusculas.length; i++) {
        let numeroCoincidencias = 0
        for (let j = 0; j < patronMayusculas.length; j++) {
            if (texto[i + j] == patron[j]) {
                numeroCoincidencias++;
            }

        }

        if (numeroCoincidencias == patron.length) {
            encontrados++;
        }
    }
    return encontrados


}



console.log(buscarPatron('000111101000ABCHA', '00'));
