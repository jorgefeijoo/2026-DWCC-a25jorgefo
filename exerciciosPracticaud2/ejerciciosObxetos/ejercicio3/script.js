const game = {
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
};

let numGoles = 1;
for (const element of game.scored) {
  console.log(`gol ${numGoles} : ${element}`);
  numGoles++;
}

let scorers = {};
let contador = 1;

for (let index = 0; index < game.scored.length; index++) {
  const element = game.scored[index];

  if (!Object.hasOwn(scorers, element)) {
    scorers[element] = 1;
  } else {
    scorers[element]++;
  }
}
console.log(scorers);
