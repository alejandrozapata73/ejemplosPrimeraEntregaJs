



//slide 11  Local Storage

localStorage.setItem('bienvenida2022', '¡Hola Coder local Storage!');
localStorage.setItem('esValido2022', true);
localStorage.setItem('unNumero2022', 20);

let mensaje =  localStorage.getItem('bienvenida2022');
let bandera =  localStorage.getItem('esValido2022');
let numero  =  localStorage.getItem('unNumero2022');

console.log(mensaje); // ‘¡Hola Coder!’
console.log(bandera); // ‘true’
console.log(numero);  // ‘20’


//SessionStorage

sessionStorage.setItem('sessionStorage','Esti es session');
sessionStorage.setItem('seleccionados',[1,2,3]);
sessionStorage.setItem('esValido',true),
sessionStorage.setItem('email','coder@gmail.com')

let lista = sessionStorage.getItem('seleccionados').split(",");
let bandera2 = sessionStorage.getItem('esValido');

console.log(typeof lista);
console.log(bandera2)


//Recorriendo el storage
console.log("+++++LocalStorage++++")
for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave LocalStorage: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}

for (let i = 0; i < sessionStorage.length; i++) {
    let clave = localStorage.key(i);
    console.log("Clave SessionStorage: "+ clave);
    console.log("Valor: "+ localStorage.getItem(clave));
}



//+++Eliminar datos del Storage

localStorage.setItem('bienvenida', '¡Hola Code!');
sessionStorage.setItem('esValido', true);

localStorage.removeItem('bienvenida');
sessionStorage.removeItem('esValido');
localStorage.clear()    //elimina toda la información
sessionStorage.clear() //elimina toda la información



//almacenar Objetos


const producto1 = { id: 2, producto: "Arroz" };
localStorage.setItem("producto1", producto1);


//Stringify
console.log("++++++++++Stringify+++++++++++")

const producto3 = { id: 3, producto: "fideo" };
const enJSON    = JSON.stringify(producto3);

console.log(enJSON); // {"id":3,"producto":"Fideo"}
console.log(typeof producto3); // object
console.log(typeof enJSON);    // string

localStorage.setItem("producto1", enJSON);
// Se guarda {"id":3,"producto":"Fideo"}


//Parse----
console.log("+++++++Parse++++")
const enJSON2   = '{"id":4,"producto":"ñoquis"}';
const producto4 = JSON.parse(enJSON2);

console.log(typeof enJSON);     // string
console.log(typeof producto4);  // object
console.log(producto4.producto); // Arroz

//transformar de localstorage
 const producto5 = JSON.parse(localStorage.getItem("producto1"));
console.log(producto1.id);     


//Ejemplo Aplicado 1---Almacenar array de objetos

const productos = [{ id: 1,  producto: "Arroz", precio: 125 },
                  {  id: 2,  producto: "Fideo", precio: 70 },
                  {  id: 3,  producto: "Pan"  , precio: 50},
                  {  id: 4,  producto: "Flan" , precio: 100}];

const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor) };
//Almacenar producto por producto
for (const producto of productos) {
    guardarLocal(producto.id, JSON.stringify(producto));
}
// o almacenar array completo
guardarLocal("listaProductos", JSON.stringify(productos));




//Ejemplo aplicado 2 almacenar array de objetos
class Producto {
    constructor(obj) {
        this.nombre  = obj.producto.toUpperCase();
        this.precio  = parseFloat(obj.precio);
    }
    sumaIva() {
        this.precio = this.precio * 1.21;
    }
}
//Obtenemos el listado de productos almacenado
const almacenados = JSON.parse(localStorage.getItem("listaProductos"));
const productosG = [];
//Iteramos almacenados con for...of para transformar todos sus objetos a tipo producto.
for (const objeto of almacenados)
    productos.push(new Producto(objeto));
//Ahora tenemos objetos productos y podemos usar sus métodos
for (const producto of productosG)
    producto.sumaIva();



//Recuperar datos++++
let usuario;
let usuarioEnLS = JSON.stringify(localStorage.getItem('usuario'))


// Si había algo almacenado, lo recupero. Si no le pido un ingreso
if (usuarioEnLS) {
    usuario = usuarioEnLS
} else {
    usuario = prompt('Ingrese su nombre de usuario')
}



let carrito = []
let carritoEnLS = JSON.stringify(localStorage.getItem('carrito'))

// Inicializo mi app con carrito como array vacío o con el registro que haya quedado en LS
if (carritoEnLS ) {
    carrito = carritoEnLS 
}

// Función que renderizaría el carrito
renderCarrito(carrito) 


// console.log(saludo)


// const productos = [
//     {
//         id: 123,
//         nombre: "mana"
//     },
//     {
//         id: 124,
//         nombre: "oreo"
//     },
//     {
//         id: 124,
//         nombre: "oreas"
//     }
// ]


// const guardarLocal = (clave, valor) => {
//     localStorage.setItem(clave, valor)
// }


// // for(const producto of productos) {
// //     guardarLocal(producto.id, JSON.stringify(producto))

// //     // console.log(producto)

// //     const productosJson = JSON.parse(localStorage.getItem("ProductosGenerales"))

// //     console.log(productosJson)

// // }

// // const productosJson = JSON.parse(localStorage.getItem("ProductosGenerales"))

// // console.log(productosJson.id)


// for(const producto of productos) {
//     guardarLocal("productos" ,JSON.stringify(productos))
  
//   console.log(productos)
  

// }



// // guardarLocal("Listado Productos", JSON.stringify())







