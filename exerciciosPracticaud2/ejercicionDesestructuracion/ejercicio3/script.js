const flightsInfo =
  '_Delayed_Departure;scq93766109;bio2133758440;11:25+_Arrival;bio0943384722;scq93766109;11:45+_Delayed_Arrival;svq7439299980;scq93766109;12:05+_Departure;scq93766109;svq2323639855;12:30';

let separacion = flightsInfo.split('+');

for (let i = 0; i < separacion.length; i++) {
  let cacho = separacion[i];
  let cachosSeparados = cacho.split(';');
  let quitarBarraBajas = cachosSeparados[0].replaceAll('_', ' ');
  let aeropuertoMayuscula = cachosSeparados[1].slice(0, 3).toUpperCase();
  let terceraParte = cachosSeparados[2].slice(0, 3).toUpperCase();
  let horaCambiada = cachosSeparados[3].replace(':', 'h');

  let cadeaFinal =
    quitarBarraBajas +
    ' ' +
    aeropuertoMayuscula +
    ' ' +
    terceraParte +
    ' ' +
    '(' +
    horaCambiada +
    ')';
  console.log(cadeaFinal);
}
