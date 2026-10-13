function buscaminas(partida) {
    minas = []
    for (let i = 0; i < partida.length; i++) {
        minas[i] = []
        for (let j = 0; j < partida[i].length; j++) {
            if (partida[i][j] === -1) {
                minas[i][j] = -1
            } else {
                minas[i][j] = calcularMinasAdxacentes2(tableiro, i, j)
            }

        }

    }
}
function calcularMinasAdxacentes2(tableiro, x, y) {
    let minasEncontradas = 0
    for (let i = -1; i <= 1; i++) {
        for (let j = -1; j <= 1; j++) {
            if (tableiro[x + i]?.[y + j] === -1) {
                minasEncontradas++;
            }
        }
    }
}

entrada = [
    [-1, 0, 0]
    [0, 0, 0]
    [0, 0, 0]
]

buscaminas(entrada)