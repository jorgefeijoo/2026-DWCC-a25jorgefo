const inventors = [
    { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
    { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
    { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
    { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
    { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
    { first: "Max", last: "Planck", year: 1858, passed: 1947 },
    { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
    { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
    { first: "Sarah", last: "Goode", year: 1855, passed: 1905 },
    { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 },
]

//a Filtra o array de inventores e crea un array só cos inventores que naceron no século XVI
const filtrarSigloXVI = inventors.filter(function filtrarSigloXVI(inventores) {
    if (inventores.year > 1500 && inventores.year < 1600) {
        return inventores
    }
})

console.log(filtrarSigloXVI);

//b Crea un array co nome completo dos inventores: ["Albert Einstein", "Isaac Newton", ...]
const nomeInventores = inventors.map(function nomeInventores(inventores) {
    return `${inventores.first} ${inventores.last}`
})

console.log(nomeInventores);

//c. Unha vez obtido o array co nome completo dos inventores do exercicio anterior, ordénao alfabeticamente polo apelido


function compararPorApelido(a, b) {
    const apellidoA = a.slice(a.lastIndexOf(" ") + 1);
    const apellidoB = b.slice(b.lastIndexOf(" ") + 1);

    if (apellidoA < apellidoB) return -1;
    else if (apellidoA > apellidoB) return 1;
    else return 0;
}

const arrayOrdenadoApellido2 = nomeInventores.sort(compararPorApelido);
console.log(arrayOrdenadoApellido2);

//d Ordena alfabeticamente polo apelido o array de obxectos inventores inicial.

function compareNumbers(a, b) {
    if (a.last < b.last) return -1;
    else if (a.last > b.last) return 1;
    else return 0;
}
const arrayOrdenadoApellido = inventors.sort(compareNumbers);

console.log(arrayOrdenadoApellido);

//e. Ordena o array de inventores pola data de nacemento

function compareNumbers(a, b) {
    if (a.year < b.year) return -1;
    else if (a.year > b.year) return 1;
    else return 0;
}
const arrayOrdenadoFecha = inventors.sort(compareNumbers);

console.log(arrayOrdenadoFecha);

//f. Calcula a suma dos anos que viviron todos os inventores.

function reducer(accumulator, currentValue, index) {
    const returns = accumulator + currentValue.year;
    return returns;
}

const sumaNumeros = inventors.reduce(reducer, 0)


console.log('la suma de los años es : ' + sumaNumeros);

//g. Ordena os inventores polos anos que viviron, primeiro o máis lonxevo

function compareNumbers(a, b) {
    if (a.passed - a.year > b.passed - b.year) return -1;
    else if (a.passed - a.year < b.passed - b.year) return 1;
    else return 0;
}
const arrayOrdenadoLonxevidade = inventors.sort(compareNumbers);

console.log(arrayOrdenadoLonxevidade);



