let numero = 578;
let resultado = '';

if (Number.isInteger(numero)) {
  resultado = numero.toString();
  console.log('El numero de cifras del numero es: ' + resultado.length);
} else {
  console.log('El numero no es un numero entero');
}
