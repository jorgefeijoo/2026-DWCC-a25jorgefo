const gameEvents = new Map([
[17, "GOAL"],
[36, "Substitution"],
[47, "GOAL"],
[61, "Substitution"],
[64, "Yellow card"],
[69, "Red card"],
[70, "Substitution"],
[72, "Substitution"],
[76, "GOAL"],
[80, "GOAL"],
[92, "Yellow card"],
]);

const set1 = new Set();
for (const [key,value] of gameEvents) {
    set1.add(value)  
}
const eventos = [...set1]
console.log(eventos);
 
//parte 2

for (const [min,event] of gameEvents) {
    if (min <=45) {
       console.log( `[PRIMERA PARTE]${min}:${event}`);
       
        
    } else {
        console.log(`[SEGUNDA PARTE]${min}:${event}`);
    }
}