let url = "https://plataforma.visasgomezyasociados.com/API/cityList";


function render(data){
    console.log("render")
    data.map((data) => {
        $('#cargando').append(data);
    })
}

function consumirAPI() {  
    $('#cargando').html("Cargando")   
    $.ajax({
        type: "GET",
        url: url,
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (data) {
            $('#cargando').html("Consumida correctamente")
            render(data);
        },
        failure: function (data) {
            console.log(data.responseText);
        },  
        error: function (data) {
            console.log(data.responseText);
        }
    });
}