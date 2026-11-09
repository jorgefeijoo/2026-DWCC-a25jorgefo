const contents = document.getElementById("contents")

function confirmacionEnlaces(e) {

    let elemento = e.target;

    while (elemento.tagName != "A" && elemento != contents) {
        elemento = elemento.parentElement;
    }

    if (elemento.tagName == "A") {
        const confirmeixon = window.confirm("Estas seguro que quieres ir al enlace")

        if (!confirmeixon) {
            e.preventDefault();
        }
    }

}

contents.addEventListener("click", confirmacionEnlaces)

