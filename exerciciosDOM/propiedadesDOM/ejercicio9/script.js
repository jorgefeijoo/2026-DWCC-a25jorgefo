const tabla = document.getElementById("taboaOrdenar")


// for (let i = 0; i < arrayFilas.length; i++) {
//     const element = arrayFilas[i];
//     arrayColumnas.push(element.cells)
//     for (let j = 0; j < arrayColumnas.length; j++) {
//         const element = arrayColumnas[i][j];
//         if (j == 0 && i > 0) {
//             console.log(element.innerText);
//             arrayNomes.push(element.innerText)
//         }


//     }
// }


// const mapTr = arrayTr.map(
//     function ordenarNombres(tr) {
//         const primeroTd = tr.querySelector("td")
//         return primeroTd.innerText

//     }
// )

const tbody = document.querySelector("tbody")
const todosTr = document.querySelectorAll("tbody tr")
const arrayTr = Array.from(todosTr)

function compareNumbers(a, b) {
    const nombreA = a.children[0].innerText
    const nombreB = b.children[0].innerText


    if (nombreA < nombreB) {
        return -1;
    } else if (nombreA > nombreB) {
        return 1;
    } else
        return 0;

    // return nombreA - nombreB
}
const arrayOrdenado = arrayTr.sort(compareNumbers);

for (const element of arrayOrdenado) {
    tbody.append(element);
}










