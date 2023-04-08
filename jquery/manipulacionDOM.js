
//Crea tarjetas
const htmlEditado = (id) => `
<div class="tarjeta">
    <h2>titulo ${id + 1}</h2>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci dolor enim, quasi aliquid est odit optio fuga eveniet cumque autem illum aspernatur dolore accusantium quaerat totam voluptatibus. Veniam, rerum assumenda?</p>
</div>`

const arreglo = []

//Se hace un arreglo con objetos
for (let i = 0; i < 5; i++) {
    const obj = {
        id: i,
        html: htmlEditado(i),
    }
    arreglo.push(obj)
}

//Se filtra por id
const nuevoArreglo = arreglo.filter((card) => card.id > 1);

/*for (key in nuevoArreglo[0]) {
    console.log(`${key}`);
}*/

/*nuevoArreglo.map((card) => {
    $('#tarjetas').append(card['html']);
})*/


$('.tarjeta').click((e)=>{
    e.target.classList.toggle('rojo')
})

$('#sumar').click(()=>{
    $('#num1').val()
    $('#num2').val()
})

$('#formulario>input').change(() => { 
    $('#ver1').html($('#num1').val())
    $('#ver2').html($('#num2').val())
});

//Se envía formulario
$('#login').submit((e)=>{
    e.preventDefault();
    let usuario = $('#user').val();
    let pass = $('#pass').val();
    sessionStorage.setItem('usuario', usuario);
    $('#sesion').html(
        sessionStorage.getItem('usuario') 
        ? sessionStorage.getItem('usuario') 
        : "No se ha iniciado sesión"
    )
})

//Cerrar sesión
$('#logout').click(()=>{
    sessionStorage.removeItem('usuario');
})
