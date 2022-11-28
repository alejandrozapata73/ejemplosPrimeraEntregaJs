console.log("probando promesas")

let curso = {
    titulo: "curso profesiona de js",
    formato: "video",
    bloques: ["introduccion","funciones"],
    inscribir: function(){
        console.log("inscripto")
    }
}



let promise = new Promise(function(resolve, reject) {
    resolve("I am surely going to get resolved!");
  
    reject(new Error('Will this be ignored?')); // ignored
    resolve("Ignored?"); // ignored
  });