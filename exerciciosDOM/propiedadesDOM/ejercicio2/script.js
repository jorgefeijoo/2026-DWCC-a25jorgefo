//● O número de ligazóns da páxina.
const todosLigazons = document.querySelectorAll('a')
console.log(todosLigazons.length);

//● A dirección da penúltima ligazón.
const penultimoLigazon = todosLigazons[5]
console.log(penultimoLigazon.getAttribute('href'));

//● O número de ligazóns que apuntan a http://proba
let contador = 0
for (const element of todosLigazons) {
    if (element.getAttribute('href') == "http://proba/") {
        contador++;
    }
}
console.log(contador);

//● O número de ligazóns do terceiro parágrafo.
const todosParrafos = document.querySelectorAll('p')
const tercerParrafo = todosParrafos[2]
const ligazonsTercerParrafo = tercerParrafo.querySelectorAll('a')
console.log(ligazonsTercerParrafo.length);

//● Modifica o estilo das ligazóns que apuntan a http://proba para que teñan o texto de cor laranxa

for (const element of todosLigazons) {
    if (element.getAttribute('href') == "http://proba/") {
        element.style.color = "orange"
    }
}

