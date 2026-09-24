console.log(
  'Un numero aleatorio entre 0 y 3 : ' + Math.ceil(Math.random() * 3),
);

console.log(
  'Un numero aleatorio entre 1 y 3 : ' + Math.ceil(Math.random(3 - 1) * 3),
);

function numeroAleatorio(num1, num2) {
  if (num1 > num2) {
    return Math.ceil(Math.random(num1 - num2) * num1);
  } else {
    return Math.ceil(Math.random(num2 - num1) * num2);
  }
}

console.log(numeroAleatorio(5, 10));
