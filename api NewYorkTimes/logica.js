function buscarSubsecciones(arreglo) {
    let subseccion = [];
    arreglo.map((articulo) => {
        //Si indexOf encuentra no encuentra el parámetro devuelve -1
        if (subseccion.indexOf(articulo.subsection) === -1) {
            subseccion.push(articulo.subsection)
        }
    })
    return subseccion;
}

//Se hace el HTML para mostrar las opciones
let hacerPlantillaOpciones = (value) => {
    value = value === "" ? 'Sin seccion' : value;
    return `<option value="${value}">${value}</option>`
}

//Se hace el HTML para mostrar
let hacerPlantillaResultado = (art) => {
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

let filtrar = (articulos, filtro) => {
    filtro = filtro === 'Sin seccion' ? '' : filtro;
    const resultados = articulos.filter((art) => art.subsection === filtro)
    return resultados;
}