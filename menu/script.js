let opcion;

do{
    opcion = parseInt(prompt("que quiere hacer 1-comprar remera 2-comprar pantalon 3-salir"))

    switch(opcion){
        case 1:
            console.log("comprar remera")
            break
        case 2:
            console.log("comprar pantalon")
            break
        case 3:
            console.log("salir")
            break
        default:
            console.log("no ha elegido ninguna opcion")
            alert("no ha elegido ninguna opcion")
        break
    }
}while(opcion!=3)