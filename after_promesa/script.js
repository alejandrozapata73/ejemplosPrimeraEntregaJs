const productos = [{
  id: 1,
  nombre: "sandia",
  precio: 400
},{
  id: 2,
nombre: "papa",
  precio: 300
},
{
  id: 3,
  nombre: "tomate",
      precio: 900
  },
  {
    id:4,
    nombre: "lechuga",
        precio: 321
    }
]


let shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("btn-carrito")
console.log(verCarrito)
const contenidoCarrito = document.getElementById("contentCarrito")

console.log(shopContent)

shopContent.innerHTML = '<img src="https://thumbs.gfycat.com/DearWellinformedDalmatian-size_restricted.gif" width="400px">'


//crear contenido productos

const pedirProductos = () => {
  return new Promise( (resolve, reject) => {
      setTimeout(() => {
          resolve(productos)
      }, 3000)
  })
}



let productosCargados = []

    const renderProductos = (arr) => {
        // función que genere la vista de los productos

        shopContent.innerHTML = ""
        productos.forEach((product)=>{
          let content = document.createElement("div")
          content.className="thumbnail"
          content.innerHTML = `
                  <h3>${product.nombre}</h3>
                  <p>${product.precio}</p>
          `;
        
          let comprar = document.createElement("button")
          comprar.innerText = "comprar"
          comprar.className = "comprar"
          content.append(comprar)
        
          shopContent.append(content)
        
          comprar.addEventListener("click",()=>{
            carrito.push(
              {
                id: product.id,
                nombre: product.nombre,
                precio: product.precio
              }
            )
            console.log(carrito)
          })
        
        })
      
    }
    
    // asincrónicamente pedimos los datos y generamos la vista
    pedirProductos()
        .then((res) => {
            productosCargados = res
            renderProductos(productosCargados)//puedo generar error sacando s
        })

        .catch(()=>{
          console.log("paso algo raro")
        })




//fin contenido productos compras





let carrito = []


function actualizarCarrito(){

  contenidoCarrito.innerHTML=""
  const modalHeader = document.createElement("div")
  modalHeader.className = "modal-header"
  modalHeader.innerHTML=`

  <h1>Carrito</h1>

  `;

  contenidoCarrito.append(modalHeader)



 


  carrito.forEach((product)=>{
    let carritoContent = document.createElement("div")
    carritoContent.innerHTML = `
    <h3>${product.nombre}</h3>
    <p>${product.precio}<p>
    `;
    contenidoCarrito.append(carritoContent)

    let eliminar = document.createElement("span")
    eliminar.textContent="X"
    carritoContent.append(eliminar)

    eliminar.addEventListener("click",eliminarProducto)

  })

  const total = carrito.reduce((acc,el)=>acc + el.precio,0)

  console.log(total)

  contenidoCarrito.append(total)
  console.log(carrito)

}

verCarrito.addEventListener("click",actualizarCarrito)


const eliminarProducto=()=>{
  
  console.log("eliminado")
  const foundId = carrito.find((element)=>element.id)
  console.log(foundId)
  carrito = carrito.filter((carritoId)=>{
    return carritoId != foundId;
  })
  actualizarCarrito()
}



//After Promesas.. 

//set time out simple
setTimeout(()=>{
  console.log("hola probando el set time")


},3000)

// setTimeout(()=>{
//   console.log("hola probando el set time")


// },1000)

// setTimeout(()=>{
//   console.log("hola probando el set time")


// },6000)


//++++SetTime out con el pop afuera
// setTimeout(()=>{
//   console.log("hola probando el set time")

//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 3000
//   })

// },5000)


// Swal.fire({
//   position: 'top-end',
//   icon: 'success',
//   title: 'Your work has been saved',
//   showConfirmButton: false,
//   timer: 3000
// })


//++++Set con el pop up dentro
// let tiempo=4000

// setTimeout(()=>{
//   console.log("hola probando el set time")

//   Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 3000
//   })

// },tiempo)


//finalizar timeout

// console.log("Inicio")

// const fin = setTimeout(() => {
//     console.log("fin")
// }, 2000)

// clearTimeout(fin)

//++++++set Interval+++++

setInterval(() => {
    console.log("Tic")
}, 1000)

// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000)


//+++set inteval con pop up
// let counter = 0
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//       Swal.fire({
//     position: 'top-end',
//     icon: 'success',
//     title: 'Your work has been saved',
//     showConfirmButton: false,
//     timer: 3000
//   })


//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 7000)






//clear timeout++++++++++
// console.log("Inicio")

// const fin = setTimeout(() => {
//     console.log("fin")
// }, 2000)

// clearTimeout(fin)



//++++++++++++promesas+++++++


// ejemplo 1
// const eventoFuturo1a = () => {
//     return new Promise( (resolve, reject) => {
//         //cuerpo de la promesa
//     } )
// }
// console.log( eventoFuturo1a() ) 


// const eventoFuturo1b = (res) => {
//   return new Promise( (resolve, reject) => {
      
//           resolve('Promesa resuelta de forma console.log')
      
//           reject('Promesa rechazada falsa console.log')
     
//   })
// }

// console.log( eventoFuturo1b(true) ) 
// console.log( eventoFuturo1b(false) ) 
// console.log( eventoFuturo1b(125) ) 


// const eventoFuturo2 = (res) => {
//     return new Promise( (resolve, reject) => {
//         if (res === true) {
//             resolve('Promesa resuelta')
//         } else {
//             reject('Promesa rechazada')
//         }
//     })
// }


// console.log( eventoFuturo2(true) ) 
// console.log( eventoFuturo2(false) ) 




// const eventoFuturo3 = (res) => {
//   return new Promise( (resolve, reject) => {
//       if (res === true) {
//           resolve('Promesa resuelta')
//       } else {
//           reject('Promesa rechazada')
//       }
//   })
// }


// eventoFuturo3(true)
//   .then( (response) => {
//       console.log(response) // Promesa resuelta
//   })

// eventoFuturo3(false)
//   .catch( (error) => {
//       console.log(error) // Promesa rechazada
//   })



// //Finally
// eventoFuturo3(true)
//   .then( (response) => {
//       console.log(response)
//   })
//   .catch( (error) => {
//       console.log(error)
//   })
//   .finally( () => {
//       console.log("Fin del proceso")
//   })




//Ejemplo carrito+++++++++++++++++
// const BD = [
//   {id: 1, nombre: 'Producto 1', precio: 1500},
//   {id: 2, nombre: 'Producto 2', precio: 2500},
//   {id: 3, nombre: 'Producto 3', precio: 3500},
//   {id: 4, nombre: 'Producto 4', precio: 3500},
// ]

// const pedirProductosEjemplo = () => {
//   return new Promise( (resolve, reject) => {
//       setTimeout(() => {
//           resolve(BD)
//       }, 3000)
//   })
// }


// let productosEjemplo = []

// const renderProductosEjemplo = (arr) => {
//   // función que genere la vista de los productos
  
// }

// // asincrónicamente pedimos los datos y generamos la vista
// pedirProductos()
//   .then((res) => {
//       productosEjemplo = res
//       renderProductos(productos)
//   })

































//Ejemplo Sweet alert con promesa

// Swal.fire({
//   title: 'Está seguro de eliminar el producto?',
//   icon: 'warning',
//   showCancelButton: true,
//   confirmButtonText: 'Sí, seguro',
//   cancelButtonText: 'No, no quiero'
// }).then((result) => {

//   if (result.isConfirmed) {
//       Swal.fire({
//           title: 'Borrado!',
//           icon: 'success',
//           text: 'El archivo ha sido borrado'
//       })
//   }
// })


