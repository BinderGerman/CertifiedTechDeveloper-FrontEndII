window.addEventListener('load', function () {
    const valor = document.querySelector("#valor");
    const inicio = document.querySelector("#iniciar");
    // const parar = document.querySelector("#stop");
    const acelerador = document.querySelector("#acelerar");
    const pausa = document.querySelector("#pausa");

    //declaramos la variable n con valor inicial 0
    let n = 0;
    //declaramos la variable para que tenga acceso de forma global
    let intervalo;

    function iniciar() {
        //dentro de la funcion iniciar, le damos el valor del intervalo
        intervalo = setInterval(() => {
         //incrementamos el valor de n cada 1 segundo y lo muestra en pantalla
            valor.innerText = n++;
        }, 1000)
    }

    function acelerar() {
        //limpiamos el intervalo anterior para que no se ejecuten paralelamente el
        //evento de la funcion iniciar con el de acelerar.
        clearInterval(intervalo);
        //le damos un nuevo valor con un intervalo mas corto 
        intervalo = setInterval(() => {
            valor.innerText = n++;
        }, 500)
    }

    function pausar() {
         //detenemos el intervalo y se congela con el ultimo numero al que llego a incrementarse
        clearInterval(intervalo);
    }

    function detener() {
        //repetimos la logica de pausar, pero ademas reseteamos el valor de n a 0
        clearInterval(intervalo);
        n = 0;
        valor.innerText = n;
    }

    //asignamos las funciones a sus respectivos eventos
    inicio.addEventListener("click", iniciar);
    pausa.addEventListener("click", pausar);
    acelerador.addEventListener("click", acelerar);

    //Refactorizamos el listener de click del elemento #stop para 
    //usar un evento de key propio del window/document.
    window.addEventListener("keydown", (e) => {
        if(e.key == "Enter") {
            detener()
        }
    }
    );
})