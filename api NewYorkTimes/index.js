$(document).ready(()=>{
    let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=EFYQrppYzp7ZEcFkiHIGbh6CSKMfc8Il"

    $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        type: 'json',
        //Cuando se obtienen los resultados exitosas
        success: function (data){
            articulos = data.results;
            let subsecciones = buscarSubsecciones(data.results);
            mostrarOpciones(subsecciones)
        }
    })

    //Se agrega evento cuando hay cambio de valor
    $('#filtro').on('change', (e) => {
        filtro = e.target.value;
        const resultados = filtrar(articulos, filtro);
        mostrarResultados(resultados);
    })
})