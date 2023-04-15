let url = "https://plataforma.visasgomezyasociados.com/API/cityList";

function render(data){
    console.log("render")
    $("#resultado").html("");
    console.log(data);
    data.map((data) => {
        $('#resultado').append(`${data.id}: ${data.name} <br>`);
    })
}

function consumirAPI() {  
    $('#cargando').html("Cargando");
    $('#resultado').html("");  
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            render(data);
        },
        failure: function (data) {
            $('#resultado').html(data.responseText);
        },  
        error: function (data) {
            $('#resultado').html(data.responseText);
        },
        complete: function (data){
            $('#cargando').html('finalizado')
        }
    });
}