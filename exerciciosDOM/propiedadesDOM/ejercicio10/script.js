const lista = document.getElementById("listaAnimais")
const todosli = lista.querySelectorAll("li")

// console.log(arrayUl);
// console.log(todosUl);

for (const element of todosli) {
    const tieneUl = element.querySelector("ul")

    if (tieneUl) {
        const numeroDeHijos = tieneUl.children.length

        console.log(numeroDeHijos);
        
        tieneUl.before("[" +numeroDeHijos + "]")
    }
    
}

    
    

