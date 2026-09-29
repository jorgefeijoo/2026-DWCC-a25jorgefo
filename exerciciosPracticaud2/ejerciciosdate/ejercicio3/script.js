function esFinDeSemana(fecha) {
  const diaSemana = [
    'Domingo',
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
    'Sabado',
  ];
  let dia = new Date(fecha);
  let numeroSemana = dia.getDay();

  if (
    diaSemana[numeroSemana] == 'Sabado' ||
    diaSemana[numeroSemana] == 'Domingo'
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(esFinDeSemana('2026-07-25'));
