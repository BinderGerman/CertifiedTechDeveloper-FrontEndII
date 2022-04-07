window.addEventListener("load", function () {
  const botonInicio = document.querySelector("#iniciar");
  const valor = document.querySelector("#valor");

  let n = 0;


// Defino el intervalo fuera para obtener el objeto del intervalo
  let intervaloID = setInterval(() => {
    valor.innerText = n++;
  }, 1000);

// Lo pauso antes de que inicie a contar.
  clearInterval(intervaloID);

  botonInicio.addEventListener("click", () => {
    clearInterval(intervaloID);
    intervaloID = setInterval(() => {
      valor.innerText = n++;
    }, 1000);
  });

  const pausa = document.querySelector("#pausa");

  pausa.addEventListener("click", () => {
    clearInterval(intervaloID);
  });

  const stop = document.querySelector("#stop");

  stop.addEventListener("click", () => {
    n = 0;
    valor.innerText = n;
    clearInterval(intervaloID);
  });

  // definimos la funcionalidad de acelerar
  // - duplicar la velocidad del cronometro
  // - que se puede seguir multiplicando(duplicando la velocidad)
  // - impacta en el numero del boton

  const acelerar = document.querySelector("#acelerar");

  function acelerarN() {
    clearInterval(intervaloID);
    intervaloID = setInterval(() => {
      valor.innerText = n++;
    }, 500);
  }

  acelerar.addEventListener("click", acelerarN);
});
