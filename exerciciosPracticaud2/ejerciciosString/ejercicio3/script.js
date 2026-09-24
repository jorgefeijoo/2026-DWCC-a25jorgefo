function enmascarar(cadea) {
  const ultimos4digitos = cadea.slice(-4);
  let cadeaFinal = ultimos4digitos.padStart(cadea.length, '*');

  return cadeaFinal;
}

console.log(enmascarar('1234567891'));
