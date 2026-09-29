function primeraLetraMayuscula(frase) {
  let fraseMinusculas = frase.toLowerCase();
  let novoArray = fraseMinusculas.split(' ');
  let palabrita;
  for (let i = 0; i < novoArray.length; i++) {
    palabrita = novoArray[i];
    novoArray[i] = palabrita.at(0).toUpperCase() + palabrita.substring(1);
  }
  let resultado = novoArray.join(' ');
  return resultado;
}

console.log(primeraLetraMayuscula('eu a teño dende que xogou contra o coruso'));
