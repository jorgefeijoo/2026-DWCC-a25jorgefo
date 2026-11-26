
function loadImage(src, callback) {
    let image = document.createElement('img');
    image.src = src;
    document.body.append(image);
    image.addEventListener('load', callback);
}
loadImage('imagenAltaRes.jpg', () => {
    console.log('Primeira imagen cargada');
})
