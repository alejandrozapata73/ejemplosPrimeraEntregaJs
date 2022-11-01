//Id
console.dir(document.getElementById("parrafo"))
console.dir(document.getElementById("parrafo").innerHTML)
console.dir(document.getElementById("app"))
console.dir(document.getElementById("app").innerHTML)




//ClassName
let paises = document.getElementsByClassName("paises");

// console.log(paises[0].innerHTML);
// console.log(paises[1].innerHTML);


//TagName
let contenedores = document.getElementsByTagName("div");
// console.log(contenedores[0].innerHTML);
// console.log(contenedores[1].innerHTML);
// console.log(contenedores[2].innerHTML);
// console.log(contenedores[3].innerHTML);


//++++++Recorrer con ciclo for+++++
for (const pais of paises) {
    console.log(pais.innerHTML);
}

for (const div of contenedores) {
    console.log(div.innerHTML);
}

//+++++Inner text+++++
let titulo = document.getElementById("titulo")
console.log( titulo.innerText ) 


titulo.innerText = "Hola Coder"
console.log( titulo.innerText ) 

//++++innerHTML

let contenedor2 = document.getElementById("contenedor")
contenedor2.innerHTML = "<h2>Hola mundo!</h2><p>Lorem ipsum</p>"

//crear nodos








//++++++Ejemplo nodos y array++++++++++

let padre = document.getElementById("personas");

let personas = ["homer","marge","bart","lisa"];

for (const persona of personas){
    let li = document.createElement("li");

    li.innerHTML=persona;

    padre.appendChild(li);
}

//Cambiar Clases

let container = document.getElementById("contenedor")




