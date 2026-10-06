function validarDNI(numero) {
    const letrasDNI = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'];

    const letraCalculada = letrasDNI[numero % 23]
    
    return letraCalculada
}

console.log(validarDNI(46290351));
