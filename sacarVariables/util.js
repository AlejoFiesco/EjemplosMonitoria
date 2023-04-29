function guardarDatos(datos){
    console.table(datos)
    let saveString = JSON.stringify(datos);
    localStorage.setItem('guardados', saveString)
}

function cargarDatos(){
    let guardados = localStorage.getItem('guardados');
    console.table(JSON.parse(guardados));
}