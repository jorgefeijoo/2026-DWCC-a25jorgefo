const lista = document.getElementById("listaAnimais")
const todosUl = lista.querySelectorAll("ul")
const arrayUl = Array.from(todosUl)

// console.log(arrayUl);
// console.log(todosUl);

for (let i = 0; i < arrayUl.length; i++) {
    const element = arrayUl[i];
    console.log(element);



}