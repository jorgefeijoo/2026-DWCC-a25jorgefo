const todosLi = document.querySelectorAll("ol li")
const todosLiArray = Array.from(todosLi)

for (const element of todosLiArray) {
    element.remove()
}
