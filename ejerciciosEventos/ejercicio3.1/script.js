const lista = document.getElementById("tree")
const todosli = document.querySelectorAll("li")


function ocultarHijos(e) {
    const ul = e.target.querySelector("ul")
    const texto = ul.children[0].firstChild
    console.log(texto);

    if (ul.style.display == 'none') {
        ul.style.display = 'block'
    }
    else {
        ul.style.display = 'none'
    }
}

lista.addEventListener('click', ocultarHijos)