const boton = document.getElementById("boton")

function valores() {
    const texto = document.querySelector("input")

    console.log('El valor que tiene el input es: ' + texto.value);

    const select = document.getElementById("select")

    console.log('El valor que tiene el select es: ' + select.value);

    const textArea = document.getElementById("textArea")

    console.log('El valor que tiene el textArea es: ' + textArea.value);

    const checkbox = document.getElementById("checkbox")

    console.log('El valor que tiene el checkbox es: ' + checkbox.checked);

    const radio1 = document.getElementById("radio1")
    const radio2 = document.getElementById("radio2")

    if (radio1.checked) {
        console.log('El valor del radio es: ', radio1.value);
    } else if (radio2.checked) {
        console.log('El valor del radio es: ', radio2.value);
    } else {
        console.log('no hay ninguna opcion seleccionada');

    }
}

boton.addEventListener('click', valores)

