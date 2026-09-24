const persona1 = {
  peso: 62.5,
  altura: 1.7,
};

const persona2 = {
  peso: 80.5,
  altura: 1.85,
};

let imc1 = persona1.peso / (persona1.altura * persona1.altura);
let imc2 = persona2.peso / (persona2.altura * persona2.altura);

if (imc1 > imc2) {
  console.log(
    'O IMC' +
      imc1.toFixed(2) +
      ' da primeira persona es mayor que o da segunda persona ' +
      imc2.toFixed(2),
  );
} else {
  console.log(
    'O IMC ' +
      imc2.toFixed(2) +
      ' da segunda es mayor que el de la primera persona ' +
      imc1.toFixed(2),
  );
}

// el to fixed es para indicar el numero de decimales con el que quieres que se imprima el numero
