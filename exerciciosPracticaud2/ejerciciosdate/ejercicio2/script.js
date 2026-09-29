function numDias(mes, ano) {
  let bisiesto = false;
  let numDias;
  if (ano % 4 == 0 && (ano % 100 != 0 || ano % 400 == 0)) {
    bisiesto = true;
  }
  switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      numDias = 31;
      break;
    case 2:
      if (bisiesto) {
        numDias = 29;
      } else {
        numDias = 28;
      }
      break;
    case 4:
    case 6:
    case 9:
    case 11:
      numDias = 30;
      break;
  }
  return numDias;
}

console.log(numDias(2, 2024));
