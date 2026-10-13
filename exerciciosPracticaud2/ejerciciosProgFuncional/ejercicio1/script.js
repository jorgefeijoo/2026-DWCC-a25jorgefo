const persoas = [
    { nome: 'aaron', idade: 65, id: 1 },
    { nome: 'beth', idade: 2, id: 2 },
    { nome: 'ánxeles', idade: 13, id: 3 },
    { nome: 'daniel', idade: 3, id: 4 },
    { nome: 'ada', idade: 25, id: 5 },
    { nome: 'erea', idade: 1, id: 6 },
    { nome: 'navia', idade: 43, id: 7 },
]

const mayoresIdade = persoas.filter(function mayoresIdade(persoa) {
    return persoa.idade >= 18
})

console.log(mayoresIdade);

//b

const nomes = persoas.map((persoa) => persoa.nome)

console.log(nomes);

//c

const nomeMayusculas = persoas.filter(function mayoresIdade(persoa) {

    return persoa.idade >= 18
}).map((persoa) => persoa.nome.toUpperCase())

console.log(nomeMayusculas);

//d
const nomesId = persoas.map((persoa) => ({ nome: persoa.nome, id: persoa.id }))

console.log(nomesId);
