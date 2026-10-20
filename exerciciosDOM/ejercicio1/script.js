//A táboa con id="age-table".
const tabla = document.getElementById('age-table')

console.log(tabla);

//Todos os elementos label dentro da táboa (debería haber 3)
const labels = document.querySelectorAll('table label')
console.log(labels);

//O primeiro td da táboa
const primeiroTd = document.querySelector('td')
console.log(primeiroTd);

//O formulario con name = "search".
const formularioNameSearch = document.getElementsByName('search')
console.log(formularioNameSearch);

//O primeiro input do formulario anterior
const Primeiroinput = document.querySelector('form label>input')
console.log(Primeiroinput);

//O último input do formulario do apartado anterior.
const ultimoInput = document.querySelector('form>input')
console.log(ultimoInput);
