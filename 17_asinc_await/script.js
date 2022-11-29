// const productos = [{
//   id: 1,
//   nombre: "sandia",
//   precio: 400
// },{
//   id: 2,
// nombre: "papa",
//   precio: 300
// },
// {
//   id: 3,
//   nombre: "tomate",
//       precio: 900
//   },
//   {
//     id:4,
//     nombre: "lechuga",
//         precio: 321
//     }
// ]


// //+++++JsonPlaceholder


// //respuesta
// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((json) => console.log(json));

//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => console.log(response))
  

//   fetch('https://jsonplaceholder.typicode.com/posts')
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].title)
//     console.log(data[0].body)
//   });



//   //agregar en Dom

//   const lista = document.querySelector('#listado')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then( (resp) => resp.json() )
//     .then( (data) => {
       
//         data.forEach((post) => {
//             const li = document.createElement('li')
//             li.innerHTML = `
//                 <h4>${post.title}</h4>
//                 <p>${post.body}</p>
//             `
//             lista.append(li)
//         })
//     })


//     //ejemplo json





// //ejemplo post

// fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Coderhouse',
//             body: 'Post de prueba',
//             userId: 1,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))


// //Rutas relativas

// fetch('stock.json')
// .then((response)=>{response.json()})
// .then((data)=>{ console.log(data)})



// fetch('/stock.json')
//     .then( (res) => res.json())
//     .then( (data) => {

//        console.log(data)
//     })



    //async await

    const resp = fetch('https://jsonplaceholder.typicode.com/posts')
console.log(resp) 



const pedirPosts = async () => {
  const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
  const data = await resp.json()
 
  data.forEach((post) => {
      console.log(post)
  })
}

pedirPosts()




























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


