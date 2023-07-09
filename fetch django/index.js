const ENDPOINT = "http://localhost:8000/"

let listaProductos = document.querySelector('#listaProductos')

function crearPlantilla(titulo, precio){
    return `
        <div class="producto">
            <h1>${titulo}</h1>
            <p>${precio}</p>
        </div>
        `
}

async function obtenerProductos(){
    console.log("Llamando productos");
    let respuesta = await fetch(`${ENDPOINT}manage/products/`)
    let datos = await respuesta.json()
    console.log(datos);
    listaProductos.innerHTML = 'Cantidad de productos = '+datos.length;
    // datos.map(dato => listaProductos.innerHTML += crearPlantilla(dato.name, dato.price))
}

async function obtenerCategorias(){
    console.log("Llamando categorias");
    let datos = await fetch(`${ENDPOINT}manage/categories/`)
    console.log(datos.json());
}