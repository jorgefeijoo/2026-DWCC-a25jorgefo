function horas(numMinutos) {
  let resultado = '';
  resultado = `El ${numMinutos} equivale a ${(numMinutos / 60).toFixed()} horas y ${numMinutos % 60} minutos`;
  return resultado;
}

console.log(horas(121));
