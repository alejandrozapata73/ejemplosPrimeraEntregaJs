


// Swal.fire('Any fool can use a computer')


// Swal.fire({
//   title: 'Error!',
//   text: 'Do you want to continue?',
//   icon: 'success',
//   confirmButtonText: 'Cool'
// })


// Swal.fire({
//   position: 'top-end',
//   icon: 'success',
//   title: 'Your work has been saved',
//   showConfirmButton: false,
//   timer: 1500
// })


// Swal.fire({
//   title: 'Sweet!',
//   text: 'Modal with a custom image.',
//   imageUrl: 'https://unsplash.it/400/200',
//   imageWidth: 400,
//   imageHeight: 200,
//   imageAlt: 'Custom image',
//   showConfirmButton: true,
//   showCancelButton: true,
//   cancelButtonText: 'Cancelar',
//   confirmButtonText:"decile que sii"
// })


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





//+++++Libreria toasty

// Toastify({
//   text: "Inicio",
//   duration: 3000
// }).showToast();

// Toastify({
//   text: "This is a toast",
//   className: "info",
//   newWindow: true,
//   close: true,
//   gravity: "top",
//   position: "left",
//   style: {
//     background: "linear-gradient(to right, #00b09b, #96c93d)",
//   }
// }).showToast();

// let btn3 = document.getElementById("btn3")



// btn3.addEventListener('click', probando)


// function probando(){
//   console.log("hola")

//   Toastify({
//     text: "Probando toast!",
//     duration: 3000
// }).showToast();
// }


// Toastify({
//   text: "izquierda",
//   duration: 3000,
//   gravity: 'bottom',
//   position: 'left'
// }).showToast();


// Toastify({
//   text: "Probando Backgro",
//   duration: 3000,
//   gravity: 'bottom',
//   position: 'left',
//   style: {
//       background: 'linear-gradient(to right, #00b09b, #96c92d)'
//   }
// }).showToast();


//Libreria Luxon+++++++++++++++++

// const DateTime = luxon.DateTime

// console.log(DateTime)

// // const dt = DateTime.local(2022, 1, 25, 12, 10)




// const dt = DateTime.fromObject(
//   {  day: 22,
//      hour: 12, 
//      month: 2 },
//   { 
//     zone: 'America/Buenos_Aires',
//     numberingSystem: 'beng' 
//     }
// )

// console.log( dt.toString() )

// const dtiso = DateTime.fromISO("2017-05-15") 

// const dtiso2 = DateTime.fromISO("2017-05-15T08:30:00") 
  

// console.log(dtiso.toString())  
// console.log(dtiso2.toString())  


// const now = DateTime.now()
// console.log( now.toString() )

// console.log(now.year)
// console.log(now.month)
// console.log(now.day)

// console.log("hora: " + now.hour)
// console.log("minutos: " + now.minute)
// console.log("segundos: " + now.second)

// console.log(now.weekday)

// console.log(dt.zoneName )

// //Formatear
// console.log("antes... de toLocalString")
// now.toLocaleString()
// console.log(now.toLocaleString())
// console.log(now.toLocaleString(DateTime.DATE_FULL))
// console.log(now.toLocaleString(DateTime.TIME_SIMPLE))


// //Transformacion

// const dt3 = DateTime.now();

// console.log( "Dt 3: " + dt3.toLocaleString(DateTime.DATETIME_SHORT) )
// // 25/1/2022 14:21

// const suma = dt3.plus(
//     { 
//     hours: 5,
//     minutes: 15 
//     }
//    )
// console.log(suma.toLocaleString(DateTime.DATETIME_SHORT))
// // 25/1/2022 19:36

// const resta = dt3.minus(
//   { 
//   month: 2, 
//   days: 10 
//   })
// console.log(resta.toLocaleString(DateTime.DATETIME_SHORT))
// // 15/11/2021 14:21




































































// swal("Hello world!");

// // swal({
// //   title: "Buen trabajo!",
// //   text: "You clicked the button!",
// //   icon: "success",
// // });



// swal({
//   title: "Con timer!",
//   text: "You clicked the button!",
//   content: "input",
//   icon: "success",
//   timer: 5000,
//   button: ["Aceptar","cancelar"],
  
// });


// let btn2 = document.getElementById('btn2')

// btn2.addEventListener('click', ()=>{

//   swal({
//   title: "Buen trabajo!",
//   text: "You clicked the button!",
//   icon: "success",
// });

// })





// //++++Promise+++

// swal({
//   title: "Are you sure?",
//   text: "Once deleted, you will not be able to recover this imaginary file!",
//   icon: "warning",
//   buttons: true,
//   dangerMode: true,
// })
// .then((willDelete) => {
//   if (willDelete) {
//     swal("Poof! Your imaginary file has been deleted!", {
//       icon: "success",
//     });
//   } else {
//     swal("Your imaginary file is safe!");
//   }
// });


