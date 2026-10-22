const tabla = document.querySelector("tbody")

const arrayFilas = Array.from(tabla.rows);
let arrayColumnas = []

for (let i = 0; i < arrayFilas.length; i++) {
    const element = arrayFilas[i];
    arrayColumnas.push(element.cells)
    for (let j = 0; j < arrayColumnas.length; j++) {
        const element = arrayColumnas[i][j];
        if (arrayColumnas[i] === arrayColumnas[j]) {
            element.style.backgroundColor = "aqua"
        }
    }
}




