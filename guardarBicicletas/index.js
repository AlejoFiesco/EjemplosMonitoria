let ENDPOINT = 'http://localhost:8000/'

let listado  = document.getElementById('listaBicicletas')
let formulario = document.getElementById('formulario')

formulario.addEventListener('submit', async (event)=>{
    event.preventDefault()
    let formData = new FormData(formulario)
    
    let data = {
        "model": formData.get('modelo'),
        "price": formData.get('precio')
    }
    console.log(data);
    let response = await fetch(ENDPOINT+'bicycles/obtenerTodas/',{
        method: 'POST',
        type: 'json',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })

    let datos = await response.json()
    traerDatos()
})

function crearPlantilla(modelo, precio){
    return`
    <div class="bicicleta">
        <h3>Modelo: ${modelo}</h3>
        <h4>Precio: ${precio}</h4>
    </div>
    `
}

function traerDatos(){  
    listado.innerHTML = "" 
    fetch(ENDPOINT+'bicycles/obtenerTodas/')
        .then(async (response)=>{
            let respuesta = await response.json()
            return respuesta
        })
        .then((respuesta) => {
            respuesta.map((bicicleta) => listado.innerHTML += crearPlantilla(bicicleta.model, bicicleta.price))
        })
}

traerDatos()

