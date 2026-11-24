const tabla = document.querySelector("table")

let turno = false

function marcar(e) {
    if (e.target.tagName = "TD") {
        if (!turno) {
            e.target.textContent = 'X'
            turno = true
        } else {
            e.target.textContent = 'O'
            turno = false
        }
        comprobaciones()
    }
}


function comprobaciones(params) {
    for (let i = 0; i < tabla.rows; i++) {
        for (const element of tabla.rows[i]) {
            console.log(element);

        }

    }
}




tabla.addEventListener('click', marcar)