const subseccion = [];
let articulos = [];

function buscarSubsecciones (arreglo){
    arreglo.map((articulo) => {
        //Si indexOf encuentra no encuentra el parámetro devuelve -1
        if(subseccion.indexOf(articulo.subsection) === -1){
            subseccion.push(articulo.subsection)
        }
    })
}

$(document).ready(()=>{
    let url = "https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=EFYQrppYzp7ZEcFkiHIGbh6CSKMfc8Il"

    //Se hace el HTML para mostrar las opciones
    let hacerPlantillaOpciones = (value) =>{
        value = value === "" ? 'Sin seccion' : value;
        return `<option value="${value}">${value}</option>`
    }

    //Se hace el HTML para mostrar
    let hacerPlantillaResultado = (art) =>{
        let titulo = art.title;
        let resumen = art.abstract;
        let fecha = art.updated;

        return `
        <div class="articulo">
            <h2>${titulo}</h2>
            <p>${fecha}</p>
            <p>${resumen}</p>
        </div>
        `;  

    }

    let filtrarYMostrar = (filtro) => {
        filtro = filtro === 'Sin seccion' ? '' : filtro;
        const resultados = articulos.filter((art) => art.subsection === filtro)
        $('#resultados').html('')
        resultados.map((result) => {
            $('#resultados').append(hacerPlantillaResultado(result))
        })
    }

    $.ajax({
        method: 'GET',
        url: url,
        contentType: "application/json; charset=utf-8",
        type: 'json',
        //Cuando se obtienen los resultados exitosas
        success: function (data){
            articulos = data.results;
            buscarSubsecciones(data.results);
            subseccion.map((sub)=>$('#filtro').append(hacerPlantillaOpciones(sub)))
            console.log(articulos);
        }
    })

    //Se agrega evento cuando hay cambio de valor
    $('#filtro').on('change', (e) => {
        filtrarYMostrar(e.target.value)
    })
})