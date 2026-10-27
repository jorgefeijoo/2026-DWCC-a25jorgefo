let arbore = {
    Fish: {
        trout: {},
        salmon: {},
    },
    Tree: {
        Huge: {
            sequoia: {},
            oak: {},
        },
        Flowering: {
            'apple tree': {},
            magnolia: {},
        },
    },
};



function createTree(data) {

    const objectoArray = Object.keys(data)
    const ul = document.createElement("ul")


    for (const element of objectoArray) {
        const li = document.createElement("li")
        li.append(element)

        if (Object.keys(data[element]).length != 0) {
            li.append(createTree(data[element]))
        }
        ul.append(li)
    }
    return ul

}

const ul = createTree(arbore)
const body = document.body
body.append(ul)





