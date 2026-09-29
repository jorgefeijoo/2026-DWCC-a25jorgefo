const numeros = [1, 3, 5, 1, 4, 1, 6, 8, 10, 1];
function indices(elemento, arrayElementos) {
  const indice = [];
  for (let i = 0; i < arrayElementos.length; i++) {
    if (arrayElementos[i] == elemento) {
      indice.push(i);
    }
  }
  return indice;
}

console.log(indices(1, numeros));
