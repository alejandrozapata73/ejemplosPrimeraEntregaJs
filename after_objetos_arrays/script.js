

// let producto1 = {
//     id: 0001,
//     nombre: "oreo",
//     precio: 50
// }

// console.log(producto1.nombre)



class Producto  {
    constructor(id,nombre,precio){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio
    }
}

const producto1 = new Producto(001,"JavaScript",560);
const producto2 = new Producto(002,"PHP",440)
const producto3 = new Producto(003,"NodeJs",450);

const BBDD = [producto1,producto2,producto3];

console.log(BBDD);

for(let producto of BBDD){
    console.log(producto.nombre);
}

BBDD.forEach( (el)=>{
    console.log(el.nombre);
}
)

function renderizarCursos(){
    BBDD.forEach( (el)=>{
        console.log(el.nombre);
    }
    )
}

const numeros = [10,3,15,48,36]

console.log(numeros)

numeros.sort((a,b)=>a-b);

console.log(numeros)

numeros.sort((a,b)=>b-a);

console.log(numeros)

numeros.sort((a,b)=>{ 
    return a-b}
    );

console.log(numeros)

console.log("la bdd sin modificiar"+BBDD);

for(let productoprecio of BBDD){
    console.log(productoprecio.precio)
}

BBDD.sort((a,b)=>a.precio-b.precio);

console.log(BBDD);

for(let productoprecio of BBDD){
    console.log(productoprecio.precio)
}