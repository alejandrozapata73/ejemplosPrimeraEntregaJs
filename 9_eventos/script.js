


// let botonCaptura = document.getElementById("btnMainDatos")

// botonCaptura.addEventListener("click",mostrarDatos)

// botonCaptura.addEventListener("click",mostrarDatos2)

// function mostrarDatos(){
//     console.log("funciona")

//     let usuario = document.getElementById("usuario").value

//     let pass = document.getElementById("pass").value

//     let contenedor = document.getElementById("mostrarDatos")

//     let valores = document.createElement("p")

//     valores.innerHTML = "uu" + usuario + "pas" + pass

//     contenedor.appendChild(valores)

//     document.body.appendChild(valores)

    



// }

// function mostrarDatos2(){


//     console.log("funciona 2")

//     let usuario = document.getElementById("usuario").value

//     let pass = document.getElementById("pass").value

//     let contenedor = document.getElementById("mostrarDatos")

//     let valores = document.createElement("p")

//     valores.innerHTML = "uu" + usuario + "pas" + pass

//     contenedor.appendChild(valores)


// }



 let botonMove = document.getElementById("move")

 botonMove.addEventListener("mousemove",mover)

 function mover(){
    console.log("mover")
 }


 let up = document.getElementById("keyup")
let down = document.getElementById("keydown")
up.onkeyup = () => {console.log("keyUp")}






//-----Formulario-----

let miFormulario      = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);

// function validarFormulario(e){
//     e.preventDefault();
//     console.log("Formulario Enviado");    
// }


// function validarFormulario(e){
//     //Cancelamos el comportamiento del evento
//     e.preventDefault();
//     //Obtenemos el elemento desde el cual se disparó el evento
//     let formulario = e.target
//     //Obtengo el valor del primero hijo <input type="text">
//     console.log(formulario.children[0].value); 
//     //Obtengo el valor del segundo hijo <input type="number"> 
//     console.log(formulario.children[1].value);  
// }
