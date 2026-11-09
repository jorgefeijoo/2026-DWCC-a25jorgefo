const lista = document.querySelector("ul")
const todosli = document.querySelectorAll("li")
const arrayLi = Array.from(todosli)


function engadirSelected(e) {
    e.target.classList.toggle("selected");

    for (const element of arrayLi) {
        if (element != e.target) {
            element.classList.remove("selected");
        }
    }

}

lista.addEventListener('click', engadirSelected)