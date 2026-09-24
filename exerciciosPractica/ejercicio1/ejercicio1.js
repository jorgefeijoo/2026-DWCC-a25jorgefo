let diaSemana = 'Martes';

let diaSemanaMinusculas = diaSemana.toLowerCase();

switch (diaSemanaMinusculas) {
  case 'lunes':
    console.log('Es dia laborable');
    break;

  case 'martes':
    console.log('Es dia laborable');

    break;

  case 'miercoles':
    console.log('Es dia laborable');

    break;

  case 'jueves':
    console.log('Es dia laborable');

    break;
  case 'viernes':
    console.log('Es dia laborable');

    break;
  case 'sabado':
    console.log('No es dia laborable');

    break;
  case 'domingo':
    console.log('No es dia laborable');
  default:
    console.log('O valor introducido non e un dia da semana');

    break;
}

//Otra posible solucion

// let diaSemana = 'Martes';

// let diaSemanaMinusculas = diaSemana.toLowerCase();

// switch (diaSemanaMinusculas) {
//   case 'lunes':
//   case 'martes':
//   case 'miercoles':
//   case 'jueves':
//   case 'viernes':

//     console.log('Es dia laborable');
//     break;
//   case 'sabado':
//   case 'domingo':
//     console.log('No es dia laborable');
//       break;
//   default:
//     console.log('O valor introducido non e un dia da semana');

//     break;
// }
