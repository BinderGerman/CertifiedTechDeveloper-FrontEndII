window.addEventListener('load', function () {
   
const botonInicio = document.querySelector("#iniciar")
const valor = document.querySelector("#valor")
const pausa = document.querySelector("#pausa")

let n = 0

let intervalo = function () {
    setInterval( () => {
        clearInterval(intervalo);
        valor.innerText = n++
    }, 1000)
}

botonInicio.addEventListener("click", intervalo)

pausa.addEventListener("click", () => {
    clearInterval(intervalo);
});

const stop = document.querySelector("#stop");

stop.addEventListener("click", () => {
    n = 0;
    valor.innerText = n;
} );

    // definimos la funcionalidad de acelerar
    // - duplicar la velocidad del cronometro
    // - que se puede seguir multiplicando(duplicando la velocidad)
    // - impacata en el numero del boton
   
    const acelerar = document.querySelector("#acelerar")

    function acelerarN() {
        setInterval( () => {
            valor.innerText = n++
        }, 500)
    }

    acelerar.addEventListener("click", acelerarN)

});