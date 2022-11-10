class Bebida{

    constructor (id,nombre,precio){

        this.id = id;
        this.nombre = nombre;
        this.precio = precio;

    }    
}

const gaseosa1 = new Bebida(001, "Coca Cola", 180);
const gaseosa2 = new Bebida(002, "coca cola Light", 180);
const gaseosa3 = new Bebida(003, "Sprite", 160);
const gaseosa4 = new Bebida(004, "Monster", 160);

let BBDD = [gaseosa1,gaseosa2,gaseosa3,gaseosa4];

let saldo = Number(prompt("Ingrese su monto"));
let cocacola = BBDD[0].precio;
let cocacolaL = 180;
let sprite = 160;
let monster = 160;

let opciones = menu();




if (saldo > 0) {
    if (opciones <= 4) {

            let saldoExtraccion = validarOpcion(opciones, saldo);
            nuevaCompra(saldoExtraccion);

    } else {
        alert("Selecciono una opcion no valida!")
    }
} else {
    alert("No posee saldo suficiente para la compra")
}




// ------- funciones ------

function menu(){
    let opcion = Number(prompt("¡Hola! Bienvenido/a a Su expendedora de confianza!! \n ¿En qué podemos ayudarte? \n Elige una de las opciones:\n 1 - Coca Cola \n 2 - Coca Cola light \n 3 - Sprite \n 4 - Fanta"));
    return opcion;
}

function validarOpcion(opciones, saldo) {
let saldos
        switch (opciones) {
            case 1:
                alert("MMM rica cola!");
                saldos = calculoSaldo(saldo,cocacola);
                break;
            case 2:
                alert("Elegi lo que amas!");
                saldos = calculoSaldo(saldo, cocacolaL);
                break;
            case 3:
                alert("Las cosas como son!");
                saldos = calculoSaldo(saldo, sprite);
                break;
            case 4:
                alert("Energy!!");
                saldos = calculoSaldo(saldo, monster);
                break;
        }
        
        return saldos;
    }

function calculoSaldo(saldo, bebidas) {
    
    saldoCalculado = saldo - bebidas;

    if(saldoCalculado >= 0){
        alert("Su saldo es: $" + saldoCalculado);
        alert("Estamos liberando su elección!, un segundo!")
        return saldoCalculado;

} else {

    alert("No posee saldo suficiente para la compra usted tiene " + saldo + " y la bebida cuesta " + bebidas);
    return saldo;

}
}

function nuevaCompra(saldoExtraccion){
    
    let nCompra = validarRespuesta(prompt("Desea realizar una nueva compra? \n S - Si n\ N - No "));

    while(saldoExtraccion > 0 && opciones <= 4 && nCompra == "S" ||  nCompra == "s"){
        let opciones = menu();
        saldoExtraccion = validarOpcion(opciones, saldoExtraccion);
        nCompra = validarRespuesta(prompt("Desea realizar una nueva compra? \n S - Si n\ N - No "));
        }
        
  
    
}

function validarRespuesta(respuesta){
    while (respuesta != "N" && respuesta != "n" && respuesta != "S" && respuesta != "s"){
        respuesta = prompt("¡Debe colocar una respuesta valida! \n S - Si n\ N - No ")
    }
    return respuesta;
}

