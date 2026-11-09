const imaxes = document.querySelector("ul");
const grande = document.getElementById("largeImg")

function imaxeGrande(e) {
    e.preventDefault();
    const imaxeGrande = e.target.parentElement.href
    const altImaxe = e.target.parentElement.title
    grande.src = imaxeGrande
    grande.alt = altImaxe
}

imaxes.addEventListener("click", imaxeGrande)