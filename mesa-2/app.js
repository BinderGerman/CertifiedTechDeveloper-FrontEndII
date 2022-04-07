let respuestaUsuario = parseInt(prompt("Elije una opción: piedra(1), tijera(2) o papel(3)"))
let respuestaComputadora = parseInt(Math.random()*3+1);
console.log(respuestaUsuario);
console.log(respuestaComputadora);

switch (respuestaUsuario - respuestaComputadora) {
    case -1:
        alert("Gana Usuario");
        break;
    case -2: 
        alert("Gana Computadora");
        break;
    case 1: 
        alert("Gana Computadora");
        break;
    case 2: 
        alert("Gana Usuario");
        break;
    default:
        alert("Empate");
        break;

}

let puntajeUsuario = 0;
let puntajeComputadora = 0;

if((respuestaUsuario - respuestaComputadora) == -1 || (respuestaUsuario - respuestaComputadora) == 2 ) {
    puntajeUsuario += 1;
} else if ((respuestaUsuario - respuestaComputadora) == -2 || (respuestaUsuario - respuestaComputadora) == 1) {
    puntajeComputadora += 1;
} else {
    console.log("no suma");
}

if (puntajeUsuario == 3) {
    console.log("ganaste usuario!");
}

if (puntajeComputadora == 3) {
    console.log("Ganaste Computadora");
}

console.log(puntajeUsuario);
console.log(puntajeComputadora);




