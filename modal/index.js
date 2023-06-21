let productos = [
  {
    "id": 1,
    "nombre": "Producto 1",
    "descripcion": "Descripcion 1",
    "precio": 10000
  },
  {
    "id": 2,
    "nombre": "Producto 2",
    "descripcion": "Descripcion 2",
    "precio": 20000
  },
  {
    "id": 3,
    "nombre": "Producto 3",
    "descripcion": "Descripcion 3",
    "precio": 30000
  }
]

let detalle = document.getElementById('detalle')
function obtenerProducto(id) {
  let producto = productos.filter( p => p.id === id)[0]
  detalle.innerHTML = crearInteriorDetalle(producto)
}

function crearInteriorDetalle(producto){
  return (
    `
      <h1>${producto.nombre}</h1>
      <p>${producto.descripcion}</p>
      <h3>${producto.precio}</h3>
    `
  )
}


function crearTarjeta(id, nombre, descripcion, precio) {
  return (
    `<div class="tarjeta">
    <h1>${nombre}</h1>
    <p>${descripcion}</p>
    <h3>${precio}</h3> 
    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="obtenerProducto(${id})">
      Ver Detalle
    </button>
  </div>`
  )
}

let tarjetas = document.getElementById('tarjetas');
tarjetas.innerHTML = productos.map((producto) => crearTarjeta(producto.id, producto.nombre, producto.descripcion, producto.precio))