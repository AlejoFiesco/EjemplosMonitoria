let resultado = document.getElementById("resultado");

const enviar = (evt) => {
    evt.preventDefault();
    resultado.innerHTML = "enviando formulario";
}

const cambio = (evt) => {
    resultado.innerHTML = evt.value
}

const menu = document.getElementById("menu")

const ocultar = () => {
    menu.classList.toggle("oculto")
}


let contador = 0
let contando = false;

var h2Cont = document.getElementById("contador")

const contar = async () => {
    contando = !contando;

    let cronometro = setInterval(() => {
        if(contando){
            contador += 1;
            h2Cont.innerHTML = contador;
        }else{
            clearInterval(cronometro);
        }
    }, 1000)

}

let arreglo = [2, 3, 4, 5]
const contArreglo = document.getElementById("arreglo")

console.log(arreglo.filter((elemento) => elemento >= 2))


/*
for(let i = 0; i < arreglo.length; i++){
    arreglo.append(arreglo[i]);
}
*/
