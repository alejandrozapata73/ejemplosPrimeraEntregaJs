

// let num = 10
// num = num + 1
// num += 1
// num ++

// console.log(num)



//++++Operador Ternario++++
// let temperatura = 31

// if(temperatura>30){
//   alert("dia caluroso")
// }else{
//   alert("dia frio")
// }

// temperatura > 30 ? alert("dia caluroso ternario") : ("dia frio... ternario")

// const usuario = {
//   nombre: "john doe",
//   edad: 30
// }

// let permiso1

// if(usuario.edad>=18){
//   permiso1 = true
// }else{
//   permiso1 = false
// }

// if(permiso1){
//   alert("puede tomar cerveza")
// }else{
//   alert("no puede tomar cerveza")
// }

// const permiso2 = (usuario.edad>=18)?true:false
// console.log(permiso2)

// permiso2 ? alert("puede tomar cerveza") : alert("no puede tomar cerveza")


//operador AND

// let carrito = []

// if(carrito.length === 0){
//   alert("el carrito esta vacio")
// }

// carrito.length === 0 && alert("El carrito esta vacio")


// const usuario = {
//     nombre: "john doe",
//     edad: 30
//   }

//   const registroIngreso = usuario.edad >= 18 && new Date()

//   console.log(registroIngreso)


  //operador OR

  console.log( 0 || "Falsy")  // Falsy
console.log( 40 || "Falsy")  // 40
console.log( null || "Falsy")  // Falsy
console.log( undefined || "Falsy")  // Falsy
console.log( "Hola Mundo" || "Falsy")  // Hola Mundo
console.log( "" || "Falsy")  // Falsy
console.log( NaN || "Falsy")  // Falsy
console.log( true || "Falsy")  // true
console.log( false || "Falsy")  // Falsy
//Ejemplo 1
// const usuario1 = {
//   nombre: "John Doe",
//   edad: 14
// }
// const usuario2 = null

// console.log( usuario1 || "El usuario no existe" )
// // { nombre: 'John Doe', edad: 14 }

// console.log( usuario2 || "El usuario no existe" )
// El usuario no existe


//Ejemplo 2

// let carrito

// let carritoLocalStorage = JSON.parse( localStorage.getItem('carrito') )

// if (carritoLocalStorage) {
//   carrito = carritoLocalStorage
// } else {
//   carrito = []
// }

//simplificar el proceso
// const carrito = JSON.parse(localStorage.getItem('carrito')) || []


//Nullish coalescing++++++++++++

// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false


//+++++++++Acceso Condicional a un Objeto

// const usuario = null

// // console.log( usuario.nombre || "El usuario no existe" )
// // Error: "No se pueden leer propiedades de NULL"

// console.log( usuario?.nombre || "El usuario no existe")
// // "El usuario no existe"


// const usuario = {
//   nombre: "John Doe",
//   edad: 22,
//   cursos: {
//     javascript: "aprobado"
//   }
// }

// console.log( usuario?.cursos?.javascript || "La propiedad no existe")
// // "aprobado"
// console.log( usuario?.trabajos?.coderhouse || "La propiedad no existe")
// // "La propiedad no existe"


//++++Desestructuracion++++

// const usuario = {
//   nombre: "John Doe",
//   edad: 32
// }

// let nombre = usuario.nombre
// let edad = usuario.edad

// let { nombreProp, edadProp } = usuario

// const usuario = {
//   nombre: "John Doe",
//   edad: 32
// }

// const { telefono } = usuario // undefined


//++++mas interno
// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//       cel: 113334444,
//       casa: null,
//       trabajo: 113325555
//   }
// }


// const { nombre, telefono: {trabajo} } = usuario

// console.log(nombre) // "John Doe"
// console.log(trabajo) // 113325555



//+++++++++++ALIAS++++++++++++++++

const item = {
  item_id: 432,
  product_name: "Some product",
  price_per_unit: 5600
}

const {
  item_id: id,
  product_name: nombre,
  price_per_unit: precio
} = item

console.log(id) // 432
console.log(nombre) // "Some product"
console.log(precio) // 5600


//+++++desestructuracion PARAMETROS

const producto = {
  id: 10,
  nombre: "Curso Javascript",
  precio: 12500
}

const desestructurar = (item) => {
  // desestructurando dentro del bloque
  const {id, nombre} = item
  console.log(id, nombre)
}

desestructurar(producto) // 10 Curso Javascript

// const desestructurar = ( {id, nombre} ) => {
//   console.log(id, nombre)
// }

// desestructurar(producto) // 10 Curso Javascript

//ejemplo confuso
window.addEventListener('click', ( {x, y} ) => {
  console.log(x, y)
})



//+++SPREAD ARRAY

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// // const nombres = ["Juan", "Julieta", "Carlos", "Mariela"]

// // spread ... del array
// console.log(...nombres) // Juan Julieta Carlos Mariela

// equivalente a:
// console.log("Juan", "Julieta", "Carlo", "Mariela")



//
//  const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

// console.log( Math.max(numeros) ) // NaN


const numeros = [4, 77, 92, 10, 3, -32, 54, 11]

console.log( Math.max(...numeros) ) // 92


//SPREAD de OBJETOS

const nombres1 = ["Juan", "Julieta"]
const nombres2 = ["Carlos", "Mariela"]

// spread de los dos arrays dentro de otro
const nombres = [...nombres1, ...nombres2]

console.log(nombres) // ["Juan", "Julieta", "Carlos", "Mariela"]

// spread del array en un objeto
const nombresObj = {
    ...nombres
}

console.log(nombresObj)
// { '0': 'Juan', '1': 'Julieta', '2': 'Carlos', '3': 'Mariela' }


//++++SPREAD de OBJETOS
const usuario1 = {
  nombre: "Juan",
  edad: 24,
  curso: "Javascript"
}

// lista todas las propiedades y valores de usuario1 dentro de otro objeto
const usuario2 = {
  ...usuario1
}

console.log(usuario2) // { nombre: 'Juan', edad: 24, curso: 'Javascript' }

const usuario3 = {
  ...usuario1,
  curso: "ReactJS",
  email: "juan@doe.com"
}

console.log(usuario3)
// { nombre: 'Juan', edad: 24, curso: 'ReactJS', email: 'juan@doe.com' }

//++++REST PARAMETERS

function sumar(...numeros) {
  console.log(numeros)
}

sumar(4, 2) // [ 4, 2 ]
sumar(10, 15, 30, 5) // [ 10, 15, 30, 5 ]


function sumar(...numeros) {
  return numeros.reduce((acc, n) => acc + n, 0)
}

console.log( sumar(4, 2) ) // 6
console.log( sumar(10, 15, 30, 5) ) // 60
console.log( sumar(100, 300, 50) ) // 450
