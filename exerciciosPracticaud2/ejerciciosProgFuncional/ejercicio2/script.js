const diasSemana = [lunes, martes, miercoles, jueves, viernes, sabado, domingo]


const empiezaM = diasSemana.filter(function diasSemanaM(dias) {
    let empiezaM = dias.startWith('m')
    console.log(empiezaM);


})