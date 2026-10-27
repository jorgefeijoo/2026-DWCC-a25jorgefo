'use strict';

// Engade a clase CSS "color-title" ao elemento con id "tituloPrincipal" 

const tituloPrincipal = document.getElementById("tituloPrincipal")
tituloPrincipal.classList = "color-title"

// Crea un novo elemento <li> coa clase CSS "item-lista" e o texto "Item 5". Engade este elemento á lista desordenada

const ul = document.getElementById("lista");
const novoLi = document.createElement("li");
novoLi.classList = "item-lista";
const texto = document.createTextNode('Item 5');
novoLi.append(texto);
ul.append(novoLi);
// Modifica o ancho do div con id "contedor" a 800px usando JavaScript 

const div = document.getElementById("contedor");
div.style.width = "800px";

// Cambia o valor do atributo "placeholder" do input a "Escribe aquí..." 

const input = document.getElementById("entradaTexto");
// const placeholder = input.getAttribute("placeholder")
// placeholder.textContent = "Escribe aqui ..."

input.placeholder = "Escribe aqui...";

// Selecciona a lista con id "lista" e cámbialle o tamaño da fonte a 18px

const lista = document.getElementById("lista");
lista.style.fontSize = "18px";

// Elimina o segundo elemento da lista (Item 2)
const li = document.querySelectorAll("ul li")
const liEliminar = li[1]
liEliminar.remove()


// Insire un novo parágrafo co texto "Texto dinámico" despois do elemento con id "mensaxe" 

const mensaxe = document.getElementById("mensaxe")
const texto3 = document.createTextNode('Texto dinamico')
const paragrafo = document.createElement('p')
paragrafo.append(texto3)
mensaxe.after(paragrafo)



