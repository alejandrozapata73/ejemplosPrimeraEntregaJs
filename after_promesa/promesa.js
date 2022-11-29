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
              renderProductos(productosCargado)//puedo generar error sacando s
          })
  
          .catch(()=>{
            console.log("paso algo raro")
          })
  