const productos = [{
  id: 1,
  nombre: "sandia",
  precio: 400,
  img: "batman.png"
},{
  id: 2,
nombre: "papa",
  precio: 300,
  img: "batman.png"
},
{
  id: 3,
  nombre: "tomate",
  precio: 900,
  img: "batman.png"
  },
  {
    id:4,
    nombre: "banana",
    precio: 321,
    img: "batman.png"
    }
]


let shopContent = document.getElementById("shopContent")
const verCarrito = document.getElementById("btn-carrito")
console.log(verCarrito)
const contenidoCarrito = document.getElementById("contentCarrito")
const generalCarrito = document.getElementById("generalCarrito")
const spanTotal = document.getElementById("total")

console.log(shopContent)

productos.forEach((product)=>{
  let content = document.createElement("div")
  content.className="card"
  content.style.width = "18rem"
  content.innerHTML = `
          <img src="${product.img}"/>
          <h3>${product.nombre}</h3>
          <p>${product.precio}</p>
  `;

  let comprar = document.createElement("button")
  comprar.innerText = "comprar"
  comprar.className = "btn btn-primary"
  content.append(comprar)

  shopContent.append(content)

  comprar.addEventListener("click",()=>{
    carrito.push(
      {
        id: product.id,
        nombre: product.nombre,
        precio: product.precio,
        img: product.img
      }
    )
    console.log(carrito)
  })

})

let carrito = []





function actualizarCarrito(){

  contenidoCarrito.innerHTML=""
  carrito.forEach((product)=>{
    let carritoContent = document.createElement("div")
    carritoContent.className="card"
    carritoContent.style.width = "50%"
    
    carritoContent.innerHTML = `
    <img src="${product.img}"/>
    <h3>${product.nombre}</h3>
    <p>${product.precio}<p>
    <button class="delete-producto btn btn-danger">Eliminar</button>
    `;
    contenidoCarrito.append(carritoContent)

    let eliminar = carritoContent.querySelector(".delete-producto")
    console.log(eliminar)

    eliminar.addEventListener("click",()=>{
      eliminarProducto(product.id)
    })
    
    
    

  })

  const total = carrito.reduce((acc,el)=>acc + el.precio,0)

  console.log(total)
  console.log(carrito)
  spanTotal.innerText = total

}

verCarrito.addEventListener("click",actualizarCarrito)


const eliminarProducto=(id)=>{
  
  console.log("eliminado")
  const foundId = carrito.find((element)=>element.id===id)
  console.log(foundId)
  carrito = carrito.filter((carritoId)=>{
    return carritoId != foundId;
  })
  actualizarCarrito()
}


function probando(){
  console.log("probando")
}