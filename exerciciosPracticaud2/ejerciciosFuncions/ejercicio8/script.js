function billetes(numero) {
    const valores = [500, 200, 100, 50, 20, 10, 5, 2, 1]


    for (const element of valores) {


        let cantidadeNecesario = 0;
        if (numero >= element) {
            cantidadeNecesario = Math.floor(numero / element)
            numero = numero % element


            if (element >= 5) {
                console.log('se necesitan ' + cantidadeNecesario + ' de billetes de ' + element + " € ");

            } else {
                console.log('se necesitan ' + cantidadeNecesario + ' de monedas de ' + element + ' €');

            }
        }
    }




}


billetes(59)
