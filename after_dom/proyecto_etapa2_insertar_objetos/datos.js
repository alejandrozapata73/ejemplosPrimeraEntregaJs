var productos= [
    {
      "id": 1,
       "nombre": "Gin Bombay Sapphire 750 cc",
       "precio": 950,
       "destacado": true,
    },
    {
      "id": 2,
       "nombre": "Ron Malibu 750cc",
       "precio": 750,
       "destacado": true,
    },
    {
      "id": 3,
       "nombre": "Bailey's Original Cream 375 cc",
       "precio": 900,
       "destacado": true,
    },
    {
      "id": 4,
       "nombre": "Fernet con coca",
       "precio": 1900,
       "destacado": true,
    },
    
  ]


  const contenedorProductos = document.querySelector('#contenedor-productos')

  let botonesAgregar = document.querySelectorAll('.producto-agregar')

  console.log(contenedorProductos);

  //funcion para cargar productos
  function cargarProductos() {

    productos.forEach(producto=>{

      const div = document.createElement('div');

       div.classList.add("thumbnail")
      div.innerHTML= `
      
                <div class="caption">
                <h3 id="title_card"> ${producto.nombre} </h3>
                <button class="producto-agregar" id="${producto.id}">Agregar ${producto.id}</button>
                </div>
      `;

      contenedorProductos.append(div);

    })

  }

  cargarProductos();

  // `<div class="col-sm-6 col-md-4">
  //               <div class="thumbnail">
  //                 <div class="caption">
  //                   <h3 id="title_card"> ${title} </h3>
  //                   <p id="description_card"> ${description} </p>
  //                   <p><a href="#" class="btn btn-danger">Acción</a></p>
  //                 </div>
  //               </div>
  //             </div>`;