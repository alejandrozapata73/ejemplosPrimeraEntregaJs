const productos = [{
  nombre: "sandia",
  precio: 400
},{
nombre: "papa",
  precio: 300
},
{
  nombre: "tomate",
      precio: 900
  },
  {
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



verCarrito.addEventListener("click", ()=>{

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
  })

  const total = carrito.reduce((acc,el)=>acc + el.precio,0)

  console.log(total)

  contenidoCarrito.append(total)




})

