function numDias(fecha) {
  let data = new Date(fecha);
  let año = data.getFullYear().toString();
  let fechaInicial = new Date(año + '-' + '01-1');

  let milisegundosFinal = data.valueOf();
  let milisegundosInicial = fechaInicial.valueOf();

  let diferencia = milisegundosFinal - milisegundosInicial;

  let resultado = (diferencia / 86400000).toFixed();

  console.log(milisegundosFinal);
  console.log(milisegundosInicial);

  return resultado;
}

console.log(
  'El numero de dias desde el 1 de enero es de: ' + numDias('2026-03-01'),
);
