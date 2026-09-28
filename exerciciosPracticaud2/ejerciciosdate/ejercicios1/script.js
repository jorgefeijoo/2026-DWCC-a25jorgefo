const diaSemana = [
  'Domingo',
  'Lunes',
  'Martes',
  'Miercoles',
  'Jueves',
  'Viernes',
  'Sabado',
];
let dia = new Date('2026-07-25');
let numeroSemana = dia.getDay();

console.log(diaSemana[numeroSemana]);
