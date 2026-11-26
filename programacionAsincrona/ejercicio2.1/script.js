const xhr = new XMLHttpRequest();
xhr.open('GET', 'superheroes.json');
xhr.responseType = 'json';
xhr.send();
const header = document.querySelector("header")
const section = document.querySelector("section")




xhr.addEventListener('load', function () {
    const obxecto = xhr.response;
    console.log(obxecto);

    const h1 = document.createElement("h1")
    h1.textContent = obxecto.squadName
    header.append(h1)
    const parrafo = document.createElement("p")
    let cadena = 'Hometown: ' + obxecto.homeTown + ' // Formed: ' + obxecto.formed
    parrafo.textContent = cadena
    header.append(parrafo)

    for (let i = 0; i < obxecto.members.length; i++) {
        const element = obxecto.members[i];
        const h2 = document.createElement("h2")
        const parrafo1 = document.createElement("p")
        const parrafo2 = document.createElement("p")
        const parrafo3 = document.createElement("p")
        const article = document.createElement("article")
        const ul = document.createElement("ul")
        const li = document.createElement("li")
        h2.textContent = element.name
        article.append(h2)


        parrafo1.textContent = 'Secret identity: ' + element.secretIdentity
        article.append(parrafo1)

        parrafo2.textContent = 'Age: ' + element.age
        article.append(parrafo2)

        parrafo3.textContent = 'Superporwers: '
        article.append(parrafo3)





        for (const power of element.powers) {
            const li = document.createElement("li");
            li.textContent = power;
            ul.append(li);
        }

        article.append(ul)
        section.append(article)

    }

});


