//O innerHTML, innerText e textContent da etiqueta “Escolle sexo”:



//● Indica o valor do atributo data - widget - name

let escolleSexo = document.querySelectorAll('form label')
const labelSexo = escolleSexo[3];
console.log(labelSexo);
console.log(labelSexo.innerHTML);
console.log(labelSexo.innerText);
console.log(labelSexo.textContent);

//● O valor do primeiro input de sexo
const primeiroInput = labelSexo.querySelector('input')
console.log(primeiroInput);

//● O valor do sexo que estea seleccionado.
const nomeSexo = document.getElementsByName("sexo")


for (const element of nomeSexo) {
    if (element.hasAttribute('checked')) {
        console.log(element.value);
    }
}

const nomeSexo2 = document.querySelectorAll('form label > input')[4]
console.log('separacion');
console.log(nomeSexo2.value);


//● O texto de cada un dos elementos < li >
//● Indica cantos elementos < li > hai.

let contador = 0

const todosLi = document.querySelectorAll('li')


for (const element of todosLi) {
    console.log(element.innerText);
    contador++
}

console.log('El numero de elementos: ' + contador);



//● Indica o valor do atributo data - widget - name

const datawidgetname = document.querySelector('div div')
console.log(datawidgetname.dataset.widgetName);














