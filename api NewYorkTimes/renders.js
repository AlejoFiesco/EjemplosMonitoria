let mostrarResultados = (resultados) => {
    $('#resultados').html('')
    resultados.map((result) => {
        $('#resultados').append(hacerPlantillaResultado(result))
    })
}

let mostrarOpciones = (subsecciones) => {
    $('#filtro').html("");
    subsecciones.map((sub)=>{
        $('#filtro').append(hacerPlantillaOpciones(sub))
    })
}