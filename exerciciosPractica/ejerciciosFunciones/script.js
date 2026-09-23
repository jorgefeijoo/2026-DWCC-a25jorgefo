function descuento(precio=20 , porcentaje=10) {
    console.log('El precio original es: '+precio);
    console.log('El porcentaje que se le aplica es :  ' + porcentaje);
    let precioFinal;
    precioFinal = precio - (precio*(porcentaje/100));
    console.log('El precio final del producto con el porcentaje aplicado es de : ' + precioFinal);
    
}

descuento();