const tbody = document.querySelector("tbody");
const thead = document.querySelector("thead");

const tr = document.querySelectorAll("tbody tr");

const todosTR = Array.from(tr);


function ordenar(e) {

    if (e.target.tagName == "TH") {
        const indice = e.target.cellIndex;
        if (e.target.dataset.type == "number") {
            const arrayOrdenadoNumbers = todosTR.sort((a, b) => {
                const numA = a.children[indice].innerText;
                const numB = b.children[indice].innerText;

                return numA - numB;
            });
            for (const element of arrayOrdenadoNumbers) {
                tbody.append(element);
            }
        } else if (e.target.dataset.type == "string") {
            const arrayOrdenadoString = todosTR.sort((a, b) => {
                const nombreA = a.children[indice].innerText;
                const nombreB = b.children[indice].innerText;

                if (nombreA < nombreB) {
                    return -1
                } else if (nombreA > nombreB) {
                    return 1;
                } else {
                    return 0;
                };
            });
            for (const element of arrayOrdenadoString) {
                tbody.append(element);
            }
        }
    }
}
thead.addEventListener("click", ordenar);