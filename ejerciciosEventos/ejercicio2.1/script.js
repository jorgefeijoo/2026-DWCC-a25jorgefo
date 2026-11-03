const divPai = document.getElementById("container")
const todosDiv = document.querySelectorAll("#container div")
const arrayDivs = Array.from(todosDiv)


function borrarDiv(e) {
    if (e.target.tagName == "BUTTON") {
        const parent = e.target.parentElement
        parent.style.display = 'none'

    }

}



divPai.addEventListener('click', borrarDiv)


