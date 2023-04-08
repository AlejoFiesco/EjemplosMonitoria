let tarjeta = `
<div class="tarjeta">
    <div class="img">
        <img src="img.png" alt="">
    </div>
    <div class="descripcion">
        <h2>Titulo</h2>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, nostrum. Velit, aut est. Consequuntur blanditiis aut dicta maxime esse delectus, numquam iusto. Reprehenderit culpa delectus et eligendi quod officia unde.</p>
    </div>
</div>
`
let arregloTarjetas = [tarjeta, tarjeta, tarjeta, tarjeta]
let contenedor = document.getElementById("contenedor")
let contenedorGrid = document.getElementById("contenedorGrid")

arregloTarjetas.map((elemento) => {
    contenedor.innerHTML += elemento;
})

arregloTarjetas.map((elemento) => {
    contenedorGrid.innerHTML += elemento;
})


