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