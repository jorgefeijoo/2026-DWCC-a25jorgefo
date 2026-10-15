const diasSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado', 'domingo']


const empiezaM = diasSemana.filter(function diasSemanaM(dias) {
    let empiezaM = dias.startsWith('m')
    return empiezaM
})

console.log(empiezaM);

//b
const empiezaS = diasSemana.some(function empiezaS(dias) {
    return dias.startsWith('s')
})
if (empiezaS) {
    console.log('algun dia empieza con S');

}
else {
    console.log('ningun dia empieza por s');

}

//c

const acabanS = diasSemana.every(function acabanS(dias) {
    return dias.endsWith('s')
})
if (acabanS) {
    console.log('Todos los dias acaban en S');

}
else {
    console.log('No todos los dias acaban acaban en S');

}

//d
const primeroEmpiezaM = diasSemana.find(function primeroEmpiezaM(dias) {
    return dias.startsWith('m')

})
console.log('El primer dia que empieza por m es : ' + primeroEmpiezaM);

//e

const posicionPrimeroEmpiezaM = diasSemana.findIndex(function primeroEmpiezaM(dias) {
    return dias.startsWith('m')

})


console.log('La posicion del primer elemento que empieza por m es : ' + posicionPrimeroEmpiezaM);

//f 
const diasSemanaMayuscula = diasSemana.map(function diasSemanaMayuscula(dias) {
    return dias.toUpperCase()
})

console.log(diasSemanaMayuscula);
