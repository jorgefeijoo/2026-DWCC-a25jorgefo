const variables = ["first_name", "last_name"]

for (let i = 0; i < variables.length; i++) {
    let variable = variables[i]

    if (variable.indexOf("_") !== -1) {
        let posicion = variable.indexOf("_");
        let caracterOriginal =variable.charAt(posicion + 1)
        let letraMayuscula = caracterOriginal.toUpperCase()
        let nuevaVariable=variable.replace("_" + caracterOriginal, letraMayuscula)

        variables[i]=nuevaVariable
    }
    else{
        console.log("la variable no tiene el caracter");
        
    }

}


for (const element of variables) {
    console.log(element);

}