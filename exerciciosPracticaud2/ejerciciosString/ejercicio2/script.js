function cadeaReversa(cadea) {
  let resultado = '';

  for (let i = cadea.length - 1; i >= 0; i--) {
    resultado = resultado + cadea.at(i);
  }
  return resultado;
}

console.log(cadeaReversa('I am a string'));
