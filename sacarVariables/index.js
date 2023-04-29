let dataForm = [];

let formulario = document.getElementById('formulario');

$('#formulario').on('submit', function(e){
    e.preventDefault();
    let datos = new FormData(formulario);
    let obj = {
        input1: datos.get('input1'),
        input2: datos.get('input2')
    }
    dataForm.push(obj)
})

$('#guardar').on('click', function(){
    guardarDatos(dataForm)
})
$('#leer').on('click', function(){
    cargarDatos()
})

