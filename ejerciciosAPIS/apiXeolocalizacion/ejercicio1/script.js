/*2. Crea unha aplicación web na que se poidan marcar puntos nun mapa e que se
almacenen no LocalStorage. A aplicación debe ofrecer as seguintes funcionalidades:
a. Inicialmente debe mostrar un mapa centrado en Galicia ou Santiago de
Compostela, o que ti escollas.
b. No lateral da páxina, haberá unha zona reservada para mostrar o listado de puntos creados no mapa.

c. Cando se pulse sobre punto do mapa aparecerá un formulario no lateral con,polo menos, unha caixa de texto para escribir unha descrición do punto. A caixa de texto debe ter o foco de forma automática. Podes engadir máis campos ao formulario para describir mellor o novo punto.

d. Para gardar un novo punto no mapa, simplemente haberá que pulsar
ENTER, estando o foco na caixa de texto.

e. A aplicación almacena a lista de puntos gardados e mostra no lateral unha
lista coa descrición de cada un en todo momento.
9
APIs de JavaScript
f. Cando se pulsa sobre un punto da lista especificada no apartado anterior, o
mapa reposicionarase mostrando o marcador no centro xunto con un popup
coa descrición do punto.
g. Deben poder eliminarse marcadores.
h. Os puntos gardados na aplicación deben permanecer aínda que se cerre o
navegador. */

import {
    LeafletMap,
    TileLayer,
    Marker,
    CircleMarker,
    Control,
    DomUtil,
    Popup,
    Circle,
    Polyline,
    Polygon,
} from 'leaflet';

const formulario = document.getElementById("formPuntos")
const map = new LeafletMap('map').setView([42.8805, -8.5456], 13);
const botonAñadir = document.getElementById("botonAñadir")
const descripcion = document.getElementById("descripcion")

if ("geolocation" in navigator) {
    /* geolocation is available */
    navigator.geolocation.getCurrentPosition(
        function (posicion) {
            console.log(posicion);
            // desestruturación de obxectos
            const { latitude, longitude } = posicion.coords;
            console.log(`latitude: ${latitude}, lonxitude: ${longitude}`);
            map.setView([latitude, longitude], 17);



        },
        function (error) {
            console.log(`ERROR(${error.code}): ${error.message}`);
        }
    );
} else {
    /* geolocation IS NOT available */
}



new TileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let popup = new Popup();

function onMapClick(e) {
    let marker = new Marker(e.latlng).addTo(map);

    popup
        .setLatLng(e.latlng)
        .setContent(
            'You clicked the map at -<br>' +
            '<b>lon:</b> ' +
            e.latlng.lng.toFixed(6) +
            '<br>' +
            '<b>lat:</b> ' +
            e.latlng.lat.toFijxed(6)
        ).openOn(map)

}

function barraLateral(e) {
    formulario.classList.remove('oculto')
    descripcion.focus()
}

//tengo que crear unas variables fuera para guardarle el valor de las coordenadas y  darles el valor en barralateral y despues usarlas en añadir lista
function añadirLista(e) {
    e.preventDefault()
    const ul = document.querySelector("ul")
    const li = document.createElement("li")
    const cadena = descrihpcion.value + " ( " + e.latlng.lng.toFixed(6) + " , " + e.latlng.lat.toFixed(6) + " ) "
    li.append(cadena)
    console.log(li);

    ul.append(li)


}

botonAñadir.addEventLigstener('click', añadirLista)
map.on('click', barraLateral)
map.on('click', onMapClick)








