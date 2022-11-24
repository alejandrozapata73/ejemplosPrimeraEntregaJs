// setTimeout(()=> {
//     console.log("Proceso asincrónico")
// }, 3000)



// console.log("Inicia proceso")

// setTimeout(()=> {
//     console.log("Mitad de proceso")
// }, 2000)

// console.log("Fin proceso")



//Ejemplo aparecer y desaparecer clase
// const btn = document.querySelector('#boton')
// const popup = document.querySelector('#popup-mensaje')

// btn.addEventListener('click', () => {
//     popup.classList.add('btn-danger')

//     setTimeout(() => {
//         popup.classList.remove('btn-danger')
//     }, 2500)
// })



//ejemplo hola mundo sincronico
// for (let letra of "hola") {
//     console.log(letra)
// }

// for (let letra of "mundo") {
//     console.log(letra)
// }

// //asincronico
// for (let letra of "hola") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 1000)
// }

// for (let letra of "mundo") {
//     setTimeout(() => {
//         console.log(letra)
//     }, 3000)
// }


// //ejemplo time en cero
// console.log("Inicia proceso")

// setTimeout(()=> {
//     console.log("Mitad de proceso")
// }, 0)

// console.log("Fin proceso")



//ejemplo call
// function multiply (x, y) {    
//     return x * y;
// }

// function printSquare (x) {    
//     let s = multiply(x, x);    
//     console.log(s);
// }

// printSquare(5);



//Set interval++++
// setInterval(() => {
//     console.log("Tic")
// }, 1000)


//Clear interval+++++++++++
// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000)


//clear timeout++++++++++
// console.log("Inicio")

// const fin = setTimeout(() => {
//     console.log("fin")
// }, 2000)

// clearTimeout(fin)



//Promesas++++++


//ejemplo 1
// const eventoFuturo = () => {
//     return new Promise( (resolve, reject) => {
//         //cuerpo de la promesa
//     } )
// }
// console.log( eventoFuturo() ) 



//ejemplo 2
// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })
// }


// console.log( eventoFuturo(true) ) // Promise { 'Promesa resuelta' }
// console.log( eventoFuturo(false) ) // Promise { <rejected> 'Promesa rechazada' }

//ejemplo resumido
// const eventoFuturo = res => new Promise((resolve,reject)=> {
//     res ? resolve('promesa resuelta res') : reject('promesa rechazada res');
// });

//  console.log( eventoFuturo(true) ) 
//  console.log( eventoFuturo(false) ) 


//Ejemplo 3
// const eventoFuturo = (res) => {
//     return new Promise( (resolve, reject) => {
//         setTimeout( () => {
//             res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
//         }, 2000)
//     })
// }

// console.log( eventoFuturo(true) ) // Promise { <pending> }
// console.log( eventoFuturo(false) ) // Promise { <pending> }



//then & catch ++++++++++++++++

const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {
        if (res === true) {
            resolve('Promesa resuelta')
        } else {
            reject('Promesa rechazada')
        }
    })
}


eventoFuturo(true)
    .then( (response) => {
        console.log(response) // Promesa resuelta
    })

eventoFuturo(false)
    .catch( (error) => {
        console.log(error) // Promesa rechazada
    })



//Finally
eventoFuturo(true)
    .then( (response) => {
        console.log(response)
    })
    .catch( (error) => {
        console.log(error)
    })
    .finally( () => {
        console.log("Fin del proceso")
    })


    //Ejemplo Practico

    const BD = [
        {id: 1, nombre: 'Producto 1', precio: 1500},
        {id: 2, nombre: 'Producto 2', precio: 2500},
        {id: 3, nombre: 'Producto 3', precio: 3500},
        {id: 4, nombre: 'Producto 4', precio: 3500},
    ]
    
    const pedirProductos = () => {
        return new Promise( (resolve, reject) => {
            setTimeout(() => {
                resolve(BD)
            }, 3000)
        })
    }


    let productos = []

    const renderProductos = (arr) => {
        // función que genere la vista de los productos
        
    }
    
    // asincrónicamente pedimos los datos y generamos la vista
    pedirProductos()
        .then((res) => {
            productos = res
            renderProductos(productos)
        })

       
      
    
    