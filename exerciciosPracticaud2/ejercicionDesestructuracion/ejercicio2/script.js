const variables = ["first_name", "last_name"]

for (const element of variables) {
    if (element.indexOf("_") !== -1) {
        let posicion = element.indexOf("_");
        let caracterOriginal = element.charAt(posicion + 1)
        let letraMayuscula = caracterOriginal.toUpperCase()
        let nuevaVariable = element.replace("_" + caracterOriginal, letraMayuscula)
        console.log(nuevaVariable);   
    }
}
  

