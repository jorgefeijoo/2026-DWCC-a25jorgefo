//O elemento con id “input2”.
const elementoInput2 = document.getElementById('input2');
console.log(elementoInput2);

//A colección de parágrafos
const coleccionParrafos = document.querySelectorAll('p')
console.log(coleccionParrafos);

//Todos os parágrafos dentro do div con id “lipsum”
const parrafosIdLipsum = document.querySelectorAll('#lipsum p')
console.log(parrafosIdLipsum);

//O formulario
const formulario = document.querySelector('form')
console.log(formulario);

//Todos os inputs
const todosInputs = document.querySelectorAll('input')
console.log(todosInputs);

//Só os inputs con nome “sexo”
const inputNomeSexo = document.getElementsByName('sexo')
console.log(inputNomeSexo);

//Os items da lista con clase “important”
const itemsImportant = document.querySelectorAll('.important')
console.log(itemsImportant);

