const imagen = document.querySelector("img")

imagen.addEventListener("click", () => (console.log('evento click')));
imagen.addEventListener("dblclick", () => (console.log('evento dblclick')));
imagen.addEventListener("contextmenu", () => (console.log('evento contextmenu')));
imagen.addEventListener("mousedown", () => (console.log('evento mousedown')));
imagen.addEventListener("mouseup", () => (console.log('evento mouseup')));
imagen.addEventListener("wheel", () => (console.log('evento wheel')));
imagen.addEventListener("mouseover", () => (console.log('evento mouseover')));
imagen.addEventListener("mouseout", () => (console.log('evento mouseout')));
imagen.addEventListener("dragstart", () => (console.log('evento dragstart')));
imagen.addEventListener("drag", () => (console.log('evento drag')));
imagen.addEventListener("dragend", () => (console.log('evento dragend')));
