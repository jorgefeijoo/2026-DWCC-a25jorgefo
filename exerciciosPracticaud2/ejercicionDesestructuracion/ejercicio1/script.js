const players = [
[
"Neuer",
"Pavard",
"Martinez",
"Alaba",
"Davies",
"Kimmich",
"Goretzka",
"Coman",
"Muller",
"Gnarby",
"Lewandowski",
],
[
"Burki",
"Schulz",
"Hummels",
"Akanji",
"Hakimi",
"Weigl",
"Witsel",
"Hazard",
"Brandt",
"Sancho",
"Gotze",
],
];

//parte 1
const [players1,players2]=players;

//parte 2
const [gk, ...fieldPlayers]=players1

console.log('portero: '+gk);
console.log('resto de jugadores : '+fieldPlayers);

//parte 3
const allPlayers=[...players1, ...players2]

console.log(allPlayers);

//parte 4
let players1Final=[...players1,'Thiago','Coutinho','Perisic']

console.log(players1Final);

