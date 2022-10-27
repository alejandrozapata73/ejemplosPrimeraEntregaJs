function mayorQue(n) {
    return (m) => m > n
}

let mayorQueDiez = mayorQue(10)

console.log( mayorQueDiez(12) )  //  true
console.log( mayorQueDiez(8) )  //  false



function asignarOperacion(op) {
    if (op == "sumar") {
        return (a, b) => a + b
    } else if (op == "restar") {
        return (a, b) => a - b
    }
}

let suma = asignarOperacion("sumar")


console.log( suma(4, 6) )  //  10



//Ejemplo 1
function porCadaUno(arr, fn) {
    for (const el of arr) {
        fn(el)
    }
}

const numeros= [1, 2, 3, 4]

porCadaUno(numeros, console.log)
// 1
// 2
// 3
// 4

//ejemplo 2
let total = 0

function acumular(num) {
    total += num
}

porCadaUno(numeros, acumular)
console.log(total) // 10


//Ejemplo 3
const duplicado = []

porCadaUno(numeros, (el)=> {
    duplicado.push(el * 2)
})

console.log(duplicado) // [2, 4, 6, 8]


//otra forma
function asignarOperacion(op) {
    if (op == "sumar") {
        return sumar;
    } else if (op == "restar") {
        return restar;
    }
}


function sumar(a, b)
{
  return a + b;
}


function restar(a, b)
{
  return a - b;
}

var op = asignarOperacion("sumar")

console.log(op(2, 3))

//+++Find+++

// const cursos = [
//     {nombre: 'Javascript', precio: 15000},
//     {nombre: 'ReactJS', precio: 22000},
// ]

// const resultado = cursos.find((el) => el.nombre === "ReactJS")
// const resultado2 = cursos.find((el) => el.nombre === "DW")

// console.log(resultado) // {nombre: 'ReactJS', precio: 22000}
// console.log(resultado2) // undefined

//+++++++Filter

const cursos = [
    {nombre: 'Javascript', precio: 15000},
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'AngularJS', precio: 22000},
    {nombre: 'Desarrollo Web', precio: 16000},
]

const resultado = cursos.filter((el) => el.nombre.includes('JS'))
const resultado2 = cursos.filter((el) => el.precio < 14000)

console.log(resultado)
/* [
    {nombre: 'ReactJS', precio: 22000},
    {nombre: 'Angular', precio: 22000}
] */

console.log(resultado2) // []


//+++++++++++++some+++++

console.log( cursos.some((el) => el.nombre == "Desarrollo Web")) 
// true
console.log( cursos.some((el) => el.nombre == "VueJS")) 
// false



//++++++++++++Reduce+++++++++++++

const miCompra = [
    {
        nombre: 'JavaScript',
        precio: 500
    },
    {
        nombre: 'ReactJS',
        precio: 500
    }
]

const totalCompra = miCompra.reduce((acumulado,el)=> acumulado + el.precio,200);

console.log(totalCompra)