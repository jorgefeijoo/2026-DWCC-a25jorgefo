const ul = document.querySelector("ul")


for (let i = 0; i < 4; i++) {
    const li = document.createElement("li")
    //const text = document.createNodeText('i')
    li.append(i)
    ul.append(li)
}