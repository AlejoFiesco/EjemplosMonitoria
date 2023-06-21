const lista = document.querySelector('#lista-productos')
//Obtenemos la lista donde se pondrán los productos

const ENDPOINT = 'http://localhost:8000/'
fetch(ENDPOINT + 'api/products/')
  .then((response) => response.json())
  .then(response => {
    console.log(response);
    response.map((data) => lista.innerHTML += crearTarjeta(data.name, data.description, data.existence))
  })

const crearTarjeta = (nombre, descripcion, existencia) => `
<div class="tarjeta">
  <h3>${nombre}</h3>
  <p>${descripcion}</p>
  <p class="verde">Existencia: ${existencia}</p>
</div>
`